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

export default function Home() {
  const [activeSection, setActiveSection] = useState<SiteSections>(
    SiteSections.HOME
  );
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = useCallback((target: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = target as HTMLDivElement;
    const totalScroll = scrollHeight - clientHeight;
    const currentScroll = scrollTop;
    const scrollPercentage = (currentScroll / totalScroll) * 100;
    setScrollPercentage(scrollPercentage);
  }, []);

  useEffect(() => {
    let unbindScrollSnap: () => void;
    const handleResize = () => {
      if (!scrollContainerRef.current) return;
      handleScroll(scrollContainerRef.current as HTMLDivElement);

      const scrollElement = scrollContainerRef.current;
      const { unbind } = createScrollSnap(scrollElement, {
        snapDestinationY: "100%",
      });
      unbindScrollSnap = unbind;
    };

    // Add window resize event to call `handleScroll` function to update scroll percentage
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      unbindScrollSnap?.();
    };
  }, [handleScroll]);

  return (
    <main
      id="scrollContainer"
      className="flex flex-col md:flex-row h-screen flex-nowrap bg-black overflow-auto overflow-x-hidden"
      onScroll={(evt) => handleScroll(evt.target as HTMLDivElement)}
      ref={scrollContainerRef}
    >
      <div className="flex flex-col flex-1 items-center justify-between overflow-visible pb-12 md:pb-0">
        <Element
          name={SiteSections.HOME}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden"
        >
          <p className="mb-2 md:mb-6 md:text-3xl">Hi! I am</p>
          <h1 className="text-green-500 font-semibold text-3xl md:text-7xl mb-2 md:mb-6">
            Ahlrenz Arqueza, <span className="text-gray-500">27</span>
          </h1>
          <p className="flex flex-col md:block mb-2 md:mb-6 md:text-3xl">
            <span className="mb-2 md:mb-0">
              💬 You can call me <span className="font-semibold">Ahl</span>
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
        </Element>

        <Element
          name={SiteSections.ABOUT}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
        >
          <About />
        </Element>

        <Element
          name={SiteSections.EXPERIENCE}
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
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
          className="section flex flex-col flex-1 justify-center px-12 mr-auto min-h-screen max-h-screen overflow-hidden pb-12 md:pb-0"
        >
          <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-6">
            Projects
          </h1>
          <WorkInProgressInfo />
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
