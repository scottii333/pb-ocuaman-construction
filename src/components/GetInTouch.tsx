import React from "react";
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
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const GetInTouch = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  ">
      <div className="flex flex-col p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-30 lg:pr-30">
        <h2 className="text-xl font-semibold mb-3 mt-10">GET IN TOUCH</h2>
        <div className="border-b border-[#8B8B6F]"></div>
        <div className="mt-5 flex flex-col gap-5">
          {/* Email Us */}
          <div className="flex  gap-3 p-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-md"
            />
            <div className="font-semibold">
              <p className="text-md text-[#8B8B6F]">EMAIL US</p>
              <p className="text-sm">pb.ocuaman.construction@gmail.com</p>
            </div>
          </div>

          <div className="flex  gap-3 p-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-md"
            />
            <div className="font-semibold">
              <p className="text-md text-[#8B8B6F]">CALL US</p>
              <p className="text-sm">+63 927 654 3210 /+63 912 345 6789</p>
            </div>
          </div>

          <div className="flex  gap-3 p-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-white bg-[#8B8B6F] p-2 rounded-full text-md"
            />
            <div className="font-semibold">
              <p className="text-md text-[#8B8B6F]">VISIT US</p>
              <p className="text-sm">
                Unit 3F, 135 Kamias Road, Diliman, <br /> Quezon City, Metro
                Manila, 1101
              </p>
              <p className="text-sm">Mon–Sat, 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-b border-[#8B8B6F] mt-5"></div>
        <p className="mt-5 text-xl p-3">Follow Us On:</p>
        <div className="p-3">
          <FontAwesomeIcon
            icon={faFacebook}
            className="bg-[#8B8B6F] p-2 rounded-full text-white text-xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="ml-5 bg-[#8B8B6F] p-2 rounded-full text-white text-xl"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="ml-5 bg-[#8B8B6F] p-2 rounded-full text-white text-xl  "
          />
        </div>
      </div>
      <div className=" bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat   min-h-100 flex flex-col gap-3 p-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-25 lg:pr-25">
        <Label htmlFor="inquiryType" className="mt-5 text-md">
          TYPE OF INQUIRY
        </Label>

        <Select>
          <SelectTrigger id="inquiryType" className="w-full bg-white">
            <SelectValue placeholder="Select Inquiry Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="general">
              General Construction Inquiry
            </SelectItem>
            <SelectItem value="residential">
              Residential Construction
            </SelectItem>
            <SelectItem value="commercial">Commercial Construction</SelectItem>
            <SelectItem value="renovation">Renovation / Remodeling</SelectItem>
            <SelectItem value="repair">Repair & Maintenance</SelectItem>
            <SelectItem value="estimate">
              Project Estimate / Quotation
            </SelectItem>
            <SelectItem value="consultation">Consultation</SelectItem>
          </SelectContent>
        </Select>
        <Label htmlFor="fullName" className="text-md">
          FULL NAME
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your Name"
          className=" bg-white w-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  ">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="text-md">
              EMAIL ADDRESS
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              className=" bg-white w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="phone" className="text-md">
              PHONE NUMBER
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className=" bg-white w-full"
            />
          </div>
        </div>
        <Label htmlFor="message" className="text-md">
          MESSAGE
        </Label>
        <Textarea
          id="message"
          placeholder="Your Message"
          className=" bg-white w-full min-h-40"
        />

        <div className="flex justify-end  mb-10">
          <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-10 py-3 rounded-lg text-white mt-5 hover:bg-[#7a7a5f] cursor-pointer text-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
