import React from "react";
import Logo from '../Assests/happy_british_awards_blue.png';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-[#151618] text-white py-6 flex flex-col md:flex-row justify-between items-center px-8 md:px-20">
      {/* Logo Section */}
      <div className="logo mb-4 md:mb-0 md:relative md:left-24">
        <img className="Logo h-20  object-contain" src={Logo} alt="Logy Hotel Logo" />
      </div>

      {/* Heading Section */}
      <div className="Heading text-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-[#1a2964]">
          Logy Hotel
        </h1>
      </div>

      {/* Navigation (Social Media Icons) */}
      <div className="navs flex gap-4 md:gap-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-[#1a2964] transition hover:text-[#E1306C]"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-[#1a2964] transition hover:text-[#0077b5]"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl text-[#1a2964] transition hover:text-[#6cc644]"
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
