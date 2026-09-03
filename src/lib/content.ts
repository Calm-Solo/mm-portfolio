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
    "I live in Elk Grove, California. I still build: BidSpark, a smart pool monitor, a home robot, and the systems my clients run on Next.js and Vercel.",
  ],
} as const;
