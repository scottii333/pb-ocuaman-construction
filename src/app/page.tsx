"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-22T20:00:00"); // December 22, 8 PM
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] px-6">
      <main className="flex flex-col items-center text-center max-w-3xl py-16 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/pb-ocuaman-logo.svg"
            alt="PB+Ocuaman Construction Logo"
            width={140}
            height={140}
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            PB+Ocuaman Construction
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-md">
            Building quality spaces with trust and expertise. Our official
            website is under construction.
          </p>
        </div>

        {/* Compact Countdown */}
        <div className="flex gap-3 flex-wrap justify-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
            const value =
              label === "Days"
                ? timeLeft.days
                : label === "Hours"
                ? timeLeft.hours
                : label === "Minutes"
                ? timeLeft.minutes
                : timeLeft.seconds;
            return (
              <div
                key={label}
                className="flex flex-col items-center justify-center bg-gray-900 text-white rounded-lg px-4 py-2 min-w-[60px] shadow-sm"
              >
                <span className="text-lg font-bold">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs mt-1">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Badge */}
        <span className="text-2xl sm:text-3xl font-semibold text-white bg-gray-900 px-8 py-3 rounded-full shadow-md">
          Coming Soon
        </span>

        {/* Contact Section */}
        <div className="flex flex-col items-center space-y-2 text-gray-700">
          <p className="text-lg font-medium">For inquiries:</p>
          <p className="text-lg font-semibold">
            pb.ocuaman.construction@gmail.com
          </p>
          <p className="text-lg font-semibold">0916 266 2773</p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} PB+Ocuaman Construction. All Rights
          Reserved.
        </footer>
      </main>
    </div>
  );
}
