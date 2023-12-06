"use client";
import { SiteSections } from "@/types";
import { Link } from "react-scroll";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import "./sidebar.css";
import { useEffect, useRef, useState } from "react";
import { useViewport } from "@/app/hooks/useViewport";

interface SidebarProps {
  section: SiteSections;
  setActiveSection: (section: SiteSections) => void;
  scrollPercentage: number;
}

export default function Sidebar({
  section = SiteSections.HOME,
  setActiveSection,
  scrollPercentage = 0,
}: SidebarProps) {
  const linkRef = useRef(null);
  const { isMobile } = useViewport();
  const activeColorClass = (target: SiteSections) =>
    section === target ? "text-white" : "text-gray-600";

  const handleSetActive = (to: string) => {
    setActiveSection(to as SiteSections);
  };

  const [anchorNavRect, setAnchorNavRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!linkRef.current) return;

    const element = linkRef.current as HTMLAnchorElement;
    setAnchorNavRect(element.getBoundingClientRect());
  }, [linkRef]);

  useEffect(() => {
    const handleResize = () => {
      if (!linkRef.current) return;

      const element = linkRef.current as HTMLAnchorElement;
      setAnchorNavRect(element.getBoundingClientRect());
    };

    // Add window resize event to call `handleScroll` function to update scroll percentage
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="sidebar fixed md:sticky flex flex-row md:flex-col w-screen md:w-24 h-12 md:min-h-screen items-center justify-center left-0 md:left-100 bottom-0 md:top-0 border-t md:border-t-0 md:border-l border-gray-600 bg-black">
        <div
          className="active-circle absolute w-16 h-12 md:w-24 md:h-24 bg-green-500 rounded-full -z-10"
          style={{
            top: isMobile ? "" : `${anchorNavRect?.top}px`,
            left: isMobile ? `${anchorNavRect?.left}px` : "",
            transform: isMobile
              ? `translateX(${scrollPercentage * 5}%) scale(1.2)`
              : `translateY(${scrollPercentage * 5}%) scale(1.5)`,
            visibility: anchorNavRect ? "visible" : "hidden",
          }}
        ></div>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer"
          to={SiteSections.HOME}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <div
            className="flex items-center justify-center h-8 md:h-24 w-16 px-3 md:px-0"
            ref={linkRef}
          >
            <HomeIcon
              className={classNames(
                "h-8 md:h-12 w-full",
                activeColorClass(SiteSections.HOME)
              )}
            />
          </div>
        </Link>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer px-3 md:px-0"
          to={SiteSections.ABOUT}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <UserIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.ABOUT)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer px-3 md:px-0"
          to={SiteSections.EXPERIENCE}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <BriefcaseIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.EXPERIENCE)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer px-3 md:px-0"
          to={SiteSections.SKILLS}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <CodeBracketIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.SKILLS)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer px-3 md:px-0"
          to={SiteSections.PROJECTS}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <PresentationChartBarIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.PROJECTS)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-8 md:h-24 w-16 cursor-pointer px-3 md:px-0"
          to={SiteSections.CONTACT}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
          hashSpy
        >
          <PhoneIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.CONTACT)
            )}
          />
        </Link>
      </div>
    </>
  );
}
