"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
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
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// --- Constants & Helpers ---
const MAX_NAME_CHARS = 30;
const MAX_EMAIL_CHARS = 30;
const MAX_MESSAGE_WORDS = 250;
const MAX_MESSAGE_CHARS = 1000;

const ALLOWED_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo. com",
  "ymail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
]);

const SOCIAL_MEDIA_LINKS = {
  facebook: "https://www.facebook.com/pbocuamanconstruction",
  instagram: "https://www.instagram.com/pbocuamanconstruction/",
  linkedin:
    "https://www.linkedin.com/in/pb-ocuaman-construction-services-ba5504388/",
};

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
    return axErr.response?.data?.message || axErr.message || "Request failed. ";
  }
  if (err instanceof Error) return err.message;
  return "An unexpected error occurred.";
}

// Sanitize phone to 09XXXXXXXXX
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

function isValidPhoneLocal(raw: string): boolean {
  return /^09\d{9}$/.test(raw);
}

// --- Component ---

export const ApplyForJob = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_GOOGLE_SITE_KEY || "";

  // Form State
  const [jobType, setJobType] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const messageWords = useMemo(() => wordCount(message), [message]);
  const messageChars = message.length;

  const safeResetCaptcha = () => {
    try {
      recaptchaRef.current?.reset();
    } catch (e) {
      console.warn("reCAPTCHA reset error:", e);
    }
    setCaptchaToken(null);
  };

  const clearFieldErrors = () => setFieldErrors({});

  const validateLocally = () => {
    const errors: Record<string, string> = {};

    if (!jobType) errors.jobType = "Please select a job type. ";

    if (!fullName.trim()) errors.fullName = "Full name is required.";
    else if (fullName.trim().length > MAX_NAME_CHARS)
      errors.fullName = `Name max ${MAX_NAME_CHARS} chars. `;

    if (!email.trim()) errors.email = "Email is required.";
    else if (email.length > MAX_EMAIL_CHARS)
      errors.email = `Email max ${MAX_EMAIL_CHARS} chars.`;
    else {
      const domain = email.split("@")[1]?.toLowerCase() || "";
      if (!ALLOWED_EMAIL_DOMAINS.has(domain))
        errors.email = "Invalid domain (Gmail, Yahoo, Outlook only).";
    }

    if (!phone.trim()) errors.phone = "Phone is required.";
    else if (!isValidPhoneLocal(phone))
      errors.phone = "Format: 09XXXXXXXXX (11 digits).";

    if (!message.trim()) errors.message = "Message is required.";
    else if (messageWords > MAX_MESSAGE_WORDS)
      errors.message = "Message too long. ";

    if (!captchaToken) errors.recaptcha = "Please complete the reCAPTCHA. ";

    setFieldErrors(errors);
    if (errors.email) toast.error(errors.email); // Toast specific email errors

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    clearFieldErrors();
    if (!validateLocally()) return;
    if (!siteKey) {
      toast.error("reCAPTCHA is not configured.");
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Submitting application...");

    try {
      const payload = {
        jobType,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        captchaToken,
      };

      const { data } = await axios.post("/api/applicant", payload);

      if (data?.ok) {
        toast.success("Application submitted successfully!", { id: toastId });
        // Reset
        setJobType("");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        safeResetCaptcha();
      } else if (data?.errors) {
        setFieldErrors(data.errors);
        toast.error(data.message || "Please fix highlighted errors.", {
          id: toastId,
        });
      } else {
        toast.error(data?.message || "Something went wrong.", { id: toastId });
        safeResetCaptcha();
      }
    } catch (err) {
      toast.error(getAxiosErrorMessage(err), { id: toastId });
      safeResetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  const inputErrorClass = (field: string) =>
    fieldErrors[field]
      ? "border-red-600 focus:ring-red-600 ring-1 ring-red-600"
      : "";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left Column (Static Info) */}
      <div className="flex flex-col p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-30 lg:pr-30 pt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 mt-10">
          GET IN TOUCH
        </h2>
        <div className="border-b border-[#8B8B6F]"></div>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-base"
            />
            <div className="font-medium">
              <p className="text-base md:text-lg lg:text-xl text-[#8B8B6F]">
                EMAIL US
              </p>
              <p className="text-sm">pb.ocuaman.construction@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-base"
            />
            <div className="font-medium">
              <p className="text-base md:text-lg lg:text-xl text-[#8B8B6F]">
                CALL US
              </p>
              <p className="text-sm">+63 927 654 3210 /+63 912 345 6789</p>
            </div>
          </div>

          <div className="flex gap-3 p-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-base"
            />
            <div className="font-medium">
              <p className="text-base md:text-lg lg:text-xl text-[#8B8B6F]">
                VISIT US
              </p>
              <p className="text-sm">
                Unit 3F, 135 Kamias Road, Diliman, <br /> Quezon City, Metro
                Manila, 1101
              </p>
              <p className="text-sm">Mon–Sat, 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-b border-[#8B8B6F] mt-5"></div>
        <p className="mt-5 text-xl p-3">Follow Us On: </p>
        <div className="p-3 flex gap-0">
          <Link
            href={SOCIAL_MEDIA_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="bg-[#8B8B6F] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#7a7a5f] transition"
            />
          </Link>
          <Link
            href={SOCIAL_MEDIA_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="ml-5 bg-[#8B8B6F] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#7a7a5f] transition"
            />
          </Link>
          <Link
            href={SOCIAL_MEDIA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="ml-5 bg-[#8B8B6F] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#7a7a5f] transition"
            />
          </Link>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div
        className="bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat min-h-100 flex flex-col gap-3 p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-25 lg:pr-25 pt-20 "
        id="apply-form-section"
      >
        <h3 className="text-xl font-medium md:text-2xl lg:text-3xl">
          <span className="text-yellow-500">APPLY</span> FOR A JOB
        </h3>

        <Label htmlFor="jobType" className="mt-5 text-base">
          JOB TYPE
        </Label>
        <div>
          <Select
            value={jobType}
            onValueChange={(v) => {
              setJobType(v);
              setFieldErrors((prev) => ({ ...prev, jobType: "" }));
            }}
          >
            <SelectTrigger
              id="jobType"
              className={`w-full rounded-none bg-white ${inputErrorClass("jobType")}`}
            >
              <SelectValue placeholder="Select Job Type" />
            </SelectTrigger>

            <SelectContent className="rounded-none">
              <SelectItem value="welder">Welder</SelectItem>
              <SelectItem value="foreman">Foreman</SelectItem>
              <SelectItem value="electrician">Electrician</SelectItem>
              <SelectItem value="plumber">Plumber</SelectItem>
              <SelectItem value="carpenter">Carpenter</SelectItem>
              <SelectItem value="painter">Painter</SelectItem>
              <SelectItem value="laborer">Laborer</SelectItem>
            </SelectContent>
          </Select>
          {fieldErrors.jobType && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.jobType}</p>
          )}
        </div>

        <Label htmlFor="fullName" className="text-md">
          FULL NAME
        </Label>
        <div>
          <Input
            id="fullName"
            type="text"
            placeholder="Your Name"
            className={`bg-white rounded-none w-full ${inputErrorClass("fullName")}`}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value.slice(0, MAX_NAME_CHARS));
              setFieldErrors((prev) => ({ ...prev, fullName: "" }));
            }}
            maxLength={MAX_NAME_CHARS}
          />
          {fieldErrors.fullName && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.fullName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="text-md">
              EMAIL ADDRESS
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              className={`bg-white rounded-none w-full ${inputErrorClass("email")}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.slice(0, MAX_EMAIL_CHARS));
                setFieldErrors((prev) => ({ ...prev, email: "" }));
              }}
              maxLength={MAX_EMAIL_CHARS}
            />
            {fieldErrors.email && (
              <p className="text-red-600 text-xs mt-1">{fieldErrors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="phone" className="text-md">
              PHONE NUMBER
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="09XXXXXXXXX"
              className={`bg-white rounded-none w-full ${inputErrorClass("phone")}`}
              value={phone}
              onChange={(e) => {
                setPhone(sanitizePhoneInput(e.target.value));
                setFieldErrors((prev) => ({ ...prev, phone: "" }));
              }}
              maxLength={11}
            />
            {fieldErrors.phone && (
              <p className="text-red-600 text-xs mt-1">{fieldErrors.phone}</p>
            )}
          </div>
        </div>

        <Label htmlFor="message" className="text-md">
          TELL US ABOUT YOURSELF
        </Label>
        <div>
          <Textarea
            id="message"
            placeholder="Your Message"
            className={`bg-white rounded-none w-full min-h-25 ${inputErrorClass("message")}`}
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
            <div className="text-red-600 text-sm mt-1">
              {fieldErrors.message}
            </div>
          )}
          <div className="flex justify-between text-xs text-gray-500 mt-1 mb-3">
            <div>
              {messageWords}/{MAX_MESSAGE_WORDS} words
            </div>
            <div>
              {messageChars}/{MAX_MESSAGE_CHARS} chars
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-10 mt-5">
          {siteKey ? (
            <div className="self-end">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setFieldErrors((prev) => ({ ...prev, recaptcha: "" }));
                }}
                onExpired={safeResetCaptcha}
              />
              {fieldErrors.recaptcha && (
                <p className="text-red-600 text-xs text-right mt-1">
                  {fieldErrors.recaptcha}
                </p>
              )}
            </div>
          ) : (
            <p className="text-red-500 text-sm">reCAPTCHA not configured</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-10 py-3 text-white hover:bg-[#7a7a5f] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex justify-between items-center gap-2"
          >
            {submitting ? "Submitting..." : "Submit Application"}
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
