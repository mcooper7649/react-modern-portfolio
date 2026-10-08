import React, { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./LatestPosts.scss";

const BLOG_URL = "https://blog.mycodedojo.com";
const FEED_URL = `${BLOG_URL}/api/latest-posts?limit=3`;

const BELTS = {
  white: { label: "White belt", color: "#f2ede2" },
  yellow: { label: "Yellow belt", color: "#e2b23a" },
  green: { label: "Green belt", color: "#3f8a5a" },
  brown: { label: "Brown belt", color: "#7b4b2a" },
  black: { label: "Black belt", color: "#16130f" },
};

const PostsContext = createContext(null);

const formatDate = (date) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const BeltChip = ({ belt }) => {
  const meta = BELTS[belt];
  if (!meta) return null;
  return (
    <span className="app__blog-belt" data-belt={belt}>
      <span style={{ background: meta.color }} aria-hidden="true" />
      {meta.label}
    </span>
  );
};

const SkeletonCard = () => (
  <div className="app__blog-card app__blog-card--skeleton" aria-hidden="true">
    <div className="app__blog-card-img" />
    <div className="app__blog-card-body">
      <span />
      <span />
      <span />
    </div>
  </div>
);

const LatestPosts = () => {
  const posts = useContext(PostsContext);

  return (
    <>
      <p className="app__blog-eyebrow">
        <span lang="ja" aria-hidden="true">
          道場
        </span>
        From the Dojo
      </p>
      <h2 className="head-text app__blog-title">
        Latest from the <span>blog</span>
      </h2>
      <p className="p-text app__blog-intro">
        Field notes on homelab, self-hosting, AI agents and full-stack craft.
        New posts land most weekdays.
      </p>

      <div className="app__blog-grid" aria-busy={!posts}>
        {posts
          ? posts.map((post, index) => (
              <motion.a
                href={post.url}
                className="app__blog-card"
                key={post.slug}
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.4, delay: index * 0.08, type: "tween" }}
              >
                <div className="app__blog-card-img">
                  {post.image && <img src={post.image} alt="" loading="lazy" />}
                </div>
                <div className="app__blog-card-body">
                  <p className="app__blog-meta">
                    {formatDate(post.date)}
                    {post.readingTime ? ` · ${post.readingTime} min read` : ""}
                  </p>
                  <h3>{post.title}</h3>
                  <p className="app__blog-excerpt">{post.excerpt}</p>
                  <BeltChip belt={post.belt} />
                </div>
              </motion.a>
            ))
          : [0, 1, 2].map((key) => <SkeletonCard key={key} />)}
      </div>

      <a href={`${BLOG_URL}/posts`} className="app__blog-all">
        View all posts <span aria-hidden="true">→</span>
      </a>
    </>
  );
};

const Section = AppWrap(MotionWrap(LatestPosts, "app__blog"), "blog", "app__inkbg");

// Loads the newest posts from the blog. If the blog can't be reached, the whole
// section is hidden rather than showing an error.
const LatestPostsSection = () => {
  const [posts, setPosts] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(FEED_URL, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (Array.isArray(data) && data.length) setPosts(data);
        else setFailed(true);
      })
      .catch((error) => {
        if (error?.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  if (failed) return null;

  return (
    <PostsContext.Provider value={posts}>
      <Section />
    </PostsContext.Provider>
  );
};

export default LatestPostsSection;
