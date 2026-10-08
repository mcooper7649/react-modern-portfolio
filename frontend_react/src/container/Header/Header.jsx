import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiProxmox,
  SiMicrosoft,
} from "react-icons/si";
import AppWrap from "../../wrapper/AppWrap";

import portrait from "../../assets/profile-hero.webp";
import interMiami from "../../assets/companies/inter-miami.png";
import "./Header.scss";

const STACK = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiProxmox />, name: "Proxmox" },
  { icon: <SiMicrosoft />, name: "Microsoft 365" },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const Header = () => (
  <div className="app__hero">
    <div className="app__hero-copy">
      <motion.p {...rise(0)} className="app__hero-pill">
        <span className="app__hero-pulse" aria-hidden="true" />
        Miami, FL · building on nights &amp; weekends
      </motion.p>

      <motion.h1 {...rise(0.08)} className="app__hero-title">
        Hi, I&apos;m Michael.
        <span>I build software that ships and infrastructure that stays up.</span>
      </motion.h1>

      <motion.p {...rise(0.16)} className="app__hero-lead">
        Full-stack engineer and systems administrator. I build fast React and
        Next.js apps, keep enterprise Microsoft 365 secure, and run everything I
        make on my own homelab.
      </motion.p>

      <motion.div {...rise(0.24)} className="app__hero-actions">
        <a href="#work" className="app__hero-btn">
          See my work <HiArrowRight />
        </a>
        <a href="#contact" className="app__hero-btn app__hero-btn--ghost">
          Get in touch
        </a>
      </motion.div>

      <motion.a
        {...rise(0.32)}
        href="https://blog.mycodedojo.com"
        className="app__header-blog"
      >
        <span className="app__header-blog-seal" lang="ja" aria-hidden="true">
          道
        </span>
        <span className="app__header-blog-text">
          <small>New posts most weekdays</small>
          <strong>
            Read the Dojo blog <span aria-hidden="true">→</span>
          </strong>
        </span>
      </motion.a>

      <motion.div {...rise(0.4)} className="app__hero-stack">
        <p>Daily drivers</p>
        <ul>
          {STACK.map((tech) => (
            <li key={tech.name} title={tech.name}>
              {tech.icon}
              <span className="sr-only">{tech.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    <motion.div
      className="app__hero-visual"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="app__hero-disc" aria-hidden="true" />
      <div className="app__hero-frame">
        <img
          src={portrait}
          alt="Michael Cooper"
          className="app__hero-portrait"
          width="880"
          height="1056"
        />
      </div>

      <motion.div
        className="app__hero-float app__hero-float--job"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img src={interMiami} alt="" aria-hidden="true" />
        <div>
          <small>By day</small>
          <strong>Sysadmin · Inter Miami CF</strong>
        </div>
      </motion.div>

      <motion.a
        href="#building"
        className="app__hero-float app__hero-float--build"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        <span className="app__hero-pulse" aria-hidden="true" />
        <div>
          <small>By night</small>
          <strong>4 side projects live</strong>
        </div>
      </motion.a>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
