"use client";

import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import ReactTypingEffect from "react-typing-effect";

export default function WorkInProgressInfo() {
  const divRef = useRef(null);
  const { inViewport } = useInViewport(divRef);
  return (
    <div className="flex flex-col" ref={divRef}>
      {inViewport && (
        <ReactTypingEffect
          className="text-2xl mb-4"
          speed={100}
          staticText="🚧 This page is still under construction."
          text="Please check back later! 🚧"
          eraseDelay={600000}
        />
      )}
      <p>
        - For the meantime, you can view my cool resume{" "}
        <a
          className="underline text-green-500"
          target="_blank"
          href="/Ahl Arqueza (Full Stack Engineer) Resume.pdf"
        >
          here!
        </a>
      </p>
      <p>
        - Track the progress of this website project on this{" "}
        <a
          className="underline text-green-500"
          target="_blank"
          href="https://github.com/ahlrenzarqueza/ahl-arqueza-website"
        >
          GitHub repository
        </a>
      </p>
    </div>
  );
}
