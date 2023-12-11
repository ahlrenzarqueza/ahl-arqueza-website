"use client";

import { Carousel, CarouselItem } from "@/app/lib/carousel/carousel";
import Image from "next/image";
import AllTakesImage from "@/../public/company-images/alltakes.webp";
import SamsungImage from "@/../public/company-images/samsung.png";
import OutliantImage from "@/../public/company-images/outliant.jpeg";
import SqreemImage from "@/../public/company-images/Sqreem.png";
import Link from "next/link";

export default function Experience() {
  const experienceItems = [
    {
      children: (
        <div className="flex">
          <Link
            className="mr-2 md:mr-8 flex-shrink-0"
            href="https://roundtable.alltakes.com"
            target="_blank"
          >
            <Image
              className="object-fill rounded-full border-2 border-green-500 w-16 md:w-32 inline-block"
              src={AllTakesImage}
              alt="AllTakes Company Logo"
            />
          </Link>
          <div className="inline-flex flex-col">
            <span className="text-xl md:text-4xl text-green-500">
              Full Stack Software Engineer
            </span>
            <span className="uppercase text-sm md:text-base">
              Oct 2021 - Present{" "}
              <span className="text-gray-500">(FULL-TIME)</span>
            </span>
            <span className="flex flex-col md:flex-row items-start md:items-center text-lg md:text-xl space-x-0 md:space-x-4">
              <span>AllTakes</span>
              <span className="text-gray-500 hidden md:inline">|</span>
              <span>
                🇺🇸 San Francisco, <span className="inline md:hidden">CA</span>
                <span className="hidden md:inline">California</span>
              </span>
            </span>

            <ul className="list-disc mt-4 -ml-8 md:ml-4 text-lg md:text-xl">
              <li>
                Developed from scratch a <b>video-conferencing web platform</b>
              </li>
              <li>
                Maintained backend and cloud architecture code written in{" "}
                <b>NodeJS and AWS CloudFormation templates</b>
              </li>
              <li>
                Integrated AI tools, such as ChatGPT and Whisper to platform
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      children: (
        <div className="flex">
          <Link
            className="mr-2 md:mr-8 flex-shrink-0"
            href="https://www.outliant.com/"
            target="_blank"
          >
            <Image
              className="object-fill rounded-full border-2 border-green-500 w-16 md:w-32 inline-block"
              src={OutliantImage}
              alt="Outliant Company Logo"
            />
          </Link>
          <div className="inline-flex flex-col">
            <span className="text-xl md:text-4xl text-green-500">
              Full Stack Software Engineer
            </span>

            <span className="uppercase text-sm md:text-base">
              Mar 2022 - Jun 2023{" "}
              <span className="text-gray-500">(CONTRACTOR)</span>
            </span>
            <span className="flex flex-col md:flex-row items-start md:items-center text-lg md:text-xl space-x-0 md:space-x-4">
              <span className="">Outliant</span>
              <span className="text-gray-500 hidden md:inline">|</span>
              <span>
                🇺🇸 Austin, <span className="inline md:hidden">TX</span>
                <span className="hidden md:inline">Texas</span>
              </span>
            </span>

            <ul className="list-disc mt-4 -ml-8 md:ml-4 text-lg md:text-xl">
              <li>
                Lead development of an e-commerce website from scratch using
                NextJS
              </li>
              <li>
                Developed mobile app for accessing freezer monitoring devices
                using AWS IoT
              </li>
              <li>
                Supervised micro-services orchestration of GraphQL and MongoDB
                instances in the cloud
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      children: (
        <div className="flex">
          <Link
            className="mr-2 md:mr-8 flex-shrink-0"
            href="https://research.samsung.com/srph?gad_source=1&gclid=CjwKCAiAg9urBhB_EiwAgw88mWdfFoh7GxJ53_ZasKDs3UUqSOtDkKR_lA8ujvSm_u4CBsmbBjSCChoCPjMQAvD_BwE"
            target="_blank"
          >
            <Image
              className="object-fill rounded-full border-2 border-green-500 w-16 md:w-32 inline-block"
              src={SamsungImage}
              alt="Samsung Electronics Company Logo"
            />
          </Link>
          <div className="inline-flex flex-col">
            <span className="text-xl md:text-4xl text-green-500">
              Frontend Engineer
            </span>

            <span className="uppercase text-sm md:text-base">
              Oct 2020 - Mar 2022{" "}
              <span className="text-gray-500">(FULL-TIME)</span>
            </span>
            <span className="flex flex-col md:flex-row items-start md:items-center text-lg md:text-xl space-x-0 md:space-x-4">
              <span className="">Samsung Electronics</span>
              <span className="text-gray-500 hidden md:inline">|</span>
              <span>
                🇵🇭 Taguig, <span className="inline md:hidden">MNL</span>
                <span className="hidden md:inline">Manila</span>
              </span>
            </span>

            <ul className="list-disc mt-4 -ml-8 md:ml-4 text-lg md:text-xl">
              <li>
                Implemented two (2) major Web applications to Japan telecom
                vendors
              </li>
              <li>
                Contributed on proprietary React component library of Samsung
              </li>
              <li>
                Participated in AWS training activities, which lead to achieve
                AWS Solutions Architect – Professional certification.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      children: (
        <div className="flex">
          <Link
            className="mr-2 md:mr-8 flex-shrink-0"
            href="https://sqreemtech.com/"
            target="_blank"
          >
            <Image
              className="object-fill rounded-full border-2 border-green-500 w-16 md:w-32 inline-block"
              src={SqreemImage}
              alt="Sqreem Technologies Logo"
            />
          </Link>
          <div className="inline-flex flex-col">
            <span className="text-xl md:text-4xl text-green-500">
              Systems Analyst
            </span>

            <span className="uppercase text-sm md:text-base">
              Oct 2020 - Mar 2022{" "}
              <span className="text-gray-500">(FULL-TIME)</span>
            </span>
            <span className="flex flex-col md:flex-row items-start md:items-center text-lg md:text-xl space-x-0 md:space-x-4">
              <span className="">Sqreemtech Pte. Ltd.</span>
              <span className="text-gray-500 hidden md:inline">|</span>
              <span>
                🇵🇭 <span className="inline md:hidden">MNL</span>
                <span className="hidden md:inline">Manila</span> & 🇸🇬{" "}
                <span className="inline md:hidden">SG</span>
                <span className="hidden md:inline">Singapore</span>
              </span>
            </span>

            <ul className="list-disc mt-4 -ml-8 md:ml-4 text-lg md:text-xl">
              <li>
                Maintained a JS framework capable of architecting web controls
                and functions that can be reused on any web application
              </li>
              <li>
                Formulated system architectures client-facing web apps such as
                CRM and BI tools.
              </li>
              <li>
                Promoted after two (2) years and lead a Frontend team of ten
                (10) members
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-4">
        Experience
      </h1>

      <Carousel
        className="relative flex-1 w-full max-w-full self-center rounded-md"
        items={experienceItems}
        renderItem={({ index, isActive, isSnapPoint, item }) => (
          <CarouselItem
            className="flex items-center p-4 md:p-8 md:px-12"
            key={index}
            isSnapPoint={isSnapPoint}
            isActive={isActive}
          >
            {item.children}
          </CarouselItem>
        )}
      />
    </div>
  );
}
