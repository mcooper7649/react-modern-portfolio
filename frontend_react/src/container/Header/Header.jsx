import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span role="img" aria-label="waving hand">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Michael Cooper</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Senior Full-Stack Engineer</p>
          <p className="p-text">React / Next.js &amp; Kotlin / Android</p>
          <p className="p-text">Self-Hosting, Homelab &amp; AI Tooling</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img
        src={images.profile1}
        alt="Michael Cooper"
        whileInView={{ y: [-100, 0], scale: [0.25, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt=""
        aria-hidden="true"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[
        { img: images.node, name: "Node.js" },
        { img: images.react, name: "React" },
        { img: images.tailwind, name: "Tailwind CSS" },
        { img: images.mongo, name: "MongoDB" },
        { img: images.next, name: "Next.js" },
      ].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle.img} alt={circle.name} />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
