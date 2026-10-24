/* ==========================================================================
   AETHERIA STUDIO - PORTFOLIO, TESTIMONIALS & FAQ DATA
   ========================================================================== */

const PORTFOLIO_DATA = [
  {
    id: "aurora",
    title: "Aurora Intelligence",
    category: "ai",
    categoryLabel: "AI & Data Platform",
    tagline: "Autonomous Treasury & Liquidity Intelligence Engine",
    image: "assets/images/hero-showcase.jpg",
    metric: "+340% Capital Efficiency",
    client: "Aurora Global Capital (Zurich & NYC)",
    year: "2026",
    timeline: "14 Weeks",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "PyTorch"],
    overview: "Aurora is an enterprise-grade financial analytics and automated treasury management platform. It leverages machine learning to forecast cash runway, detect market arbitrage, and automate hedge execution in real-time.",
    challenge: "The client needed a sub-millisecond, highly intuitive dashboard that could digest millions of tick data points while providing crystal-clear risk metrics for C-level investment committees without visual fatigue.",
    solution: "We designed a bespoke dark-mode interface powered by custom WebGL chart renderers, glassmorphic data tiles, and a natural-language agent interface that responds to complex financial queries within 200ms.",
    results: [
      "$1.45B in assets actively monitored across 18 jurisdictions",
      "Reduced quarterly financial closing reporting time from 5 days to 18 minutes",
      "Won the 2026 European FinTech Design of the Year"
    ]
  },
  {
    id: "vitalis",
    title: "Vitalis Health",
    category: "mobile",
    categoryLabel: "Web & Mobile Apps",
    tagline: "Continuous Biometric Monitoring & Longevity Companion",
    image: "assets/images/project-health.jpg",
    metric: "4.9★ App Store (85k Reviews)",
    client: "Vitalis Bio-Systems (Boston)",
    year: "2026",
    timeline: "12 Weeks",
    techStack: ["React Native", "TypeScript", "HealthKit SDK", "Node.js", "GraphQL", "TimescaleDB"],
    overview: "Vitalis is a personalized preventative medicine companion that synthesizes heart rate variability (HRV), sleep architectures, metabolic trends, and biological markers into actionable daily recovery recommendations.",
    challenge: "Traditional medical apps are sterile, intimidating, and overburdened with raw numbers. Vitalis required an empathetic, calming aesthetic that motivates positive lifestyle changes without triggering anxiety.",
    solution: "We created an organic, dynamic interface with fluid gradient rings, micro-haptics, and generative wellness summaries that distill millions of biometric telemetry points into intuitive scores.",
    results: [
      "Over 420,000 active monthly subscribers across iOS and Android",
      "91% reported measurable improvements in sleep quality within 30 days",
      "Featured as Apple's App of the Day in 42 countries"
    ]
  },
  {
    id: "aura-living",
    title: "Aura Living",
    category: "ecommerce",
    categoryLabel: "Luxury & E-Commerce",
    tagline: "Nordic Architectural Living & Virtual Showroom",
    image: "assets/images/project-luxury.jpg",
    metric: "+185% Checkout Conversion",
    client: "Aura Studio Nord (Copenhagen)",
    year: "2025",
    timeline: "10 Weeks",
    techStack: ["Next.js", "Three.js", "Shopify Plus", "Tailwind CSS", "Sanity CMS"],
    overview: "Aura Living is an ultra-luxury Scandinavian furniture and spatial design house. The digital flagship combines high-fashion editorial aesthetics with photorealistic 3D interactive product configurators.",
    challenge: "High-ticket furniture purchases ($4,000 - $35,000) have low online conversion due to material uncertainty and spatial scale hesitation. The digital platform needed to recreate the tactile showroom experience online.",
    solution: "We engineered an interactive WebGL fabric and finish customizer, augmented-reality room placement, and editorial layout transitions that feel like flipping through an exquisite architecture monograph.",
    results: [
      "Average order value (AOV) increased by 64% within first quarter",
      "Customer return rate reduced by 42% due to accurate 3D scale preview",
      "Ranked #1 luxury lifestyle digital commerce experience by Awwwards"
    ]
  },
  {
    id: "cosmos-studio",
    title: "Cosmos Studio",
    category: "ai",
    categoryLabel: "AI & Data Platform",
    tagline: "Node-Based Generative Synthesis & Canvas Workspace",
    image: "assets/images/project-ai.jpg",
    metric: "1.2M Community Nodes Shipped",
    client: "Cosmos AI Labs (San Francisco)",
    year: "2026",
    timeline: "16 Weeks",
    techStack: ["React", "TypeScript", "Canvas2D", "WebAssembly", "WebSockets", "Rust"],
    overview: "Cosmos Studio is an infinite node-based creative engine allowing digital artists and creative directors to visually chain generative diffusion models, upscalers, and neural post-processing in a real-time multiplayer canvas.",
    challenge: "Managing complex computation graphs with real-time model inferencing in the browser without UI thread freezing or canvas stutter required unprecedented performance engineering.",
    solution: "We architected an asynchronous WebAssembly pipeline and hardware-accelerated canvas renderer capable of sustaining 60fps even with 500+ interconnected nodes and 4K media streams.",
    results: [
      "Secured $28M Series A following the public beta launch",
      "Over 120,000 creative studios currently building daily workflows",
      "Zero-latency canvas panning and zoom across infinite artboards"
    ]
  },
  {
    id: "atlas-spatial",
    title: "Atlas Spatial",
    category: "spatial",
    categoryLabel: "Spatial & 3D",
    tagline: "Next-Gen Urban Telemetry & Digital Twin Platform",
    image: "assets/images/project-spatial.jpg",
    metric: "99.999% Critical Uptime",
    client: "Kyoto Smart Infrastructure Group",
    year: "2026",
    timeline: "20 Weeks",
    techStack: ["WebGL 2.0", "Three.js", "Rust", "WebSockets", "Docker", "Mapbox GL"],
    overview: "Atlas Spatial is an industrial-grade digital twin command center operating municipal energy distribution, autonomous transit grids, and structural health sensors across the Neo-Kyoto innovation corridor.",
    challenge: "Visualizing 15,000 live sensor nodes in 3D holographic wireframes in real-time, while providing instantaneous anomaly detection and emergency protocol triggers.",
    solution: "We developed a futuristic cybernetic interface featuring low-latency geospatial shaders, intuitive volumetric controls, and automated alert resolution pipelines.",
    results: [
      "14% reduction in municipal peak energy consumption",
      "Automated response time to transit bottlenecks improved by 8 minutes",
      "Adopted by 3 major metropolitan governments globally"
    ]
  },
  {
    id: "kroma-system",
    title: "Kroma Multi-Brand System",
    category: "ecommerce",
    categoryLabel: "Web & Mobile Apps",
    tagline: "Enterprise Design System & Token Framework",
    image: "assets/images/hero-showcase.jpg",
    metric: "65% Engineering Velocity Boost",
    client: "Global Media Syndicate (London)",
    year: "2025",
    timeline: "8 Weeks",
    techStack: ["TypeScript", "Figma Tokens", "CSS Custom Props", "Storybook", "React"],
    overview: "A unified multi-brand design system powering 24 international media brands across 12 languages, maintaining strict WCAG 2.1 AAA accessibility and sub-second theme rendering.",
    challenge: "Preventing design drift and reducing repetitive frontend implementation across disparate distributed engineering squads.",
    solution: "Engineered headless token pipeline synchronizing Figma styles directly to CSS custom properties and React component libraries via automated CI/CD.",
    results: [
      "Reduced time-to-market for new sub-brand launches from 6 months to 2 weeks",
      "Achieved 100% lighthouse accessibility scores across all consumer properties",
      "Internal developer satisfaction rated 9.6/10"
    ]
  }
];

