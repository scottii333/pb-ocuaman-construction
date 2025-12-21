"use client";

import React, { useMemo, useRef, useState } from "react";
import axios, { type AxiosError } from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// --- Constants and Helpers ---

const MAX_NAME_CHARS = 30; // name max length
const MAX_EMAIL_CHARS = 30; // email max length (user preference)
const MAX_MESSAGE_WORDS = 250;
const MAX_MESSAGE_CHARS = 1000; // message char limit

const ALLOWED_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
]);

const wordCount = (text: string) =>
  text.trim() === "" ? 0 : text.trim().split(/\s+/).filter(Boolean).length;

const limitWords = (text: string, max: number) => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ");
};

function getAxiosErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const axErr = err as AxiosError<{ message?: string }>;
    return axErr.response?.data?.message || axErr.message || "Request failed.";
  }
  if (err instanceof Error) return err.message;
  return "An unexpected error occurred.";
}

// Phone: accept exactly 11 digits starting with 09 (e.g., 09918121869)
function isValidPhoneLocal(raw: string): boolean {
  return /^09\d{9}$/.test(raw);
}

// sanitize phone input: remove non-digits, keep at most 11 digits, convert +63 to leading 0
function sanitizePhoneInput(value: string): string {
  if (!value) return "";
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("63") && digits.length > 10) {
    digits = "0" + digits.slice(2);
  }
  if (/^9\d{9}$/.test(digits)) {
    digits = "0" + digits;
  }
  if (digits.length > 11) digits = digits.slice(0, 11);
  return digits;
}

// --- Component ---

