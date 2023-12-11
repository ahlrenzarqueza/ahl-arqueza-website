"use client";
import { Element } from "react-scroll";
import Sidebar from "@/app/components/sidebar/sidebar";
import { SiteSections } from "@/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import createScrollSnap from "scroll-snap";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import WorkInProgressInfo from "./components/wip-info/wip-info";
import ContactMe from "./components/contactme/contactme";
import Projects from "./components/projects/projects";
import { useRouter, useSearchParams } from "next/navigation";
import MotionImageCard from "./lib/motion-card/motion-card";

import PortraitOne from "@/../public/portrait-images/portrait-1.png";
import PortraitTwo from "@/../public/portrait-images/portrait-2.png";
import classNames from "classnames";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const unbindScrollSnap = useRef<(() => void) | null>(null);

  const sectionFromSearch = searchParams.get("section");
  const [activeSection, setActiveSection] = useState<SiteSections>(() => {
    if (
      Object.values(SiteSections).includes(sectionFromSearch as SiteSections)
    ) {
      return sectionFromSearch as SiteSections;
    }
    return SiteSections.HOME;
  });
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = useCallback((target: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = target as HTMLDivElement;
    const totalScroll = scrollHeight - clientHeight;
    const currentScroll = scrollTop;
    const scrollPercentage = (currentScroll / totalScroll) * 100;
    setScrollPercentage(scrollPercentage);
  }, []);

  // Set pathname when section changes
  useEffect(() => {
    if (searchParams.get("section") === activeSection) return;

    if (activeSection === SiteSections.HOME) {
      router.push("/");
    } else {
      router.push(`/?section=${activeSection}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      if (!scrollContainerRef.current) return;
      handleScroll(scrollContainerRef.current as HTMLDivElement);
    };

    // Call one-time to initialize scroll percentage value
    handleResize();

    // Add window resize event to call `handleScroll` function to update scroll percentage
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll]);

  useEffect(() => {
    const initScrollSnap = () => {
      if (!scrollContainerRef.current) return;

      unbindScrollSnap.current?.();

      const scrollElement = scrollContainerRef.current;
      const { unbind } = createScrollSnap(scrollElement, {
        snapDestinationY: "100%",
      });
      unbindScrollSnap.current = unbind;
    };

    // Call one-time to initialize scroll snap
    initScrollSnap();

    // Add window resize event to initialize scroll snap every time the window is resized
    window.addEventListener("resize", initScrollSnap);
    return () => {
      window.removeEventListener("resize", initScrollSnap);
      unbindScrollSnap.current?.();
    };
  }, []);

  return (
    <main
      id="scrollContainer"
      className="flex flex-col md:flex-row h-screen w-screen flex-nowrap bg-black overflow-auto overflow-x-hidden"
      onScroll={(evt) => handleScroll(evt.target as HTMLDivElement)}
      ref={scrollContainerRef}
    >
      <div className="flex flex-col flex-1 items-center justify-between overflow-visible pb-12 md:pb-0 w-screen md:w-5/6">
        <Element
          name={SiteSections.HOME}
          className="relative section flex flex-col flex-1 justify-center px-12 min-h-screen md:min-w-full max-h-screen overflow-hidden"
        >
          <p className="mb-2 md:mb-6 md:text-3xl">Hi! I am</p>
          <h1 className="text-green-500 font-semibold text-3xl md:text-7xl mb-2 md:mb-6">
            Ahlrenz Arqueza, <span className="text-gray-500">27</span>
          </h1>
          <p className="flex flex-col md:block mb-2 md:mb-6 md:text-3xl">
            <span className="mb-2 md:mb-0">
              💬 You can call me{" "}
              <span className="font-semibold text-green-500">Ahl</span>
            </span>
            <span className="mb-2 md:mb-0 md:ml-12">🗣️ /æl/</span>
            <span className="md:ml-12">🏳️‍🌈 He / Him</span>
          </p>
          <p className="mb-2 md:mb-6 md:text-3xl">
            👨🏻‍💻{" "}
            <span className="font-semibold">Full-Stack Software Engineer</span>
          </p>
          <p className="mb-2 md:mb-6 md:text-3xl">
            🇵🇭 Based in{" "}
            <span className="font-semibold">Manila, Philippines</span>
          </p>

          <MotionImageCard
            className={classNames(
              "absolute w-3/4 md:w-4/12",
              "transform -translate-x-1/2",
              "md:-translate-x-0 left-1/2 md:left-2/3 bottom-12 md:bottom-0",
              "opacity-50 md:opacity-100"
            )}
            src={PortraitOne}
          />
        </Element>

        <Element
          name={SiteSections.ABOUT}
          className="relative section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
        >
          <About />
          <MotionImageCard
            className={classNames(
              "absolute w-3/4 md:w-4/12",
              "transform -translate-x-1/2",
              "md:-translate-x-0 left-1/2 md:left-2/3 bottom-12 md:bottom-0",
              "opacity-50 md:opacity-100"
            )}
            src={PortraitTwo}
          />
        </Element>

        <Element
          name={SiteSections.EXPERIENCE}
          className="relative section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen w-full overflow-hidden pb-12 md:pb-0"
        >
          <Experience />
        </Element>

        <Element
          name={SiteSections.SKILLS}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
        >
          <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-6">
            Skills
          </h1>
          <WorkInProgressInfo />
        </Element>

        <Element
          name={SiteSections.PROJECTS}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen w-full overflow-hidden pb-12 md:pb-0"
        >
          <Projects />
        </Element>

        <Element
          name={SiteSections.CONTACT}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
        >
          <ContactMe />
        </Element>
      </div>
      <Sidebar
        section={activeSection}
        setActiveSection={setActiveSection}
        scrollPercentage={scrollPercentage}
      />
    </main>
  );
}
