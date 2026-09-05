// ============================================
// DESIGN & BRAND PAGE — Edit all copy, icons and media here
// ============================================
//
// Each project below becomes one card in the left-hand stack.
//   icon   — path to a square icon (e.g. '/design/arcade-icon.jpg'). Leave ''
//            and a monogram placeholder is drawn instead.
//   media  — array of image paths shown in the hero + gallery on the right.
//            Leave [] and numbered placeholder panels are drawn instead.
//   credits — optional [{ role, name }] rows listed under the description.

const DESIGN = {

  // --- Global ---
  siteTitle: 'Aayush Jain',
  wordmark: 'Aayush Jain',

  // --- Top-left button ---
  backLabel: 'Back',
  backUrl: '/#content',

  // --- Clock under the wordmark ---
  city: 'San Francisco',
  timeZone: 'America/Los_Angeles',

  // --- Intro card (top of the stack) ---
  about: {
    text: 'Aayush Jain is a creative technologist working across brand, product and design.',
    buttons: [
      { label: 'Portfolio', url: '/#content' },
      { label: 'Email', url: 'mailto:jainaayushmr@gmail.com' },
    ],
  },

  // --- Projects ---
  projects: [
    {
      key: 'arcade',
      title: 'Arcade',
      description: 'Placeholder description for the Arcade work.',
      icon: '/design/arcade-icon.jpeg',
      media: ['/design/arcade-kravet.svg'],
      intro: '',
      credits: [],
    },
    {
      key: 'chaiwala',
      title: 'CHAIWALA',
      description: 'Placeholder description for the CHAIWALA work.',
      icon: '/design/chaiwala-icon.png',
      media: [
        '/design/chaiwala-table.jpeg',
        '/design/chaiwala-cups.jpeg',
        '/design/chaiwala-menu.jpeg',
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'stanford-dorm-room',
      title: 'Stanford Dorm Room',
      description: 'Placeholder description for the Stanford Dorm Room work.',
      icon: '',
      media: [],
      intro: '',
      credits: [],
    },
    {
      key: 'abstractions',
      title: 'Abstractions',
      description: 'Placeholder description for the Abstractions work.',
      icon: '',
      media: [],
      intro: '',
      credits: [],
    },
    {
      key: 'charcoal',
      title: 'Charcoal',
      description: 'Placeholder description for the Charcoal work.',
      icon: '',
      media: [],
      intro: '',
      credits: [],
    },
  ],
};

export default DESIGN;
