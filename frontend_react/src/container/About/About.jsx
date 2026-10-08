import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaServer, FaDocker } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";

const STATS = [
  { value: "10+", label: "years in tech" },
  { value: "15+", label: "self-hosted services" },
  { value: "4", label: "side projects live" },
];

const FOCUS = [
  {
    icon: <FaReact />,
    title: "Frontend engineering",
    body: "React, Next.js and TypeScript interfaces that stay fast under real-time data, from trading dashboards to mobile apps in React Native.",
    tags: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    icon: <FaServer />,
    title: "Systems & identity",
    body: "Enterprise Microsoft 365, Intune, Active Directory and Okta, automated with PowerShell and kept secure, patched and boring in the best way.",
    tags: ["Microsoft 365", "Intune", "Active Directory", "PowerShell"],
  },
  {
    icon: <FaDocker />,
    title: "Full-stack & self-hosting",
    body: "Node and Python APIs, Postgres, Docker and Caddy on my own Proxmox cluster, plus local LLMs and n8n workflows wiring it all together.",
    tags: ["Node.js", "PostgreSQL", "Docker", "Ollama"],
  },
];

const reveal = {
  whileInView: { opacity: [0, 1], y: [24, 0] },
  transition: { duration: 0.45, type: "tween" },
};

const About = () => (
  <>
    <h2 className="head-text">
      I build <span>software that ships</span> <br />
      and <span>stays up</span>
    </h2>

    <div className="app__about-grid">
      <motion.div {...reveal} className="app__about-bio">
        <p>
          I&apos;m Michael, a Miami-based engineer who works both sides of the
          stack. By day I&apos;m a <strong>systems administrator at Inter
          Miami CF</strong>, keeping Microsoft 365, Intune and identity running
          for a pro soccer club, right through match day. Before that I spent a
          year and a half at <strong>CoinRoutes</strong> building real-time
          trading interfaces in React.
        </p>
        <p>
          Outside work I build on my own hardware: a Proxmox homelab with a
          passthrough GPU that hosts every project on this site, local AI
          models, and the automations that run my home. Running what I build
          keeps me honest about performance, security and uptime.
        </p>

        <div className="app__about-actions">
          <a href="#work" className="app__about-btn">
            See my work <HiArrowRight />
          </a>
          <a href="#skills" className="app__about-btn app__about-btn--ghost">
            Experience
          </a>
        </div>
      </motion.div>

      <motion.dl {...reveal} className="app__about-stats">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>

    <div className="app__about-focus">
      {FOCUS.map((item, i) => (
        <motion.article
          {...reveal}
          transition={{ ...reveal.transition, delay: i * 0.08 }}
          className="app__about-card"
          key={item.title}
        >
          <span className="app__about-icon" aria-hidden="true">
            {item.icon}
          </span>
          <h3>{item.title}</h3>
          <p className="p-text">{item.body}</p>
          <ul className="app__chips">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
