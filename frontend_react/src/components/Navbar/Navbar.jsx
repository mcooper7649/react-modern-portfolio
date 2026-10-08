import React, { useEffect, useState } from "react";

import { HiMenuAlt4, HiX, HiArrowRight } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import "./Navbar.scss";

const LINKS = ["about", "work", "blog", "skills", "building"];
const MOBILE_LINKS = ["home", ...LINKS, "contact"];
const OBSERVED = [...MOBILE_LINKS, "testimonial"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section crosses the middle band of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    OBSERVED.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`app__navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="app__navbar-inner" aria-label="Primary">
        <a href="#home" className="app__navbar-logo" aria-label="mycodedojo — home">
          <Logo />
        </a>

        <ul className="app__navbar-links">
          {LINKS.map((item) => (
            <li key={`link-${item}`}>
              <a
                href={`#${item}`}
                className={active === item ? "is-active" : ""}
                aria-current={active === item ? "true" : undefined}
              >
                {active === item && (
                  <motion.span
                    layoutId="nav-pill"
                    className="app__navbar-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="app__navbar-cta">
          Let&apos;s talk <HiArrowRight />
        </a>

        <button
          type="button"
          className="app__navbar-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <HiMenuAlt4 />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="app__navbar-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="app__navbar-sheet-head">
              <Logo />
              <button
                type="button"
                className="app__navbar-toggle"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <HiX />
              </button>
            </div>
            <ul>
              {MOBILE_LINKS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, ease: "easeOut" }}
                >
                  <a
                    href={`#${item}`}
                    className={active === item ? "is-active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
