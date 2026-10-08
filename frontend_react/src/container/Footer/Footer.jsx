import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineChatAlt2,
  HiOutlineLocationMarker,
  HiOutlineClipboardCopy,
  HiCheck,
  HiArrowUp,
} from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { LogoMark } from "../../components/Navbar/Logo";
import "./Footer.scss";

const EMAIL = "mcooper7649@gmail.com";
const PHONE_SMS = "sms:+17024807649";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mcooper305/", icon: <BsLinkedin /> },
  { label: "GitHub", href: "https://github.com/mcooper7649", icon: <BsGithub /> },
  { label: "X / Twitter", href: "https://twitter.com/MICHAEL41615660", icon: <FaTwitter /> },
];

const EMPTY = { name: "", email: "", message: "" };

const Footer = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    client
      .create({ _type: "contact", ...form })
      .then(() => {
        setStatus("sent");
        setForm(EMPTY);
      })
      .catch(() => setStatus("error"));
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <>
      <div className="app__contact">
        <div className="app__contact-intro">
          <p className="app__contact-eyebrow">Contact</p>
          <h2 className="app__contact-title">
            Let&apos;s grab a coffee <span>&amp; chat.</span>
          </h2>
          <p className="p-text app__contact-lead">
            Have a role, a project, or just want to talk homelabs and React?
            My inbox is open.
          </p>

          <ul className="app__contact-methods">
            <li>
              <span className="app__contact-icon" aria-hidden="true">
                <HiOutlineMail />
              </span>
              <div>
                <p className="app__contact-label">Email</p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <button
                type="button"
                className="app__contact-copy"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <HiCheck /> : <HiOutlineClipboardCopy />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </li>
            <li>
              <span className="app__contact-icon" aria-hidden="true">
                <HiOutlineChatAlt2 />
              </span>
              <div>
                <p className="app__contact-label">Text</p>
                <a href={PHONE_SMS}>Send me a message</a>
              </div>
            </li>
            <li>
              <span className="app__contact-icon" aria-hidden="true">
                <HiOutlineLocationMarker />
              </span>
              <div>
                <p className="app__contact-label">Based in</p>
                <p className="app__contact-value">Miami, FL · Eastern Time</p>
              </div>
            </li>
          </ul>

          <div className="app__contact-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="app__contact-card">
          {status === "sent" ? (
            <motion.div
              className="app__contact-sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="app__contact-sent-icon">
                <HiCheck />
              </span>
              <h3>Message sent</h3>
              <p className="p-text">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                className="app__contact-link"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="app__contact-form" onSubmit={handleSubmit}>
              <div className="app__contact-row">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="What are you working on?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              {status === "error" && (
                <p className="app__contact-error" role="alert">
                  That didn&apos;t send. Please try again, or email me
                  directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              )}

              <button
                type="submit"
                className="app__contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="app__contact-footer">
        <div className="app__contact-footer-brand">
          <LogoMark size={28} />
          <p>
            &copy; 2020–{new Date().getFullYear()} Michael Cooper. All rights
            reserved.
          </p>
        </div>
        <a href="#home" className="app__contact-top">
          Back to top <HiArrowUp />
        </a>
      </footer>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
