export const portfolioData = {
  profile: {
    name: "Tegar Ramdhani",
    title: "The Beginner Vibe Coder",
    pageTitle: "Tegar - The Beginner Vibe Coder",
    location: "Surabaya, East Java, Indonesia",
    email: "tegarramdhanicode@gmail.com",
    github: "Syrentzu",
    githubUrl: "https://github.com/Syrentzu",
    linkedin: "tegar-ramdhani-458422240",
    linkedinUrl: "https://www.linkedin.com/in/tegar-ramdhani-458422240",
    avatarUrl: "/IMG_20250903_013342.jpg",
    statusBadge: "Open to Projects & Collaborations",
    bio: "An Information Technology student at ITATS who bridges the gap between technical architecture and modern visual aesthetics. Driven by the 'Vibe Coding' methodology—maximizing cutting-edge AI tools to build ultra-fast, clean, and interactive web applications without unnecessary boilerplate overhead."
  },

  colorPalette: {
    primaryDark: "#03045E",   // Deep Blue
    accentMain: "#0077B6",    // Ocean Blue
    accentMid: "#90E0EF",     // Soft Cyan / Sky Blue
    accentLight: "#CAF0F8",   // Ice Blue
    // Dark Mode Specific Palette
    darkModeBg: "#050515",    // Midnight Canvas
    darkModeCard: "#0C0E29"   // Deep Navy Gray Card
  },

  education: [
    {
      id: 1,
      institution: "Institut Teknologi Adhi Tama Surabaya (ITATS)",
      degree: "Bachelor of Computer Science (S1 Teknik Informatika)",
      timeline: "2024 - Present",
      details: "Focusing on core software engineering, data structures, and advanced systems."
    },
    {
      id: 2,
      institution: "SMK NEGERI 2 SURABAYA",
      degree: "Vocational High School",
      timeline: "Graduated",
      details: "Gained strong foundational roots in technical architecture and system administration."
    }
  ],

  skills: {
    development: [
      "HTML5 Semantics",
      "Modern CSS (Nesting, :has Selector)",
      "JavaScript (ES6+)",
      "TypeScript",
      "React 19",
      "Tailwind CSS v4"
    ],
    design: [
      "Figma UI/UX Design",
      "Grid Systems & Layouting",
      "Vector Asset Design",
      "Typography & Personal Branding"
    ]
  },

  services: [
    {
      id: "vibe-coding",
      title: "Vibe Coding / Rapid Prototyping",
      desc: "Transforming raw ideas into fully functional web applications at lightning speed using advanced AI augmentation tools paired with precision engineering."
    },
    {
      id: "ui-ux",
      title: "Modern UI/UX Design",
      desc: "Crafting structured, high-fidelity Figma layouts based on logical typography, perfect grid systems, and dark/light responsive tokens."
    },
    {
      id: "frontend",
      title: "React 19 & Tailwind v4 Apps",
      desc: "Building clean, production-ready frontend apps with single-level utility classes, leveraging async form states and eliminating unnecessary code bloat."
    }
  ],

  filterOptions: [
    { value: 'all', label: 'All Projects' },
    { value: 'landing', label: 'Landing Page' },
    { value: 'agency', label: 'Event Strategy' },
    { value: 'ecommerce', label: 'E-Commerce' }
  ],

  projects: [
    {
      id: "latihan-landing-page",
      title: "Landing Page Creation Practice",
      category: "landing",
      categoryLabel: "Landing Page",
      tags: ["HTML", "CSS", "Responsive Layout", "Practice"],
      year: "2026",
      desc: "A hands-on practical project showcasing semantic structures and clean responsive design implementations.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
      url: "https://github.com/Syrentzu/Latihan-Buat-Landing-Page"
    },
    {
      id: "tokokita",
      title: "TokoKita — Modern E-Commerce Platform",
      category: "ecommerce",
      categoryLabel: "E-Commerce",
      tags: ["React", "Tailwind CSS", "UI/UX Optimization"],
      year: "2026",
      desc: "A scalable retail web application built with a modern React component ecosystem and customized fluid utility styling.",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80",
      url: "#"
    },
    {
      id: "aifest2025",
      title: "AI Creative Fest — Event Architecture",
      category: "agency",
      categoryLabel: "Event Strategy",
      tags: ["Concept Proposal", "Branding Strategy", "AI Curation"],
      year: "2025",
      desc: "Engineered the technical proposal, promotional asset strategy, and activity pipeline for a flagship campus AI creativity festival.",
      img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
      url: "#"
    }
  ],

  blogArticles: [
    {
      id: "sticker-business-calc",
      title: "Micro-Business Analytics: Cost-Per-Sheet Calculations for Sticker Startups",
      category: "business",
      date: "May 2026",
      readTime: "6 min read",
      tags: ["Business Model", "Hardware Analysis"],
      desc: "A deep dive into supply chains, inkjet vs. thermal hardware selection, and exact per-sheet margin calculations for a home-based printing setup.",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80"
    },
    {
      id: "fintech-ui-ux-critique",
      title: "Fintech UI Evolution: Analyzing Recent UX Shifts in Bibit and SeaBank Apps",
      category: "dev",
      date: "April 2026",
      readTime: "8 min read",
      tags: ["UI/UX Audit", "Finance"],
      desc: "Critiquing interface restructuring, hidden features, and layout changes in Indonesian personal finance apps from a designer-developer perspective.",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80"
    },
    {
      id: "civ-theotown-mechanics",
      title: "The Architecture of Play: Grand Strategy and Spatial Rules in Simulation Games",
      category: "design",
      date: "March 2026",
      readTime: "10 min read",
      tags: ["Game Design", "Systems Thinking"],
      desc: "Breaking down complex urban planning mechanics, pacing, and systemic game architecture inside Civilization VII, Cities: Skylines 2, and TheoTown.",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80"
    },
    {
      id: "indonesian-baking-precision",
      title: "The Physics of Confectionery: Precision and Ratios in Traditional Indonesian Baking",
      category: "lifestyle",
      date: "February 2026",
      readTime: "5 min read",
      tags: ["Culinary Arts", "Precision Cooking"],
      desc: "Exploring structural integrity, ingredient behaviors, and strict temperature handling required for perfect Putri Salju, Quesillo, and Putu Ayu.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
    }
  ]
};
