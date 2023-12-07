"use client";

import { Carousel, CarouselItem } from "@/app/lib/carousel/carousel";
import SampleImage from "@/../public/project-images/image-1.jpeg";

const items = [
  { title: "Roundtable", subtitle: "Video conferencing web application" },
  {
    title: "Autocado",
    subtitle: "Automotive parts E-commerce site built on Next.js",
  },
  { title: "Iykyk", subtitle: "50.435664924, 5.969496122" },
].map(({ title, subtitle }, i) => ({
  src: SampleImage,
  title,
  subtitle,
}));

export default function Projects() {
  return (
    <div className="flex flex-col relative w-full px-4 py-8">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl md:mb-8">
        Projects
      </h1>
      <Carousel
        className="relative flex-1 w-full md:max-w-4xl xl:max-w-6xl self-center rounded-md"
        scrollPadding
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
