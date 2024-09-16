"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-sm lg:text-base text-gray-300">
        <li><strong>Languages:</strong> C, C++, Python, Java</li>
        <li><strong>Front-End Development:</strong> HTML, CSS, JavaScript, Tailwind CSS</li>
        <li><strong>Back-End Development:</strong> Node.js</li>
        <li><strong>Libraries and Frameworks:</strong> Django, React, Next.js</li>
        <li><strong>Cloud/Databases:</strong> MongoDB</li>
        <li><strong>Tools and Technologies:</strong> Git, VSCode, PyCharm</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-sm lg:text-base text-gray-300">
        <li><strong>Jabalpur Engineering College, Jabalpur</strong></li>
        <li>BTech in Artificial Intelligence & Data Science</li>
        <li>2021-2025</li>
        <li>CGPA: 8.32</li>
      </ul>
    ),
  },
  {
    title: "Interests",
    id: "interests",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-sm lg:text-base text-gray-300">
        <li>Software Development</li>
        <li>Web Development</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="text-sm lg:text-base text-gray-300">
        <p className="mb-4">
          I hold the following certifications:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a
              href="/images/Certifications/Cloundjini.pdf" // Replace with the path to your first PDF
              download
              className="text-blue-400 hover:underline"
            >
              Certificate 1: [Cloundjini]
            </a>
          </li>
          <li>
            <a
              href="/images/Certifications/MP FITT IITD 5G IoT Builder Certificate_218.pdf" // Replace with the path to your second PDF
              download
              className="text-blue-400 hover:underline"
            >
              Certificate 2: [MP FITT IITD 5G IoT Builder Certificate]
            </a>
          </li>
          <li>
            <a
              href="/images/Certifications/MP FITT IITD Artificial Intelligence Builder Certificate_709.pdf" // Replace with the path to your third PDF
              download
              className="text-blue-400 hover:underline"
            >
              Certificate 3: [MP FITT IITD Artificial Intelligence Builder Certificate]
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-gray-100" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/profile-picture.jpg" width={500} height={500} alt="Profile Picture" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Meet Pragya Singh</h2>
          <p className="text-sm lg:text-base text-gray-300 mb-8">
            I am an enthusiastic developer specializing in full-stack development. 
            My focus is on crafting intuitive and user-friendly interfaces. 
            I am proficient in a range of technologies such as JavaScript, React, 
            and Django. My academic background in Artificial Intelligence and Data Science 
            fuels my passion for software and web development. I am always keen to learn 
            and collaborate on innovative projects.
          </p>
          <div className="flex flex-row justify-start mb-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              Interests
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
