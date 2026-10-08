// Career data for the Skills & Experience section. Source of truth is the
// master resume; keep the two in sync when a role changes.
import interMiami from "../assets/companies/inter-miami.png";
import coinroutes from "../assets/companies/coinroutes.png";
import wix from "../assets/companies/wix.png";
import ironhack from "../assets/companies/ironhack.png";
import uopx from "../assets/companies/uopx.png";

export const experience = [
  {
    company: "Inter Miami CF",
    logo: interMiami,
    location: "Fort Lauderdale, FL",
    current: true,
    roles: [
      {
        title: "Systems Administrator",
        dates: "Oct 2024 – Present",
        points: [
          "Lead Microsoft Intune management and deployment across the club, streamlining device provisioning and enforcing endpoint security in a hybrid cloud environment.",
          "Administer the enterprise Microsoft 365 (E3) tenant: hybrid Exchange Online, mailbox and quota troubleshooting, transport rules and anti-spam policy.",
          "Manage Active Directory and Okta identity, and automate onboarding and routine administration with daily PowerShell scripting.",
          "Maintain virtualized Dell PowerEdge infrastructure and firewall/VPN network security.",
          "Support live MLS match-day operations and help plan technology for the new stadium.",
        ],
      },
    ],
    stack: ["Intune", "Microsoft 365", "Exchange Online", "Active Directory", "Okta", "PowerShell", "Palo Alto"],
  },
  {
    company: "CoinRoutes",
    logo: coinroutes,
    location: "Miami, FL",
    roles: [
      {
        title: "Frontend Developer",
        dates: "Feb 2023 – Jul 2024",
        points: [
          "Maintained and enhanced an algorithmic crypto trading platform, improving UX and rendering performance.",
          "Rebuilt the public web presence with React, Gatsby and Contentful CMS, driving a 15% lift in user engagement.",
          "Rendered real-time market data from REST and WebSocket feeds into clean, responsive trading UIs.",
          "Integrated Web3 tooling (Ethers.js, wagmi) for wallet and on-chain interactions.",
        ],
      },
    ],
    stack: ["React", "Material-UI", "Gatsby", "Contentful", "WebSockets", "Ethers.js", "wagmi"],
  },
  {
    company: "Drift",
    location: "Remote",
    roles: [
      {
        title: "Technical Support Engineer, Developer API",
        dates: "2021 – 2022",
        points: [
          "Supported Drift's REST API endpoints for enterprise clients.",
        ],
      },
    ],
    stack: ["REST APIs", "Enterprise support"],
  },
  {
    company: "Wix",
    logo: wix,
    location: "Miami, FL",
    roles: [
      {
        title: "Systems & Network Administrator",
        dates: "Jun 2015 – Dec 2019",
        points: [
          "Managed Microsoft Server environments with 99.9% uptime across critical services.",
          "Administered Active Directory, user access and security organization-wide.",
          "Planned, deployed and maintained system and network updates to current security standards, cutting local and cloud infrastructure costs.",
        ],
      },
      {
        title: "Technical Support, Tier 3",
        dates: "2013 – 2015",
        points: [
          "Diagnosed open Jira tickets as a QA tier for developer bugs, and handled site deployment, SEO, sensitive billing cases and de-escalations.",
        ],
      },
    ],
    stack: ["Windows Server", "Active Directory", "Networking", "Jira"],
  },
];

export const education = [
  {
    school: "Ironhack",
    logo: ironhack,
    title: "MERN Full-Stack Development",
    detail: "400+ hour bootcamp · Miami, FL",
    dates: "2020",
  },
  {
    school: "University of Phoenix",
    logo: uopx,
    title: "A.A., Computer Science",
    detail: "Online",
    dates: "2012 – 2016",
  },
];

export const certifications = [
  "TypeScript: The Complete Developer's Guide",
  "Complete NodeJS Developer",
  "The Modern React Bootcamp",
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "React Native / Expo", "Redux", "Tailwind CSS", "Sass", "Material-UI", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Fastify", "Python", "Django", "PHP / Laravel", "GraphQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "Infrastructure & Identity",
    skills: ["Microsoft 365", "Exchange Online", "Intune", "Active Directory", "Okta", "Windows Server", "Group Policy", "Proxmox"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Docker", "Caddy", "Git", "PowerShell", "Jenkins", "Vercel", "Netlify", "Sanity CMS"],
  },
  {
    title: "AI & Automation",
    skills: ["Claude API", "Ollama", "ComfyUI", "n8n", "Home Assistant"],
  },
  {
    title: "Web3",
    skills: ["Solana", "Base / EVM", "Ethers.js", "wagmi", "Foundry"],
  },
];
