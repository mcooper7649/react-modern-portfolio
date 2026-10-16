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
    url: "https://applypilot.cc",
  },
  {
    icon: <FaTshirt />,
    title: "CryptoThreads",
    status: "live",
    statusLabel: "Live · cryptothreads.us",
    description:
      "Crypto streetwear printed on demand. Type any ticker or project site and it finds the logo, then renders it in seven print styles across six blanks. Three times a day an AI pipeline reads crypto X, Reddit and the DEX charts and publishes fresh meme designs; sales signals rank the shop, and shoppers vote on community ideas. Printful prints and ships, Stripe takes cards or stablecoins.",
    stack: ["Next.js", "PostgreSQL", "Claude API", "Printful", "Stripe"],
    url: "https://cryptothreads.us",
  },
  {
    icon: <FaMobileAlt />,
    title: "FloorFeed",
    status: "live",
    statusLabel: "Live · floorfeed.io",
    description:
      "A FOMO-style social NFT trading app across Solana and 11 EVM chains. Trades are ranked by each wallet's track record with after-fee P&L. Paper trade, or buy, sell and list for real from a Privy or extension wallet, bridge funds between chains in-app, mint drops from the Mint hub, or launch a whole collection on my own Solidity factory contracts.",
    stack: ["Expo", "Fastify", "Solidity", "viem", "Claude"],
    url: "https://floorfeed.io",
  },
  {
    icon: <FaCubes />,
    title: "Floor Feeders",
    status: "testing",
    statusLabel: "Test launch next",
    description:
      "A 2,222-piece animated pixel PFP collection drawn entirely in code: degens at a diner counter eating floor listings off a plate, each with a Feeding Mood. No two share visible traits. It launches on Robinhood Chain through FloorFeed's own launchpad.",
    stack: ["Python", "Pillow", "Solidity", "IPFS"],
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
