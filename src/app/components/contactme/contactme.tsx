"use client";

import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactMe() {
  return (
    <div className="flex flex-col">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-4">
        Contact Me
      </h1>
      <a
        className="text-lg md:text-2xl flex items-center mb-4"
        href="https://www.linkedin.com/in/ahlrenz-arqueza/"
      >
        <ArrowTopRightOnSquareIcon className="mr-4 text-gray-500 w-10" />
        <span className="underline">linkedin.com/in/ahlrenz-arqueza/</span>
      </a>

      <a
        className="text-lg md:text-2xl flex items-center mb-4"
        href="tel:+639053311897"
      >
        <PhoneIcon className="mr-4 text-gray-500 w-10" />
        <span className="underline mr-1 md:mr-4">+639053311897</span> (WhatsApp)
      </a>

      <a
        target="_blank"
        className="text-lg md:text-2xl flex items-center mb-4"
        href="mailto:aq.arqueza@gmail.com"
      >
        <EnvelopeIcon className="mr-4 text-gray-500 w-10" />
        <span className="underline">aq.arqueza@gmail.com</span>
      </a>
    </div>
  );
}
