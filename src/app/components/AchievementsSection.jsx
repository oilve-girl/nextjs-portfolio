"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Inline Indeed SVG
const IndeedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="white"
    className="hover:fill-blue-500 transition-colors duration-300" // Hover effect for the Indeed SVG
  >
    <title>Indeed icon</title>
    <path d="M14.822 10.308a3.018 3.018 0 111.32-4.038 3.006 3.006 0 01-1.32 4.044zM11.6.572c2.47-.901 5.294-.852 7.408.982a3.587 3.587 0 011.023 1.37c.213.69-.749-.07-.88-.168a9.407 9.407 0 00-2.15-1.095C12.837.386 8.897 2.707 6.463 6.316a19.505 19.505 0 00-2.248 5.126 2.918 2.918 0 01-.213.642c-.107.204-.049-.547-.049-.572a15.821 15.821 0 01.43-2.239C5.511 5.34 8.01 2.065 11.6.565zm.037 20.993v-8.763c.249.025.486.037.736.037a6.167 6.167 0 003.219-.895v9.62c0 .822-.15 1.43-.52 1.826A1.874 1.874 0 0113.62 24a1.825 1.825 0 01-1.427-.609c-.368-.404-.56-1.013-.56-1.825z"/>
  </svg>
);

const socialMediaList = [
  {
    platform: "GitHub",
    icon: faGithub,
    link: "https://github.com/oilve-girl",
  },
  {
    platform: "Indeed",
    customIcon: IndeedIcon,
    link: "https://www.indeed.com/yourprofile",
  },
  {
    platform: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/yourprofile",
  },
  {
    platform: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/olivegirl",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {socialMediaList.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 group" // Added group class for hover styling
          >
            {social.icon ? (
              <FontAwesomeIcon
                icon={social.icon}
                size="3x"
                className="text-white transition-transform duration-300 group-hover:scale-110 hover:text-blue-500" // Hover effect for FontAwesome icons
              />
            ) : (
              <social.customIcon /> // Render custom Indeed icon
            )}
            <p className="text-[#ADB7BE] text-base mt-2 transition-colors duration-300 group-hover:text-white">
              {social.platform}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
