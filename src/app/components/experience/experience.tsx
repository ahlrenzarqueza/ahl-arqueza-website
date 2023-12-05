"use client";

import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-4">
        Experience
      </h1>
      <div className="flex mb-4">
        <Image
          className="object-contain rounded-full border-2 border-green-500 w-8 h-8 inline-block mr-2"
          src="/company-images/alltakes.webp"
          alt="AllTakes Company Logo"
          width={48}
          height={48}
        />
        <div className="inline-flex flex-col">
          <span className="text-lg md:text-2xl">
            Full Stack Software Engineer
          </span>
          <span className="uppercase text-sm md:text-lg mb-2">AllTakes</span>

          <ul className="list-disc">
            <li>
              Developed from scratch a <b>video-conferencing web platform</b>
            </li>
            <li>
              Maintained backend and cloud architecture code written in NodeJS
              and AWS CloudFormation templates
            </li>
            <li>
              Integrated AI tools, such as ChatGPT and Whisper to platform
            </li>
          </ul>
        </div>
      </div>

      <div className="flex mb-4">
        <Image
          className="object-contain rounded-full border-2 border-green-500 w-8 h-8 inline-block mr-2"
          src="/company-images/samsung.png"
          alt="Samsung Electronics Company Logo"
          width={48}
          height={48}
        />
        <div className="inline-flex flex-col">
          <span className="text-lg md:text-2xl">
            Frontend Software Engineer
          </span>
          <span className="uppercase text-sm md:text-lg mb-2">
            Samsung Electronics
          </span>

          <ul className="list-disc">
            <li>
              Implemented two (2) major Web applications to Japan telecom
              vendors
            </li>
            <li>
              Contributed on proprietary React component library of Samsung
            </li>
            <li>
              Participated in AWS training activities, which lead to achieve AWS
              Solutions Architect – Professional certification.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <div className="rounded-full border-2 border-green-500 w-8 h-8 text-center animate-spin">
          ֯
        </div>
        <div className="flex flex-col ml-2">
          <div>
            <ReactTypingEffect
              className="mb-4"
              speed={50}
              eraseDelay={60000}
              staticText="There's more but"
              text="honestly I need to strategically fit them altogether here. 🙇 Please stay tuned, I'll work on this 👷‍♂️"
            />
          </div>
          <p className="block font-semibold italic">
            For the meantime, you can view my full resume{" "}
            <a
              className="underline text-green-500"
              target="_blank"
              href="/Ahl Arqueza (Full Stack Engineer) Resume.pdf"
            >
              here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