const TESTIMONIALS_DATA = [
  {
    quote: "AETHERIA fundamentally elevated our company's market trajectory. Their ability to blend world-class visual aesthetics with uncompromising engineering rigor delivered a product that left our Series B investors speechless.",
    name: "Dr. Alistair Thorne",
    role: "Co-Founder & Chief Scientist",
    company: "Aurora Global Capital",
    rating: 5,
    initials: "AT"
  },
  {
    quote: "We interviewed 12 top design agencies in New York and London before choosing AETHERIA. No other team demonstrated such profound command of both empathetic user psychology and complex, low-latency software architecture.",
    name: "Elena Rostova",
    role: "VP of Digital Experience",
    company: "Vitalis Bio-Systems",
    rating: 5,
    initials: "ER"
  },
  {
    quote: "Our online conversions almost doubled within 60 days of deploying the new Aura Living flagship. Their bespoke 3D interactive showroom is not only visually breathtaking, but it runs silky smooth on every device.",
    name: "Søren Lindqvist",
    role: "Creative Director",
    company: "Aura Studio Nord",
    rating: 5,
    initials: "SL"
  },
  {
    quote: "AETHERIA is the rare studio that can take deep technology like real-time AI node graphs and turn it into an addictive, accessible, beautiful creative suite. They operate as true co-founders rather than contractors.",
    name: "Kavita Chen",
    role: "CEO & Founder",
    company: "Cosmos AI Labs",
    rating: 5,
    initials: "KC"
  }
];

const FAQ_DATA = [
  {
    question: "What is your typical project timeline and sprint structure?",
    answer: "Most full-scale projects range between 6 to 14 weeks, executed in dedicated two-week agile sprints. Each sprint concludes with an interactive deployment, transparent progress review, and actionable deliverables. We prioritize rapid prototyping so you see working code early."
  },
  {
    question: "How does intellectual property (IP) and code ownership work?",
    answer: "You retain 100% full legal ownership of all code, assets, design files, animations, and documentation upon project completion and milestone fulfillment. We provide clean, fully commented GitHub repositories and Figma master libraries with zero vendor lock-in."
  },
  {
    question: "Do you integrate with our existing engineering and design teams?",
    answer: "Absolutely. We routinely embed alongside in-house CTOs, product managers, and engineering squads. Whether you need us to build an entire product from scratch (0-to-1) or provide high-level specialized architecture and UI/UX acceleration, we adapt to your existing Jira/Slack/GitHub workflows."
  },
  {
    question: "What technologies and frontend frameworks do you specialize in?",
    answer: "We specialize in modern modern Web technologies including React, Next.js, TypeScript, Three.js, WebGL, Node.js, Python, and scalable cloud architectures on AWS/Vercel. We place extreme emphasis on Core Web Vitals, sub-second load times, and WCAG AAA accessibility."
  },
  {
    question: "How do you handle maintenance and support after launch?",
    answer: "Every project includes a complimentary 30-day post-launch warranty and bug-resolution window. Beyond that, we offer dedicated monthly retainers for continuous feature iterations, performance audits, and SLA-backed infrastructure maintenance."
  },
  {
    question: "How quickly can we kick off a new engagement?",
    answer: "Depending on current studio bandwidth, we typically onboard new clients within 7 to 14 business days following discovery and scope alignment. Use our interactive estimator below or reach out via our contact form to secure your slot."
  }
];