export const GetInTouch = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_GOOGLE_SITE_KEY || "";

  const [inquiryType, setInquiryType] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // field-level errors shown inline
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const messageWords = useMemo(() => wordCount(message), [message]);
  const messageChars = message.length;

  const safeResetCaptcha = () => {
    try {
      recaptchaRef.current?.reset();
    } catch (e) {
      console.warn("reCAPTCHA reset failed:", e);
    }
    setCaptchaToken(null);
  };

  const clearFieldErrors = () => setFieldErrors({});

  const validateLocally = (): boolean => {
    const errors: Record<string, string> = {};

    if (!inquiryType) errors.inquiryType = "Please select an inquiry type.";
    if (!fullName.trim()) errors.fullName = "Full name is required.";
    else if (fullName.trim().length > MAX_NAME_CHARS)
      errors.fullName = `Full name must be at most ${MAX_NAME_CHARS} characters.`;

    if (!email.trim()) errors.email = "Email is required.";
    else if (email.length > MAX_EMAIL_CHARS)
      errors.email = `Email must be at most ${MAX_EMAIL_CHARS} characters.`;
    else {
      const basicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const domain = email.split("@")[1]?.toLowerCase() || "";
      if (!basicEmail) errors.email = "Invalid email format.";
      else if (!ALLOWED_EMAIL_DOMAINS.has(domain))
        errors.email = "Allowed domains: Gmail, Outlook/Hotmail, Yahoo.";
    }

    if (!phone.trim()) errors.phone = "Phone is required.";
    else if (!isValidPhoneLocal(phone.trim()))
      errors.phone =
        "Phone must be Philippine mobile format: 09XXXXXXXXX (11 digits).";

    if (!message.trim()) errors.message = "Message is required.";
    else if (messageWords > MAX_MESSAGE_WORDS)
      errors.message = `Message must be at most ${MAX_MESSAGE_WORDS} words.`;
    else if (messageChars > MAX_MESSAGE_CHARS)
      errors.message = `Message must be at most ${MAX_MESSAGE_CHARS} characters.`;

    if (!captchaToken) errors.recaptcha = "Please complete the reCAPTCHA.";

    setFieldErrors(errors);

    // specifically toast email format/domain errors in addition to inline highlighting
    if (errors.email) {
      toast.error(errors.email);
    }

    return Object.keys(errors).length === 0;
  };

  const canSubmit =
    inquiryType !== "" &&
    fullName.trim().length > 0 &&
    fullName.trim().length <= MAX_NAME_CHARS &&
    email.trim().length > 0 &&
    email.length <= MAX_EMAIL_CHARS &&
    phone.trim().length === 11 &&
    isValidPhoneLocal(phone.trim()) &&
    message.trim().length > 0 &&
    messageWords <= MAX_MESSAGE_WORDS &&
    messageChars <= MAX_MESSAGE_CHARS &&
    !!captchaToken &&
    !submitting;

  const handleSubmit = async () => {
    clearFieldErrors();

    if (!validateLocally()) {
      return;
    }

    if (!siteKey) {
      toast.error("reCAPTCHA is not configured.");
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Submitting your message...");

    try {
      const payload = {
        inquiryType,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        captchaToken,
      };

      const { data } = await axios.post("/api/contact", payload);

      if (data?.ok) {
        toast.success("Thank you — your message was sent.", { id: toastId });
        setInquiryType("");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFieldErrors({});
        safeResetCaptcha();
      } else if (data?.errors && typeof data.errors === "object") {
        setFieldErrors(data.errors as Record<string, string>);
        // if server also reports an email format error, toast it
        if (data.errors.email) toast.error(String(data.errors.email));
        toast.error(data.message || "Please fix the highlighted fields.", {
          id: toastId,
        });
      } else {
        toast.error(data?.message || "Submission failed. Please try again.", {
          id: toastId,
        });
        safeResetCaptcha();
      }
    } catch (err: unknown) {
      toast.error(getAxiosErrorMessage(err), { id: toastId });
      safeResetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  // input error class helper
  const inputErrorClass = (field: string) =>
    fieldErrors[field] ? "border-red-600 focus:ring-red-600" : "";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white!">
      <div className="flex flex-col p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-30 lg:pr-30">
        <h2 className="text-2xl md:text-3xl mb-3 mt-10">GET IN TOUCH</h2>
        <div className="border-b border-[#8B8B6F]" />
        <div className="mt-5 flex flex-col gap-0 md:gap-5">
          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-xs md:text-base"
            />
            <div>
              <p className="text-base md:text-2xl text-[#6a6f4c]">EMAIL US</p>
              <p className="text-xs md:text-sm">
                pb.ocuaman.construction@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-xs md:text-base"
            />
            <div>
              <p className="text-base md:text-2xl text-[#6a6f4c]">CALL US</p>
              <p className="text-sm">+63 927 654 3210 / +63 912 345 6789</p>
            </div>
          </div>

          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-xs md:text-base"
            />
            <div>
              <p className="text-base md:text-2xl text-[#6a6f4c]">VISIT US</p>
              <p className="text-sm">
                Unit 3F, 135 Kamias Road, Diliman, <br /> Quezon City, Metro
                Manila, 1101
              </p>
              <p className="text-sm mt-3">Mon–Sat, 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-b border-[#8B8B6F] mt-5" />
        <p className="mt-0 md:mt-5 text-xl p-3">Follow Us On:</p>
        <div className="p-3 pt-0 md:pt-3 flex gap-3">
          <FontAwesomeIcon
            icon={faFacebook}
            className="bg-[#8B8B6F] p-2 rounded-full text-white text-sm md:text-xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="bg-[#8B8B6F] p-2 rounded-full text-white text-sm md:text-xl"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="bg-[#8B8B6F] p-2 rounded-full text-white text-sm md:text-xl"
          />
        </div>
      </div>

      <div className="bg-[#f2f2f2] bg-[url('/texture/wall-texture.png')] bg-repeat min-h-100 flex flex-col gap-3 p-7 lg:p-10 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-25 lg:pr-25">
        <Label htmlFor="inquiryType" className="mt-5 text-sm md:text-base">
          TYPE OF INQUIRY
        </Label>
        <div className="mb-1">
          <Select
            value={inquiryType}
            onValueChange={(v) => {
              setInquiryType(v);
              setFieldErrors((s) => ({ ...s, inquiryType: "" }));
            }}
          >
            <SelectTrigger
              id="inquiryType"
              className={`w-full bg-white ${inputErrorClass("inquiryType")}`}
            >
              <SelectValue placeholder="Select Inquiry Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">
                General Construction Inquiry
              </SelectItem>
              <SelectItem value="residential">
                Residential Construction
              </SelectItem>
              <SelectItem value="commercial">
                Commercial Construction
              </SelectItem>
              <SelectItem value="renovation">
                Renovation / Remodeling
              </SelectItem>
              <SelectItem value="repair">Repair & Maintenance</SelectItem>
              <SelectItem value="estimate">
                Project Estimate / Quotation
              </SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
            </SelectContent>
          </Select>
          {fieldErrors.inquiryType && (
            <div className="text-red-600 text-sm mt-1">
              {fieldErrors.inquiryType}
            </div>
          )}
        </div>

        <Label htmlFor="fullName" className="text-sm md:text-base">
          FULL NAME
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your Name"
          className={`bg-white w-full ${inputErrorClass("fullName")}`}
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value.slice(0, MAX_NAME_CHARS));
            setFieldErrors((s) => ({ ...s, fullName: "" }));
          }}
          maxLength={MAX_NAME_CHARS}
          required
          aria-required="true"
        />
        {fieldErrors.fullName && (
          <div className="text-red-600 text-sm mt-1">
            {fieldErrors.fullName}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="email" className="text-sm md:text-base">
              EMAIL ADDRESS
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              className={`bg-white w-full ${inputErrorClass("email")}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.slice(0, MAX_EMAIL_CHARS));
                setFieldErrors((s) => ({ ...s, email: "" }));
              }}
              maxLength={MAX_EMAIL_CHARS}
              required
              aria-required="true"
            />
            {fieldErrors.email && (
              <div className="text-red-600 text-sm mt-1">
                {fieldErrors.email}
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm md:text-base">
              PHONE NUMBER
            </Label>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder="09XXXXXXXXX"
              className={`bg-white w-full ${inputErrorClass("phone")}`}
              value={phone}
              onChange={(e) => {
                const v = sanitizePhoneInput(e.target.value);
                setPhone(v);
                setFieldErrors((s) => ({ ...s, phone: "" }));
              }}
              maxLength={11}
              required
              aria-required="true"
            />

            {fieldErrors.phone && (
              <div className="text-red-600 text-sm mt-1">
                {fieldErrors.phone}
              </div>
            )}
          </div>
        </div>

        <Label htmlFor="message" className="text-sm md:text-base">
          MESSAGE
        </Label>
        <Textarea
          id="message"
          placeholder="Your Message"
          className={`bg-white w-full ${inputErrorClass("message")}`}
          value={message}
          onChange={(e) => {
            const limitedByWords = limitWords(
              e.target.value,
              MAX_MESSAGE_WORDS
            );
            const limitedByChars = limitedByWords.slice(0, MAX_MESSAGE_CHARS);
            setMessage(limitedByChars);
            setFieldErrors((s) => ({ ...s, message: "" }));
          }}
          maxLength={MAX_MESSAGE_CHARS}
          required
          aria-required="true"
        />
        {fieldErrors.message && (
          <div className="text-red-600 text-sm mt-1">{fieldErrors.message}</div>
        )}
        <div className="flex justify-between text-xs text-gray-500 mt-1 mb-3">
          <div>
            {messageWords}/{MAX_MESSAGE_WORDS} words
          </div>
          <div>
            {messageChars}/{MAX_MESSAGE_CHARS} chars
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end mb-10 items-start gap-4">
          {siteKey ? (
            <div className="mt-5">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setFieldErrors((s) => ({ ...s, recaptcha: "" }));
                }}
                onExpired={safeResetCaptcha}
              />
              {fieldErrors.recaptcha && (
                <div className="text-red-600 text-sm mt-1">
                  {fieldErrors.recaptcha}
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-red-600 mt-5">
              reCAPTCHA not configured.
            </p>
          )}

          <button
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-10 py-3 text-white mt-5 hover:bg-[#7a7a5f] cursor-pointer text-base flex justify-between items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
            aria-label="Submit inquiry form"
          >
            {submitting ? "Submitting..." : "Submit"}{" "}
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-base rotate-45"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
