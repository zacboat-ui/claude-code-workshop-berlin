// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Zac",
  role: "RevOps Analyst",
  location: "Berlin, Germany",
  headline:
    "I help revenue teams work smarter — connecting the dots between sales, marketing, and data to drive predictable growth.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a RevOps Analyst with five and a half years in revenue operations and six years before that as a Process Engineer at BHP. I came to RevOps with two bachelor's degrees — business and extractive metallurgy — and a habit of thinking in systems that I picked up in mining and brought straight into go-to-market.",
    "Day to day I work across the full revenue stack: deep analysis for sales, marketing, and leadership, plus administering the software that every customer-facing team depends on. I care about the connective tissue — the data flows, process definitions, and tooling that let a revenue org actually function.",
    "I moved to Berlin nine years ago and haven't looked back. When I'm not in a spreadsheet or a CRM, I'm surfing, playing padel, reading, or hunting for the next film worth watching.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Senior Revenue Operations Analyst",
      company: "think-cell",
      period: "Aug 2025 — Feb 2026",
      summary:
        "Delivered C-suite and board-level reporting for weekly, monthly, and quarterly GTM rhythms. Owned commission calculations for a Sales org of 80+ people with 100% accuracy. Developed the standardised Weekly Executive Report, transforming raw data into a comprehensive leadership asset.",
    },
    {
      title: "Revenue Operations Analyst (Senior)",
      company: "Productsup",
      period: "Feb 2021 — Jul 2025",
      summary:
        "Grew from analyst to senior across four years, supporting 40+ Sales and Marketing stakeholders. Built the company's Revenue and Pipeline target calculation tool, designed a full-funnel analysis in Excel and Qlik, and led three Qlik App projects covering Pipeline Analytics, Quota Performance, and CRO reporting. Deep hands-on work across Salesforce, HubSpot, Outreach, LeanData, and 6Sense.",
    },
    {
      title: "Process Engineer",
      company: "BHP",
      period: "Feb 2012 — Apr 2018",
      summary:
        "Six years across graduate and full engineer roles at one of the world's largest mining companies. Chaired daily production meetings, led KPI reporting, managed on-site process improvement projects, and delivered cost and productivity gains through cross-functional collaboration.",
    },
  ],
};

export const projects = {
  heading: "Selected work",
  items: [
    {
      title: "Revenue & Pipeline Target Tool",
      year: "2022",
      summary:
        "Built Productsup's core revenue forecasting tool in Excel. Allows leadership to adjust key variables and model out quarterly and yearly revenue targets across every GTM department.",
      link: { label: "Ask me about it", href: "#contact" },
    },
    {
      title: "Pipeline Controlling Process",
      year: "2023",
      summary:
        "Designed a pipeline controlling workflow using cohort-based conversion rates to manage quarterly revenue expectations. Gave leadership a repeatable framework for tracking deals against targets in real time.",
      link: { label: "Ask me about it", href: "#contact" },
    },
    {
      title: "Weekly Executive Report (think-cell)",
      year: "2025",
      summary:
        "Developed the standardised Weekly Executive Report from scratch — transforming raw CRM and pipeline data into a clean, board-ready asset used by the C-suite and senior leadership team each week.",
      link: { label: "Ask me about it", href: "#contact" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "CRM & Sales Tools",
      items: ["Salesforce", "HubSpot", "Outreach", "LeanData", "6Sense", "ZoomInfo", "Lusha"],
    },
    {
      label: "Analytics & Reporting",
      items: ["QlikSense", "Power BI", "Advanced Excel", "SQL / SOQL", "Google Sheets"],
    },
    {
      label: "Revenue Operations",
      items: ["Territory planning", "Pipeline management", "Commission calculations", "OKR management", "Full-funnel analysis"],
    },
    {
      label: "Process & Method",
      items: ["Lean Six Sigma (Greenbelt)", "Process improvement", "Data integrity", "Stakeholder reporting"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Zac brings a rare combination of analytical rigour and operational instinct. He doesn't just surface data — he builds systems that make the whole revenue org smarter.",
      author: "Mauri Guerreiro",
      role: "Head of Revenue Operations, Maltego (ex-Productsup)",
    },
    {
      text:
        "Zac is one of those people who makes complex problems look straightforward. His reporting work gave our leadership team a clarity we hadn't had before.",
      author: "Markus Proesch",
      role: "CoS Project Manager, think-cell",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to Revenue Operations roles in Berlin or remote. Happy to connect — whether it's about a role, a collaboration, or just a coffee.",
  email: "zac.boatwright@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zac-boatwright" },
  ],
};

export const meta = {
  title: "Zac — RevOps Analyst",
  description: "Berlin-based RevOps Analyst.",
};
