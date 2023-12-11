"use client";

export default function About() {
  return (
    <div className="flex flex-col z-10">
      <h1 className="text-green-500 font-semibold text-3xl md:text-6xl mb-4">
        About Me
      </h1>

      <div className="flex flex-col md:w-4/6 text-justify">
        <p className="md:text-2xl mb-3 md:mb-6">
          👋 Hello there! I&apos;m a Full Stack Software Engineer with a passion
          for crafting sleek yet efficient web applications, coupled with a
          knack for building powerful APIs and integrating to the cloud.
        </p>

        <p className="md:text-2xl mb-3 md:mb-6">
          👨🏻‍💻 Having navigated the tech industry for over six(6) years, I&apos;ve
          developed the love for coding that makes me accomplish every project I
          take.
        </p>

        <p className="md:text-2xl mb-3 md:mb-6 hidden md:block">
          🍣 When I&apos;m not immersed in code, I love exploring and travelling
          to different places. And as a hardcode foodie, I love trying out
          different cuisine!
        </p>

        <p className="md:text-2xl text-left">
          ✨ Let&apos;s make something awesome together! ✨
        </p>
      </div>
    </div>
  );
}
