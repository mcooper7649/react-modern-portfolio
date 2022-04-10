import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/mcooper305/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/mcooper7649">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://medium.com/@koopnutz">
          <FaMedium />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
