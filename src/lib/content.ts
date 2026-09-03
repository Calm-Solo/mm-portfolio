export const site = {
  name: "Michael McBride",
  shortName: "MM",
  location: "Elk Grove, CA",
  role: "Firmware validation & systems engineer",
  email: "mdrservices916@gmail.com",
  github: {
    label: "GitHub",
    href: "https://github.com/Calm-Solo",
  },
  headline:
    "I validate the firmware OEMs ship — and I still write the traces myself.",
  lede: "A decade of NVMe SSD validation for Intel, Solidigm, and OEM programs at Dell and NetApp. I train teams, document the failure, and build the tools that make the next sprint cleaner.",
} as const;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Interview inquiry — Michael McBride")}`;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const proofPoints = [
  {
    id: "oem",
    index: "01",
    label: "OEM SSD firmware",
    detail: "Dell, NetApp, Intel — Gen3/Gen4 NVMe regression and CVE sprints.",
  },
  {
    id: "lead",
    index: "02",
    label: "International QA lead",
    detail: "Trained and led functional validation teams in Mexico.",
  },
  {
    id: "founder",
    index: "03",
    label: "Founder",
    detail: "McBride Tech Services — web, hosting, and IT for small teams.",
  },
  {
    id: "hardware",
    index: "04",
    label: "Hardware & embedded",
    detail: "ESP32, Raspberry Pi, Arduino — sensors, robots, field tools.",
  },
] as const;

export const whoYouHire = {
  title: "Who you are hiring",
  paragraphs: [
    "Not a ticket-filer. A liaison who can sit with developers, management, and operators and still own the root cause — hardware, firmware, or config.",
    "At Cisco I ran UCS test lines and presented ISO 9001 metrics to non-technical stakeholders. At Intel I traced NVMe failures to the layer that actually broke. At Solidigm I found critical bugs before customers did.",
    "I live in Elk Grove, California. I still build: BidSpark, a church site for First Baptist of North Highlands, a smart pool monitor, a home robot, and the systems my clients run on Next.js and Vercel.",
  ],
} as const;

export const liveProjects = [
  {
    id: "learning-lab",
    index: "01",
    name: "McBride Tech Learning Lab",
    status: "In development",
    summary:
      "Spelling Bee Challenge featuring mascot Bumble — a learning product still in active development.",
    href: "https://mcbride-tech-learning-lab.vercel.app/",
    cta: "McBride Tech Learning Lab",
    stack: ["Next.js", "React", "Vercel"],
  },
  {
    id: "bidspark",
    index: "02",
    name: "BidSpark",
    status: "Live",
    summary:
      "Quote and receipt generator for DIY, entrepreneurs, and small-business owners, with AI-assisted quoting and negotiation.",
    href: "https://www.bidspark.org",
    cta: "BidSpark",
    stack: ["Next.js", "TypeScript", "React"],
  },
  {
    id: "fbcnh",
    index: "03",
    name: "First Baptist Church of North Highlands",
    status: "Live",
    summary:
      "Web presence for a local church — hosting, access, and a site the congregation can actually use.",
    href: "https://www.fbcnh.church",
    cta: "First Baptist Church of North Highlands",
    stack: ["Next.js", "Vercel"],
  },
  {
    id: "pool",
    index: "04",
    name: "Smart Pool Monitor",
    status: "Live",
    summary:
      "Measures pH and TDS, then surfaces real-time diagnostics on a TFT screen, a companion app, and a live water-quality dashboard.",
    href: "https://water-quality-dashboard-one.vercel.app/",
    cta: "Smart Pool Monitor",
    stack: ["ESP32", "Python", "Vercel"],
  },
] as const;

export const fieldProjects = [
  {
    id: "robot",
    index: "05",
    name: "BotNique",
    summary:
      "Mega 2560 powered chatbot named BotNique that I will be converting into home monitoring platform. Elegoo Smart Robot Car for the body, Pi for the brain, ESP32-CAM for vision, IR for nav. Play the video to see a short message from BotNique!",
    stack: ["Mega 2560", "Raspberry Pi", "ESP32", "C++", "ROS 2"],
    video: {
      youtubeId: "UKStf7ncGSw",
      title: "A message from BotNique",
    },
  },
] as const;

export const techStack = [
  {
    id: "product",
    index: "01",
    label: "Product",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "data",
    index: "02",
    label: "Data & payments",
    items: ["Neon", "PostgreSQL", "Stripe"],
  },
  {
    id: "tools",
    index: "03",
    label: "Build tools",
    items: ["Cursor"],
  },
  {
    id: "systems",
    index: "04",
    label: "Systems",
    items: ["Python", "C++"],
  },
] as const;

export const experience = [
  {
    id: "mts",
    index: "01",
    role: "Founder & Lead Developer",
    org: "McBride Tech Services",
    dates: "2024 — Present",
    place: "Sacramento, CA",
    points: [
      "IT support, hosting, authentication, and access for small businesses, nonprofits, and churches.",
      "Ship and maintain web systems on Next.js, React, Tailwind, Azure, and Vercel.",
      "Write the onboarding guides and maintenance plans so clients stop opening tickets for the same issue.",
    ],
  },
  {
    id: "solidigm",
    index: "02",
    role: "3rd Party Tool Specialist",
    org: "Solidigm Technology",
    dates: "Jan 2020 — Oct 2024",
    place: "CA",
    points: [
      "Firmware regression on Gen3 and Gen4 SSDs. CVE test sprints. Found critical bugs before customers did.",
      "Supported Dell, NetApp, and Intel on SSD firmware validation.",
      "Trained and led QA teams in Mexico. NVMe Express compliance with automation and protocol analyzers.",
    ],
  },
  {
    id: "intel",
    index: "03",
    role: "Firmware Validation Tech IV",
    org: "Intel",
    dates: "Aug 2018 — Jan 2020",
    place: "CA",
    points: [
      "Compliance testing on Gen3 NVMe SSDs including Optane, 3DXP, and dual-port models.",
      "Debugged failures with protocol traces and isolated root cause across hardware, firmware, and config.",
      "JIRA for tracking. Liaison between stakeholders, management, and developers.",
    ],
  },
  {
    id: "cisco",
    index: "04",
    role: "Test Engineer, Demo Loan Services",
    org: "Cisco (Teleplan)",
    dates: "Feb 2013 — Aug 2018",
    place: "CA",
    points: [
      "Owned the Cisco UCS automated test line. Wrote scripts and plans for a production pace.",
      "Built test infrastructure on UCS-240 servers, SG switches, ISR routers, and COMM servers.",
      "ISO 9001 compliance. Presented test metrics to non-technical stakeholders. GitLab and GitHub.",
    ],
  },
] as const;

export const education = [
  {
    id: "bs",
    title: "B.S. Information Technology — Software Engineering",
    org: "University of Phoenix",
    year: "2016",
  },
  {
    id: "aa",
    title: "A.A. Business Management",
    org: "University of Phoenix",
    year: "2008",
  },
  {
    id: "netplus",
    title: "CompTIA Network+",
    org: "Northwestern Technical College",
    year: "2002",
  },
  {
    id: "azure",
    title: "Microsoft Founders Hub — Azure AI Foundry",
    org: "Microsoft",
    year: "Certificate",
  },
] as const;

export const aboutLede =
  "A test engineer who still writes the traces — then a founder who ships the site, trains the users, and owns the ticket after it goes live.";

export const contactLede =
  "If you need firmware validation, systems work, or a product that has to survive real users, email is the fastest path.";
