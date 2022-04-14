import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../client';

function AboutContent(props) {
  const [showMore, setShowMore] = useState(false);
  const [about, index] = props;

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
        key={about.title + index}
      >
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {about.title}
        </h2>

        <p className="p-text" style={{ marginTop: 10 }}>
          {showMore
            ? about.description
            : `${about.description.substring(0, 80) + '...'}`}{' '}
          <p
            className="p-text"
            style={{
              color: 'var(--secondary-color)',
            }}
            variant="contained"
            color="secondary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </p>
        </p>
      </motion.div>
    </>
  );
}

export default AboutContent;
