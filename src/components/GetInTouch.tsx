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

export const GetInTouch = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:p-10">
        <h2>GET IN TOUCH</h2>
        <div className="border-b-3 border-[#8B8B6F]"></div>
        <p>EMAIL US</p>
        <p>pb.ocuaman.construction@gmail.com</p>
        <p>CALL US</p>
        <p>+63 927 654 3210</p>
        <p>+63 912 345 6789</p>
        <p>VISIT US</p>
        <p>123 Construction Ave, City, Country</p>
        <div className="border-b-3 border-[#8B8B6F]"></div>
        <p>Follow Us On:</p>
      </div>
      <div className=" bg-[#f2f2f2] bg-[url('/texture/rocky-wall.png')] bg-repeat min-h-100 p-5">
        <Label htmlFor="inquiryType">TYPE OF INQUIRY</Label>

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
        <Label htmlFor="fullName">FULL NAME</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Your Name"
          className=" bg-white w-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
          <div>
            <Label htmlFor="email">EMAIL ADDRESS</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              className=" bg-white w-full"
            />
          </div>
          <div>
            <Label htmlFor="phone">PHONE NUMBER</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className=" bg-white w-full"
            />
          </div>
        </div>
        <Label htmlFor="message">MESSAGE</Label>
        <Textarea
          id="message"
          placeholder="Your Message"
          className=" bg-white w-full"
        />

        <button className="bg-[#8B8B6F] bg-[url('/texture/green-cup.png')] bg-repeat px-15 py-3 rounded-lg text-white mt-5 hover:bg-[#7a7a5f] cursor-pointer">
          Submit
        </button>
      </div>
    </section>
  );
};
