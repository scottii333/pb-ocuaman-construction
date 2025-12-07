"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] px-6">
      <main className="flex flex-col items-center text-center max-w-3xl py-10 px-4 sm:px-6 lg:px-8 space-y-5 animate-fade-in">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/pb-ocuaman-logo.svg"
            alt="PB+Ocuaman Construction Logo"
            width={150}
            height={150}
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

        {/* Coming Soon Badge */}
        <div className="flex flex-col items-center space-y-3">
          <span className="text-2xl sm:text-3xl font-semibold text-white bg-gray-900 px-8 py-3 rounded-full shadow-md">
            Coming Soon
          </span>
        </div>

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
