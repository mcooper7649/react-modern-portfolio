import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  experience,
  education,
  certifications,
  skillGroups,
} from "../../constants/career";

import "./Skills.scss";

const reveal = {
  whileInView: { opacity: [0, 1], y: [24, 0] },
  transition: { duration: 0.45, type: "tween" },
};

const CompanyLogo = ({ src, name }) => (
  <div className="app__exp-logo">
    {src ? (
      <img src={src} alt={`${name} logo`} />
    ) : (
      <span aria-hidden="true">{name.charAt(0)}</span>
    )}
  </div>
);

const Skills = () => (
  <>
    <h2 className="head-text">
      Skills & <span>Experience</span>
    </h2>
    <p className="p-text app__skills-intro">
      A decade across systems administration and front-end engineering: I
      keep enterprise infrastructure running by day and ship full-stack apps
      on my own hardware by night.
    </p>

    <div className="app__skills-layout">
      <div className="app__exp">
        <h3 className="app__skills-subhead">Experience</h3>
        <ol className="app__exp-list">
          {experience.map((job) => (
            <motion.li {...reveal} className="app__exp-item" key={job.company}>
              <CompanyLogo src={job.logo} name={job.company} />
              <div className="app__exp-body">
                <div className="app__exp-company">
                  <h4>{job.company}</h4>
                  {job.current && <span className="app__exp-now">Now</span>}
                  <span className="app__exp-location">{job.location}</span>
                </div>

                {job.roles.map((role) => (
                  <div className="app__exp-role" key={role.title}>
                    <div className="app__exp-role-head">
                      <p className="app__exp-title">{role.title}</p>
                      <p className="app__exp-dates">{role.dates}</p>
                    </div>
                    <ul className="app__exp-points">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <ul className="app__chips" aria-label="Tools used">
                  {job.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <h3 className="app__skills-subhead">Education</h3>
        <ul className="app__exp-list app__exp-list--edu">
          {education.map((edu) => (
            <motion.li {...reveal} className="app__exp-item" key={edu.school}>
              <CompanyLogo src={edu.logo} name={edu.school} />
              <div className="app__exp-body">
                <div className="app__exp-role-head">
                  <p className="app__exp-title">{edu.title}</p>
                  <p className="app__exp-dates">{edu.dates}</p>
                </div>
                <p className="app__exp-school">
                  {edu.school} · {edu.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <aside className="app__skills-side">
        <h3 className="app__skills-subhead">Toolbox</h3>
        {skillGroups.map((group) => (
          <motion.div {...reveal} className="app__skills-group" key={group.title}>
            <h4>{group.title}</h4>
            <ul className="app__chips">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div {...reveal} className="app__skills-group">
          <h4>Certifications</h4>
          <ul className="app__skills-certs">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </motion.div>
      </aside>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
