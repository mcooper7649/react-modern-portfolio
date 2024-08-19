import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ marginRight: "1rem" }}>
        <a href="https://www.linkedin.com/in/mcooper305/">
          <BsLinkedin />
        </a>
      </div>
      <div style={{ marginRight: "1rem" }}>
        <a href="https://github.com/mcooper7649">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/MICHAEL41615660">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
