// ============================================
// DESIGN & BRAND PAGE — Edit all copy, icons and media here
// ============================================
//
// Each project below becomes one card in the left-hand stack.
//   icon   — path to a square icon (e.g. '/design/arcade-icon.jpg'). Leave ''
//            and a monogram placeholder is drawn instead.
//   media  — array of image paths shown in the hero + gallery on the right.
//            Leave [] and numbered placeholder panels are drawn instead.
//   gallery — optional images for the gallery row; defaults to `media` when
//            omitted. Set it when the hero and the tiles should differ.
//   scroller — optional tall image (e.g. a full-page shot) that auto-scrolls
//            inside one gallery-sized card, shown first in the gallery row.
//   sheets — optional flat artwork (posters, menus) shown uncropped at its
//            own aspect ratio, in a row below the gallery.
//   flash  — optional images for a single card below the sheets that cuts
//            between them every 700ms (Porto Rocha's cadence).
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
    heading: 'About me',
    // Where the "Learn more" button goes; same destination as the Back button.
    linkLabel: 'Learn more',
    url: '/#content',
    text: 'Aayush Jain is a creative technologist working across brand, product and design. '
        + 'The work collected here spans identity and packaging, physical spaces and events, '
        + 'and fine art in charcoal, print and installation. '
        + 'He cares most about the early stages: finding the insight that reframes the problem, '
        + 'then making the thing quickly enough to learn from it. '
        + 'Currently at Arcade, previously Stanford, Glean and Apple.',
  },

  // --- Projects ---
  projects: [
    {
      key: 'arcade',
      title: 'Arcade',
      description: 'Placeholder description for the Arcade work.',
      icon: '/design/arcade-icon.jpeg',
      media: ['/design/arcade-kravet.svg'],
      // A tall page shot that slowly scrolls inside its card. When set, this
      // replaces the gallery tiles for the project.
      scroller: '/design/arcade-careers-page.jpg',
      gallery: ['/design/arcade-cyanotype.jpg'],
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
      // Printed pieces — shown whole (never cropped) in a row below the gallery.
      sheets: [
        '/design/chaiwala-poster.jpg',
        '/design/chaiwala-menu-print.jpg',
      ],
      flash: [
        '/design/chaiwala-cup-bird.png',
        '/design/chaiwala-cup-peacock.png',
        '/design/chaiwala-cup-tiger.png',
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
      key: 'fine-art',
      title: 'Fine Art',
      description: 'Placeholder description for the Fine Art work.',
      icon: '',
      media: [],
      intro: '',
      credits: [],
    },
  ],
};

export default DESIGN;
