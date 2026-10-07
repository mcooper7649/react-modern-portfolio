import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [expanded, setExpanded] = useState({});

  // Filters come from the tags actually used, so a new tag shows up
  // without a code change.
  const filters = [
    "All",
    ...[...new Set(works.flatMap((w) => w.tags || []))]
      .filter((t) => t && t !== "All")
      .sort(),
  ];

  useEffect(() => {
    const query = '*[_type == "works" ]';
    client.fetch(query).then((data) => {
      // Newest project first: the curated `date`, falling back to when the
      // entry was created (bulk edits change _updatedAt for every entry).
      const when = (w) => new Date(w.date || w._createdAt);
      const sortedData = data.sort((a, b) => when(b) - when(a));
      setWorks(sortedData);
      setFilterWork(sortedData);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => (work.tags || []).includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Selected <span>Work</span> &amp; Projects
      </h2>

      <div className="app__work-filter">
        {filters.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={work._id}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              {work.date && (
                <p className="p-text app__work-year">
                  {work.date.slice(0, 4)}
                </p>
              )}
              <p
                className={`p-text app__work-desc ${
                  expanded[work._id] ? "" : "app__work-desc--clamped"
                }`}
              >
                {work.description}
              </p>
              {work.description?.length > 160 && (
                <button
                  type="button"
                  className="app__work-more"
                  onClick={() =>
                    setExpanded((e) => ({ ...e, [work._id]: !e[work._id] }))
                  }
                >
                  {expanded[work._id] ? "Show less" : "Read more"}
                </button>
              )}

              {work.stack?.length > 0 && (
                <ul className="app__work-stack" aria-label="Tech stack">
                  {work.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags?.[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
