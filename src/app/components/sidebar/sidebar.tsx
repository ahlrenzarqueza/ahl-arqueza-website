"use client";
import { SiteSections } from "@/types";
import { Link } from "react-scroll";
import {
  HomeIcon,
  UserIcon,
  CircleStackIcon,
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import "./sidebar.css";
import { useEffect, useMemo, useRef, useState } from "react";

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
      <div className="sidebar fixed md:sticky flex flex-row md:flex-col w-screen md:w-24 min-h-12 md:min-h-screen items-center justify-center left-0 md:left-100 bottom-0 md:top-0 border-t md:border-t-0 md:border-l border-gray-600 bg-black">
        <div
          className="active-circle absolute w-24 h-24 bg-green-500 rounded-full -z-10"
          style={{
            top: `${anchorNavRect?.top}px`,
            transform: `translateY(${scrollPercentage * 5}%) scale(1.5)`,
          }}
        ></div>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer mr-4 md:mr-0"
          to={SiteSections.HOME}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
        >
          <div className="flex items-center justify-center h-24" ref={linkRef}>
            <HomeIcon
              className={classNames(
                "h-8 md:h-12 w-full",
                activeColorClass(SiteSections.HOME)
              )}
            />
          </div>
        </Link>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer mr-4 md:mr-0"
          to={SiteSections.ABOUT}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
        >
          <UserIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.ABOUT)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer mr-4 md:mr-0"
          to={SiteSections.EXPERIENCE}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
        >
          <BriefcaseIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.EXPERIENCE)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer mr-4 md:mr-0"
          to={SiteSections.SKILLS}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
        >
          <CircleStackIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.SKILLS)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer mr-4 md:mr-0"
          to={SiteSections.PROJECTS}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
        >
          <CodeBracketIcon
            className={classNames(
              "h-8 md:h-12 w-full",
              activeColorClass(SiteSections.PROJECTS)
            )}
          />
        </Link>
        <Link
          className="flex items-center justify-center h-24 cursor-pointer"
          to={SiteSections.CONTACT}
          smooth
          spy
          containerId="scrollContainer"
          onSetActive={handleSetActive}
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
