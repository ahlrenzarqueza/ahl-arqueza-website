"use client";

import { Carousel, CarouselItem } from "@/app/lib/carousel/carousel";
import RoundtableImage from "@/../public/project-images/Roundtable.png";
import AutocadoImage from "@/../public/project-images/Autocado.png";

const items = [
  {
    title: "Roundtable",
    subtitle:
      "Video conferencing web application built on React and AWS Serverless",
    src: RoundtableImage,
  },
  {
    title: "Autocado",
    subtitle: "Automotive parts E-commerce site built on Next.js",
    src: AutocadoImage,
  },
  // { title: "Freezer IoT Mobile App", subtitle: "", src: AutocadoImage },
];

export default function Projects() {
  return (
    <div className="flex flex-col relative w-full px-4 py-8">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-2 md:mb-6">
        Projects
      </h1>
      <h3>
        These are only some of the projects I have worked on (that I am allowed
        to share). Stay tuned for more! 🥞
      </h3>
      <Carousel
        className="relative flex-1 w-full md:max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl self-center rounded-md"
        items={items}
        renderItem={({ item, index, isActive, isSnapPoint }) => (
          <CarouselItem
            key={index}
            isSnapPoint={isSnapPoint}
            isActive={isActive}
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
          />
        )}
      />
    </div>
  );
}
