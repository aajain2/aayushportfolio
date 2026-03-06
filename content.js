// ============================================
// SITE CONTENT — Edit all copy and links here
// ============================================

const CONTENT = {

  // --- Global ---
  siteTitle: 'Aayush Jain',
  email: 'aayush2@stanford.edu',
  year: '2026',

  // --- Intro Animation ---
  introShort: 'a/j',
  introFull: 'Aayush Jain',

  // --- Headline (typewriter) ---
  headline: 'Building interfaces for new forms of computation. Making the most complex tasks accessible to everyday people.',

  // --- Bio (left column) ---
  // Use { text, bold } objects. Bold items get hover-to-grey effect.
  leftBio: [
    { text: 'Hi, I am Aayush, a creative technologist. I build products that democratize access to personalized expertise through intelligent interfaces. Currently an undergraduate student at ' },
    { text: 'Stanford,', bold: true, url: 'https://www.stanford.edu/' },
    { text: ' I\'ve previously made stops at ' },
    { text: 'Arcade,', bold: true, url: 'https://wwd.com/business-news/technology/arcade-ai-maia-custom-design-platform-1238339735/' },
    { text: ' ' },
    { text: 'Glean,', bold: true, url: 'https://www.glean.com/connectors' },
    { text: ' ' },
    { text: 'Apple,', bold: true, url: 'https://ads.apple.com/app-store' },
    { text: ' ' },
    { text: 'AutoZone,', bold: true, url: 'https://www.autozone.com/' },
    { text: ' ' },
    { text: 'St. Jude Children\'s Research Hospital,', bold: true, url: 'https://www.stjude.org/research/labs/yu-lab.html' },
    { text: ' and the ' },
    { text: 'University of Memphis.', bold: true, url: 'https://www.memphis.edu/' },
  ],

  // --- Bio (right column) ---
  rightBio: 'My work spans zero-to-one product development, user research, and cross-functional execution. I care most about the early stages: finding the insight that changes how a team thinks about the problem, then moving fast enough to learn before assumptions calcify. Some of the products I\'ve built and shipped can be found below.',

  // --- Links ---
  links: [
    { label: 'Email', url: 'mailto:aayush2@stanford.edu' },
    { label: 'CV', url: '/Aayush_Jain_Resume.pdf' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aajain2/' },
  ],

  // --- Section Heading ---
  sectionHeading: 'Projects and roles I\'m currently working on',

  // --- Projects ---
  projects: [
    {
      
      title: 'Foresight',
      categories: 'Autonomous QA, Browser Agents, Developer Tools',
      description: 'Software development has never moved faster. Understanding how users experience that software has not kept up. I built Foresight with some of my closest friends \u2014 three random roommates drawn into the same Stanford triple junior year who never expected much from it \u2014 to close that gap by deploying AI agents that navigate live product interfaces like real users, clicking, scrolling, and completing workflows autonomously to surface usability failures and regressions before they reach production. We started with a broader vision around synthetic user simulation, learned quickly that teams wanted automation of repetitive testing work rather than a replacement for real research, and rebuilt the entire system from scratch around that insight. Early pilots converted into paying customers.',
      link: null,
    },
    {
      title: 'Aora',
      categories: 'Generative AI, Sensory Computing, Personalization',
      description: 'The fragrance industry sells catalogs. People want signatures. We built Aora to explore whether AI could translate subjective identity signals \u2014 memories, moods, places, aesthetics \u2014 into structured fragrance compositions of top, middle, and base notes. We validated the system inside a real custom perfume store, mixing AI-generated formulations into physical scents. In one case, a customer\'s AI-generated formula produced a perfume closer to what they had imagined than the one they mixed by hand.',
      link: null,
    },
    {
      title: 'Trabit',
      categories: 'Behavioral Design, Social Accountability, Mobile',
      description: 'Habit tracking fails in isolation, not from lack of desire, but lack of witness. We designed Trabit around the insight that consistency is easier to maintain when it is visible to people you care about. Users pick one habit, post a daily photo proving they did it, and face a \u201cYesterday\'s Report\u201d naming anyone who slipped. We piloted with 16 Stanford students across two close friend groups, achieved 75% daily posting rates, and watched the app spread through word of mouth beyond the initial cohorts before the pilot had even ended.',
      link: { label: 'Read more at GitHub', url: '#' },
    },
    {
      title: 'Research: Targeted cancer therapy and phytochemicals',
      categories: 'Cancer Biology, Biochemistry, Translational Medicine',
      description: 'I became interested in a core tension in oncology: conventional chemotherapy is effective at targeting tumor cells but kills indiscriminately, producing dose-limiting side effects that can halt treatment entirely. This led me to targeted cancer therapy and phytochemicals as a complementary answer, compounds found in everyday foods that exert cytotoxic effects on cancerous cells while actively protecting healthy tissue. I conducted research and wrote review papers on the mechanisms, clinical evidence, and bioavailability of these compounds at the University of Memphis and UT Health Science Center.',
      link: { label: 'Read papers', url: 'https://scholar.google.com/citations?user=XtNy-UUAAAAJ&hl=en' },
    },
    {
      title: 'Fine Art',
      categories: 'Charcoal, Mixed Media, Exhibition',
      description: 'Exhibited at Pratt Manhattan Gallery, Memphis International Airport, and Brooks Museum of Art, and sold to Gus\'s Fried Chicken and private buyers.',
      link: { label: 'See selected works', url: 'fine-art.html' },
    },
  ],

  // --- Contact Page ---
  contact: {
    backLabel: '\u2190 Back',
    note: 'I\'m always open for interesting opportunities. Feel free to reach out for collaboration, commission, or just a coffee chat.',
    imageAlt: 'Horse',
  },
};

export default CONTENT;
