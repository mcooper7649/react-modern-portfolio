import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaMobileAlt,
  FaTshirt,
  FaCubes,
  FaPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./CurrentlyBuilding.scss";

const UPDATED = "October 2026";

// status: live | testing | lab — drives the badge color.
const buildItems = [
  {
    icon: <FaPaperPlane />,
    title: "ApplyPilot",
    status: "testing",
    statusLabel: "Testing on real forms",
    description:
      "Paste a job link and it reads the posting, rewrites my resume and cover letter around it using only facts from my profile, then fills the employer's Greenhouse, Lever or Ashby form in a real browser. Then it stops: nothing is submitted until I've reviewed every answer.",
    stack: ["Python", "Playwright", "Claude", "Flask"],
  },
  {
    icon: <FaTshirt />,
    title: "CryptoThreads",
    status: "testing",
    statusLabel: "Test-mode launch",
    description:
      "Crypto streetwear printed on demand. Type any ticker or project site and it finds the logo, then renders it in seven print styles across six blanks, from tees and hoodies to stickers. Printful prints and ships each order, and checkout takes cards or stablecoins through Stripe, still in test mode.",
    stack: ["Next.js", "PostgreSQL", "Printful", "Stripe"],
    url: "https://cryptothreads.mycodedojo.com",
  },
  {
    icon: <FaMobileAlt />,
    title: "FloorFeed",
    status: "live",
    statusLabel: "Live · adding wallets",
    description:
      "A FOMO-style social feed for NFT traders: live sales across Solana and EVM chains, flip P&L leaderboards, and an AI-written take on every trade. Next up: wallet connect and real on-chain buys.",
    stack: ["Expo", "React Native", "Fastify", "Claude"],
    url: "https://floorfeed.mycodedojo.com",
  },
  {
    icon: <FaCubes />,
    title: "Clay Maxis",
    status: "lab",
    statusLabel: "Experiment",
    description:
      "A generative claymation NFT collection rendered on my own GPU. SDXL in ComfyUI draws each character from seeded traits, then a local vision model checks every image and rerolls the misses. Built to mint on Shuin.",
    stack: ["ComfyUI", "SDXL", "Python", "Ollama"],
  },
  {
    icon: <FaServer />,
    title: "Homelab & Local AI",
    status: "live",
    statusLabel: "Always on",
    description:
      "The hardware behind everything on this page. Proxmox, Docker and Caddy serve each project, a passthrough GTX 1080 Ti runs Ollama and ComfyUI, and n8n and Home Assistant automate the rest.",
    stack: ["Proxmox", "Docker", "Ollama", "n8n"],
  },
];

const CurrentlyBuilding = () => (
  <>
    <h2 className="head-text">
      Currently <span>Building</span>
    </h2>
    <p className="p-text app__building-intro">
      What I&apos;m shipping on nights and weekends. Everything runs on my own
      homelab, and most of it is open source.
    </p>
    <p className="app__building-updated">Updated {UPDATED}</p>

    <div className="app__building-grid">
      {buildItems.map((item) => (
        <motion.article
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 0.4, type: "tween" }}
          className="app__building-card"
          key={item.title}
        >
          <div className="app__building-card-top">
            <div className="app__building-icon" aria-hidden="true">
              {item.icon}
            </div>
            <span className={`app__building-status is-${item.status}`}>
              {item.statusLabel}
            </span>
          </div>

          <h3 className="bold-text">{item.title}</h3>
          <p className="p-text">{item.description}</p>

          <ul className="app__building-stack" aria-label="Tech stack">
            {item.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="app__building-link"
            >
              {item.url.replace("https://", "")} <FaExternalLinkAlt />
            </a>
          )}
        </motion.article>
      ))}
    </div>

    <div className="app__building-cta">
      <a
        href="https://github.com/mcooper7649"
        target="_blank"
        rel="noreferrer"
        className="app__building-btn"
      >
        <BsGithub /> See my code on GitHub
      </a>
      <a
        href="https://blog.mycodedojo.com"
        target="_blank"
        rel="noreferrer"
        className="app__building-btn app__building-btn--ghost"
      >
        Read the build notes
      </a>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(CurrentlyBuilding, "app__building"),
  "building",
  "app__primarybg"
);
