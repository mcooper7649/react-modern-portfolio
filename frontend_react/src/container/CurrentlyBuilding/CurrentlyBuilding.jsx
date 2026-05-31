import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaProjectDiagram, FaHome, FaRobot } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./CurrentlyBuilding.scss";

const buildItems = [
  {
    icon: <FaServer />,
    title: "Self-Hosted Homelab",
    description:
      "A Docker-based homelab running my own services behind a reverse proxy, backed by PostgreSQL with automated backups and monitoring.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "n8n Automations",
    description:
      "Low-code n8n workflows that wire together REST APIs, webhooks, and notifications to automate the repetitive parts of everyday life and dev work.",
  },
  {
    icon: <FaHome />,
    title: "Home Assistant",
    description:
      "A connected home built on Home Assistant — local-first device control, custom automations, and dashboards that keep data on my own hardware.",
  },
  {
    icon: <FaRobot />,
    title: "AI Tooling",
    description:
      "Experimenting with LLM-powered tools and agents to speed up development, automate research, and glue my self-hosted stack together.",
  },
];

const CurrentlyBuilding = () => (
  <>
    <h2 className="head-text">
      Currently <span>Building</span>
    </h2>
    <p className="p-text app__building-intro">
      Beyond client and product work, I run a self-hosted homelab and automate
      the things I use every day. Here is what I am tinkering with right now.
    </p>

    <div className="app__building-grid">
      {buildItems.map((item) => (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, type: "tween" }}
          className="app__building-card"
          key={item.title}
        >
          <div className="app__building-icon" aria-hidden="true">
            {item.icon}
          </div>
          <h3 className="bold-text">{item.title}</h3>
          <p className="p-text">{item.description}</p>
        </motion.div>
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
        Read the blog
      </a>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(CurrentlyBuilding, "app__building"),
  "building",
  "app__primarybg"
);
