"use client";

import { Carousel, CarouselImageItem } from "@/app/lib/carousel/carousel";
import RoundtableImage from "@/../public/project-images/Roundtable.png";
import AutocadoImage from "@/../public/project-images/Autocado.png";
import FreezerIoTImage from "@/../public/project-images/FreezerIoT.png";

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
  { title: "Freezer IoT Mobile App", subtitle: "", src: FreezerIoTImage },
];

export default function Projects() {
  return (
    <div className="flex flex-col relative w-full px-4 py-8">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-2 md:mb-6">
        Projects
      </h1>
      <Carousel
        className="relative flex-1 w-full md:max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl self-center rounded-md"
        style={{ maxWidth: "calc(158.73vh - 16rem)" }}
        items={items}
        renderItem={({ item, index, isActive, isSnapPoint }) => (
          <CarouselImageItem
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
