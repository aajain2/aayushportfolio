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
//   video  — optional silent clip in a card below every other row; it only
//            loads and plays once scrolled into view.
//   sheets — optional flat artwork (posters, menus) shown uncropped at its
//            own aspect ratio, in a row below the gallery.
//   flash  — optional images for a single card below the sheets that cuts
//            between them every 700ms (Porto Rocha's cadence).
//   embed  — optional URL of a live page, shown in a card directly below the
//            descriptor so visitors can use the real thing on the page.
//   rows   — optional free-form rows, below the closer. A row is either a
//            list of cards or { ratio, alignHeights, items: [...] }; a card is
//            { image }, { flash: [...] } or { heading, text } for a
//            descriptor. alignHeights sizes the columns from each card's
//            ratio so the row bottoms out level without cropping anything.
//   midRows — the same, but placed between the video and the closer.
//   closer — optional images forming the last row, under the video. They sit
//            side by side in equal columns at their own aspect ratios, so
//            nothing is cropped.
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
      video: '/design/arcade-reel.mp4',
      closer: [
        '/design/arcade-gallery.jpg',
        '/design/arcade-prompt.svg',
        '/design/arcade-card.svg',
      ],
      // Sits between the reel and the closer: the waitlist flow cycling on
      // the left, a note in the middle, and the campaign frame on the right.
      midRows: [
        {
          alignHeights: true,
          items: [
            {
              ratio: '1280 / 834',
              flash: [
                '/design/arcade-waitlist-01.jpg',  // empty
                '/design/arcade-waitlist-02.jpg',  // filled in
                '/design/arcade-waitlist-03.jpg',  // submitted
              ],
            },
            {
              ratio: '1 / 1',
              heading: 'Waitlist',
              text: 'Placeholder description for the Arcade waitlist work.',
            },
            { image: '/design/arcade-pov.jpg', ratio: '1000 / 1088' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-ig-edit.svg', ratio: '1080 / 1350' },
            { image: '/design/arcade-ig-ring.svg', ratio: '1080 / 1350' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-ig-bucket.svg', ratio: '1209 / 1512' },
            { image: '/design/arcade-ig-dream.svg', ratio: '1080 / 1350' },
          ],
        },
      ],
      // Free-form rows below the closer. Each row is a list of cells sitting
      // side by side at a shared height; a cell is one image, or a set of
      // frames that flash between each other.
      rows: [
        // Each cell keeps its own shape, and alignHeights widens the columns in
        // proportion so the two still bottom out together.
        {
          alignHeights: true,
          items: [
            {
              ratio: '1020 / 645',
              // Ordered by the flow through the product, not by export number:
              // pick a category, drill in, prompt, add an image, size, colour,
              // results, then back to the picker over a filled library.
              flash: [
                '/design/arcade-ui-01.jpg',  // category: top level
                '/design/arcade-ui-02.jpg',  // category: Home
                '/design/arcade-ui-03.jpg',  // category: Furniture
                '/design/arcade-ui-04.jpg',  // prompt: design a rug
                '/design/arcade-ui-07.jpg',  // prompt: drop an image
                '/design/arcade-ui-08.jpg',  // prompt: size
                '/design/arcade-ui-09.jpg',  // prompt: colour
                '/design/arcade-ui-10.jpg',  // results
                '/design/arcade-ui-05.jpg',  // picker over a filled library
                '/design/arcade-ui-06.jpg',  // ...drilled to Furniture
              ],
            },
            { image: '/design/arcade-composer.jpg', ratio: '1020 / 1307' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-interface.svg', ratio: '862 / 888' },
            { image: '/design/arcade-cards.svg', ratio: '840 / 840' },
          ],
        },
        {
          alignHeights: true,
          items: [
            {
              ratio: '1020 / 663',
              flash: [
                '/design/arcade-furnish-01.jpg', '/design/arcade-furnish-02.jpg',
                '/design/arcade-furnish-03.jpg', '/design/arcade-furnish-04.jpg',
                '/design/arcade-furnish-05.jpg', '/design/arcade-furnish-06.jpg',
                '/design/arcade-furnish-07.jpg', '/design/arcade-furnish-08.jpg',
                '/design/arcade-furnish-09.jpg',
              ],
            },
            { image: '/design/arcade-inter.jpg', ratio: '820 / 929' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-overlay-a.jpg', ratio: '518 / 367' },
            { image: '/design/arcade-overlay-b.jpg', ratio: '1 / 1' },
          ],
        },
        // Prompt to product: the create screen, a note, then the results grid.
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-pillow-create.jpg', ratio: '1020 / 663' },
            {
              ratio: '1 / 1',
              heading: 'Pillows',
              text: 'Placeholder description for the Arcade pillow work.',
            },
            { image: '/design/arcade-pillow-results.jpg', ratio: '1020 / 663' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-ring-picker.svg', ratio: '1000 / 1088' },
            { image: '/design/arcade-mirror.svg', ratio: '1000 / 1088' },
            { image: '/design/arcade-cuff-card.svg', ratio: '1000 / 979' },
          ],
        },
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'chaiwala',
      title: 'CHAIWALA',
      description: 'Placeholder description for the CHAIWALA work.',
      icon: '/design/chaiwala-icon.png',
      // The event photographs, cycling on top; the same set closes the page.
      media: [
        '/design/chaiwala-party-01.jpg',
        '/design/chaiwala-party-02.jpg',
        '/design/chaiwala-party-03.jpg',
        '/design/chaiwala-party-04.jpg',
        '/design/chaiwala-party-05.jpg',
        '/design/chaiwala-party-06.jpg',
        '/design/chaiwala-party-07.jpg',
        '/design/chaiwala-party-08.jpg',
        '/design/chaiwala-party-09.jpg',
        '/design/chaiwala-party-10.jpg',
        '/design/chaiwala-party-11.jpg',
        '/design/chaiwala-party-12.jpg',
        '/design/chaiwala-party-13.jpg',
        '/design/chaiwala-party-14.jpg',
        '/design/chaiwala-party-15.jpg',
        '/design/chaiwala-party-16.jpg',
        '/design/chaiwala-party-17.jpg',
        '/design/chaiwala-party-18.jpg',
        '/design/chaiwala-party-19.jpg',
        '/design/chaiwala-party-20.jpg',
        '/design/chaiwala-party-21.jpg',
        '/design/chaiwala-party-22.jpg',
        '/design/chaiwala-party-23.jpg',
        '/design/chaiwala-party-24.jpg',
        '/design/chaiwala-party-25.jpg',
        '/design/chaiwala-party-26.jpg',
        '/design/chaiwala-party-27.jpg',
        '/design/chaiwala-party-28.jpg',
        '/design/chaiwala-party-29.jpg',
        '/design/chaiwala-party-30.jpg',
        '/design/chaiwala-party-31.jpg',
        '/design/chaiwala-party-32.jpg',
        '/design/chaiwala-party-33.jpg',
        '/design/chaiwala-party-34.jpg',
        '/design/chaiwala-party-35.jpg',
        '/design/chaiwala-party-36.jpg',
        '/design/chaiwala-party-37.jpg',
        '/design/chaiwala-party-38.jpg',
      ],
      // Everything below the menu sheets is built from `rows` instead.
      gallery: [],
      // Printed pieces — shown whole (never cropped) in a row below the gallery.
      sheets: [
        '/design/chaiwala-poster.jpg',
        '/design/chaiwala-menu-print.jpg',
      ],
      rows: [
        // Story, feed and signage — each keeps its own shape, since the logo
        // carries its date and address hard against the square's edges and a
        // shared ratio would crop them off. alignHeights instead widens the
        // columns in proportion, so they bottom out together uncropped.
        {
          alignHeights: true,
          items: [
            { image: '/design/chaiwala-story.jpg', ratio: '684 / 1215' },
            {
              ratio: '4 / 5',
              flash: [
                '/design/chaiwala-insta-01.jpg',
                '/design/chaiwala-insta-02.jpg',
                '/design/chaiwala-insta-03.jpg',
                '/design/chaiwala-insta-04.jpg',
                '/design/chaiwala-insta-05.jpg',
                '/design/chaiwala-insta-06.jpg',
                '/design/chaiwala-insta-07.jpg',
                '/design/chaiwala-insta-08.jpg',
                '/design/chaiwala-insta-09.jpg',
                '/design/chaiwala-insta-10.jpg',
                '/design/chaiwala-insta-11.jpg',
                '/design/chaiwala-insta-12.jpg',
              ],
            },
            { image: '/design/chaiwala-mayfield.jpg', ratio: '1 / 1' },
          ],
        },
        // The two shots that used to sit in the gallery, now under the menus.
        [
          { image: '/design/chaiwala-table.jpeg' },
          { image: '/design/chaiwala-cups.jpeg' },
        ],
        // The cookbook, page by page, beside a note on it.
        {
          ratio: '1 / 1',
          items: [
            {
              flash: [
                '/design/chaiwala-cookbook-01.jpg',
                '/design/chaiwala-cookbook-02.jpg',
                '/design/chaiwala-cookbook-03.jpg',
                '/design/chaiwala-cookbook-04.jpg',
                '/design/chaiwala-cookbook-05.jpg',
                '/design/chaiwala-cookbook-06.jpg',
                '/design/chaiwala-cookbook-07.jpg',
                '/design/chaiwala-cookbook-08.jpg',
                '/design/chaiwala-cookbook-09.jpg',
                '/design/chaiwala-cookbook-10.jpg',
                '/design/chaiwala-cookbook-11.jpg',
                '/design/chaiwala-cookbook-12.jpg',
                '/design/chaiwala-cookbook-13.jpg',
                '/design/chaiwala-cookbook-14.jpg',
                '/design/chaiwala-cookbook-15.jpg',
                '/design/chaiwala-cookbook-16.jpg',
              ],
            },
            {
              heading: 'Cookbook',
              text: 'Placeholder description for the CHAIWALA cookbook.',
            },
          ],
        },
      ],
      flash: [
        '/design/chaiwala-cup-bird.jpg',
        '/design/chaiwala-cup-peacock.jpg',
        '/design/chaiwala-cup-tiger.jpg',
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'circle',
      title: 'Circle',
      description: 'Placeholder description for the Circle work.',
      icon: '/design/circle-icon.jpg',
      media: ['/design/circle-hero.svg'],
      // Nothing below the embed — the live page is the gallery.
      gallery: [],
      // The live product, running inside the page below the descriptor.
      embed: 'https://posts-bottom-97550920.figma.site/',
      // The deck, two slides per row under the embed.
      sheets: [
        '/design/circle-slide-01.jpg',
        '/design/circle-slide-02.jpg',
        '/design/circle-slide-03.jpg',
        '/design/circle-slide-04.jpg',
        '/design/circle-slide-05.jpg',
        '/design/circle-slide-06.jpg',
        '/design/circle-slide-07.jpg',
        '/design/circle-slide-08.jpg',
        '/design/circle-slide-09.jpg',
        '/design/circle-slide-10.jpg',
        '/design/circle-slide-11.jpg',
        '/design/circle-slide-12.jpg',
        '/design/circle-slide-13.jpg',
        '/design/circle-slide-14.jpg',
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
