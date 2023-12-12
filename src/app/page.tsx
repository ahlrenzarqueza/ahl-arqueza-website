"use client";
import { Element, scroller } from "react-scroll";
import Sidebar from "@/app/components/sidebar/sidebar";
import { SiteSections } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
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

import "./page.css";
import { throttle } from "lodash";

export default function Home() {
  const searchParams = useSearchParams();

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setScrollWithThrottle = useCallback(
    throttle((percentage: number) => {
      setScrollPercentage(percentage);
    }, 100),
    []
  );

  const handleScroll = useCallback(
    (target: HTMLDivElement) => {
      const { scrollTop, scrollHeight, clientHeight } =
        target as HTMLDivElement;
      const perc = (scrollTop / scrollHeight) * 100;

      setScrollWithThrottle(perc);

      if (perc >= (5 / 6) * 100) {
        setActiveSection(SiteSections.CONTACT);
      } else if (perc >= (2 / 3) * 100) {
        setActiveSection(SiteSections.PROJECTS);
      } else if (perc >= (1 / 2) * 100) {
        setActiveSection(SiteSections.SKILLS);
      } else if (perc >= (1 / 3) * 100) {
        setActiveSection(SiteSections.EXPERIENCE);
      } else if (perc >= (1 / 6) * 100) {
        setActiveSection(SiteSections.ABOUT);
      } else {
        setActiveSection(SiteSections.HOME);
      }
    },
    [setScrollWithThrottle]
  );

  // Set pathname when section changes
  useEffect(() => {
    if (searchParams.get("section") === activeSection) return;

    const url = new URL(window.location.href);
    if (activeSection === SiteSections.HOME) {
      url.searchParams.delete("section");
      // Temporarily use history.replaceState as there is a bug with next/router shallow navigation
      // https://github.com/vercel/next.js/discussions/48110
      history.replaceState({}, "", url.href);
    } else {
      url.searchParams.set("section", activeSection);
      history.replaceState({}, "", url.href);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  useEffect(() => {
    // Scroll initially to section from search params
    if (searchParams.get("section") !== SiteSections.HOME) {
      scroller.scrollTo(searchParams.get("section") as string, {
        duration: 0,
        smooth: false,
        containerId: "scrollContainer",
      });
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll]);

  return (
    <main
      id="scrollContainer"
      className="flex flex-col w-screen flex-nowrap bg-black overflow-scroll overflow-x-hidden snap-y snap-mandatory mr-0 md:mr-12 scroll-smooth"
      onScroll={(evt) => handleScroll(evt.target as HTMLDivElement)}
      ref={scrollContainerRef}
    >
      <Element
        name={SiteSections.HOME}
        className="relative section flex flex-col flex-1 justify-center px-6 md:px-12 min-h-full md:min-w-full overflow-hidden pb-12 md:pb-0 snap-start"
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
          👨🏻‍💻 <span className="font-semibold">Full-Stack Software Engineer</span>
        </p>
        <p className="mb-2 md:mb-6 md:text-3xl">
          🇵🇭 Based in <span className="font-semibold">Manila, Philippines</span>
        </p>

        <MotionImageCard
          className={classNames(
            "absolute w-3/4 md:w-4/12",
            "transform -translate-x-1/2",
            "md:-translate-x-0 left-1/2 md:left-2/3 bottom-24 md:bottom-0",
            "opacity-50 md:opacity-100"
          )}
          src={PortraitOne}
        />
      </Element>

      <Element
        name={SiteSections.ABOUT}
        className="relative section flex flex-col flex-1 justify-center px-6 md:px-12 mr-auto min-h-full max-h-full overflow-hidden pb-12 md:pb-0 snap-start"
      >
        <About />
        <MotionImageCard
          className={classNames(
            "absolute w-3/4 md:w-4/12",
            "transform -translate-x-1/2",
            "md:-translate-x-0 left-1/2 md:left-2/3 bottom-24 md:bottom-0",
            "opacity-50 md:opacity-100"
          )}
          src={PortraitTwo}
        />
      </Element>

      <Element
        name={SiteSections.EXPERIENCE}
        className="relative section flex flex-col flex-1 justify-center px-6 md:px-12 mr-auto min-h-full max-h-full w-full overflow-hidden pb-12 md:pb-0 snap-start"
      >
        <Experience />
      </Element>

      <Element
        name={SiteSections.SKILLS}
        className="section flex flex-col flex-1 justify-center px-6 md:px-12 mr-auto min-h-full max-h-full overflow-hidden pb-12 md:pb-0 snap-start"
      >
        <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-6">
          Skills
        </h1>
        <WorkInProgressInfo />
      </Element>

      <Element
        name={SiteSections.PROJECTS}
        className="section flex flex-col flex-1 justify-center px-6 md:px-12 mr-auto min-h-full max-h-full w-full overflow-hidden pb-12 md:pb-0 snap-start"
      >
        <Projects />
      </Element>

      <Element
        name={SiteSections.CONTACT}
        className="section flex flex-col flex-1 justify-center px-6 md:px-12 mr-auto min-h-full max-h-full overflow-hidden pb-12 md:pb-0 snap-start"
      >
        <ContactMe />
      </Element>
      <Sidebar
        section={activeSection}
        setActiveSection={setActiveSection}
        scrollPercentage={scrollPercentage}
      />
    </main>
  );
}
