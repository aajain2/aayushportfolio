// ============================================
// DESIGN & BRAND PAGE — Edit all copy, icons and media here
// ============================================
//
// Each project below becomes one card in the left-hand stack.
//   icon   — path to a square icon (e.g. '/design/arcade-icon.jpg'). Leave ''
//            and a monogram placeholder is drawn instead.
//   heroRatio — optional aspect for the hero card, when the artwork is shaped
//            very differently from the default and cover would crop it.
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
//            descriptor. text accepts a string or an array of strings and
//            { text, url } links. alignHeights sizes the columns from each card's
//            ratio so the row bottoms out level without cropping anything.
//   midRows — the same, but placed between the video and the closer.
//   textAtEnd — move the descriptor below every row instead of under the hero.
//   hideText — drop the descriptor block entirely.
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
    // The closing "Learn more" is a link inside the copy; it lightens on hover
    // and goes where the Back button goes.
    text: 'Aayush Jain is a creative technologist working across mediums. '
        + 'Select brand and design work, credits to Porto Rocha presentation format. ',
    linkLabel: 'Learn more',
    url: '/#content',
  },

  // --- Projects ---
  projects: [
    {
      key: 'arcade',
      overview: "Arcade is the first AI physical product creation platform and marketplace, inviting people to “turn your thoughts into things.” I led design across product, brand, campaigns, and events to make that unfamiliar possibility approachable. The work connects AI with the warmth of handmade goods, helping shoppers discover their taste and giving artists new ways to bring theirs into the world.",
      caseStudy: [
        "Arcade is the first AI physical product creation platform and marketplace, built around a simple invitation: “turn your thoughts into things.” An idea can become a piece of jewelry, an object for the home, or a product someone else discovers and buys. Its ambition is to shape and lead this emerging category, defining how people move between imagination, creation, and commerce.",
        "For the consumer audience we wanted to reach, the possibility itself was unfamiliar. These were mass-affluent, design-conscious shoppers, accustomed to collecting inspiration on Pinterest and finding distinctive objects on Etsy. They valued originality, craftsmanship, and the people behind a product. Arcade brought AI into that world of handmade goods, giving shoppers a way to participate in what they purchased. But many had little experience with the technology. Before they could decide what to create, they needed to understand that creating was an option at all.",
        "Our enterprise audience shared that attention to taste, with different responsibilities attached to it. Interior design studios were working toward a particular vision. Established artists could use models trained on their own work. Trusts and heritage studios had bodies of intellectual property to steward, while merchandising teams at large retailers brought their own commercial and creative requirements. These audiences already had expertise. Arcade needed to give them new ways to apply it, with their creative identity at the center of the experience.",
        "That relationship mattered because AI could be a difficult introduction. Artists in our audience were often skeptical of a technology they associated with replacing creative work. For many, Arcade would be their first experience using it. We wanted to work with artists and give their ideas more places to go. The brand had to make that intention tangible: through the people it featured, the work it celebrated, and the care it gave to the finished object.",
        "I led design across the product, brand, campaigns, and events, building on an established typeface and color palette. Warmth, texture, and a slightly retro character gave the visual language a human feel. Tactile surfaces, material detail, and familiar domestic settings connected the experience to the craft behind the handmade products. For an upmarket audience, those choices also expressed the quality and individuality they were looking for. Humanizing AI meant making the artist, the maker, and the object central to the story.",
        "My latest exploration uses cyanotype-inspired imagery to connect imagination with physical form. Soft silhouettes suggest ideas taking shape; grain and paper-like textures echo the handmade objects behind the platform. The direction gives Arcade’s varied products a shared visual language rooted in craft, reinforcing the role of artists and makers in its future.",
        "The product carried that approach into the act of creating. The challenge was helping people discover what they wanted to make, and making the route from an idea to a physical object feel approachable. A room to decorate, a gift to personalize, or an existing design to adapt gave people a reason to begin. References and suggestions offered enough direction to take the next step, while leaving room for their own preferences to develop.",
        "Arcade also had to welcome people who simply wanted to discover something they loved. A smaller community of artists, designers, and tastemakers created; a much larger audience followed, collected, and shopped. Featuring those creators gave the marketplace a point of view and shoppers a trusted place to start. Their work showed what was possible, and their existing audiences brought new people into the experience. The marketplace could grow through that exchange: creators brought ideas and followers; shoppers brought attention and demand for their work."
],
      title: 'Arcade',
      description: 'Product, brand, and event design at the AI physical product creation platform',
      icon: '/design/arcade-icon.jpeg',
      media: ['/design/arcade-kravet.svg'],
      // A tall page shot that slowly scrolls inside its card. When set, this
      // replaces the gallery tiles for the project.
      scroller: '/design/arcade-careers-page.jpg',
      gallery: ['/design/arcade-cyanotype.jpg'],
      video: '/design/arcade-reel.mp4',
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
              heading: 'New York Consumer Launch',
              text: "The guest list was part of the design. We brought journalists, artists, creatives, and interior designers together because this audience discovers new possibilities through people whose taste they trust. Guests submitted prompts beforehand and encountered their finished custom pieces at dinner, connecting an unfamiliar technology to something they could hold. Seeing one another's creations gave the conversation concrete starting points; afterward, guests wrote new prompts. The sequence was designed to let personal experience establish credibility and shared inspiration give people a reason to create again.",
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
        // Was the closer row; a row so the last cell can carry a note.
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-gallery.jpg', ratio: '2048 / 1194' },
            { image: '/design/arcade-prompt.svg', ratio: '840 / 840' },
            {
              ratio: '640 / 920',
              heading: 'Holiday Campaign',
              text: "A gift gives an open-ended tool a specific purpose: making something feel personal to someone. We used /dream and /edit to show two accessible starting points, pairing prompts with finished products so people could understand what to ask for and what a change could do. Alongside those demonstrations, intimate scenes of jewelry, fabric, and table settings helped shoppers imagine the recipient's experience. Instruction made the process approachable; attention to materials and craft gave the result the care expected of a meaningful gift.",
            },
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
              heading: 'Composer',
              text: "Recognizing a preference is often easier than describing it from scratch. Through research and iteration, we gave shoppers reference photos, suggested styles, and existing designs to respond to, then paired an AI conversation with a scrollable grid of possibilities. Keeping alternatives visible let people compare and discover what they wanted to change, giving the next instruction a concrete reference. Price, dimensions, and materials connected that exploration to something they could actually buy. The interaction treated taste as something people develop through choices, with each result helping them make the next one.",
            },
            { image: '/design/arcade-pillow-results.jpg', ratio: '1020 / 663' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/arcade-ring-picker.svg', ratio: '1000 / 1088' },
            { image: '/design/arcade-cuff-card.svg', ratio: '1000 / 979' },
          ],
        },
        // Closing line, full width.
        [
          { image: '/design/arcade-color.jpg', ratio: '1440 / 840' },
        ],
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'chaiwala',
      overview: "CHAIWALA is a South Asian teahouse pop-up that I built at Stanford with support from dorm funds. We set out to create a “matcha moment” for South Asian drinks and a third space where people from across campus could meet and have serendipitous conversations. I led all branding and design, bringing cultural character into the visual identity and an intimate sense of hospitality into the physical experience.",
      caseStudy: [
        "CHAIWALA began with two ambitions: create a “matcha moment” for South Asian drinks and establish a third space for serendipitous conversation on campus. With support from Stanford dorm funds, we launched a pop-up that could introduce people to the drinks while giving them a welcoming place to spend an evening. Our ambition was to build an experience that could eventually travel beyond Stanford.",
        "I led all branding and design, including the identity, cups, menus, cookbooks, and physical space. My early explorations approached premium through bold black typography, restrained layouts, and controlled color. I tested plain wordmarks, stacked lettering, and an illustrated tea glass inside a postage-stamp frame. When I shared the work with the team, their reaction exposed its limitation: it looked polished but lacked feeling. The visual discipline was there; the character was missing.",
        "I turned to Indian street art, painted rickshaws, and traditional Mughal paintings, looking for ways to make cultural expression central to the identity. The menu became the testing ground. Painterly flowers, birds, and foliage entered compositions that had previously relied on typography and empty space. They gave the page an atmosphere before anyone read the text, suggesting how illustration could shape the whole brand.",
        "That exploration developed into saturated orange, blue, and green, textured grounds, and expressive dark linework. Floral compositions framed the name; birds, a peacock, and a tiger gave the system recognizable figures. Our guiding idea was boldness in authenticity, with the premium quality coming through careful composition. Posters could be richly ornamental, while a cup focused on one animal at an oversized scale. Menus and cookbook pages retained spacious serif typography, giving detailed information room to breathe. Without access to textured, fibrous art paper, I used high-resolution printing to reproduce its visual texture, carrying the warmth of the illustrated identity into the reading experience with the materials available.",
        "The cups became a hit at the first pop-up. Guests said they had never seen anything like them, and the designs became conversation starters. I insisted on edge-to-edge printing across the cup, rather than sleeves or a partial print, so the illustration felt integral to the object. Finding a vendor within our budget and timeline took persistence, but preserved the continuous design that revealed new details as the cup turned in someone's hand. Distinct colors gave the collection variety without losing recognition. Once guests left, the cups carried the identity across campus, becoming a way to reach people beyond the event itself.",
        "Other pieces supported discovery at different points in the visit. When the line stretched out the door, we passed cookbooks along the queue so guests could browse ingredients and stories while waiting. Copies also sat on tables, where people could learn more about what they were drinking. The menu at the counter focused on choosing and ordering. Separating those roles gave cultural context room to unfold without overloading the moment of decision.",
        "For the space, I was particular about real candles. Their warm, shifting light, together with flowers and considered table arrangements, created the intimate, slightly moody atmosphere I wanted. The layout and lighting were designed to make conversation feel comfortable and unhurried, giving people a reason to settle in after ordering.",
        "More than 300 people attended the first pop-up through word of mouth alone, with no email-list marketing. We sold out of all chai and pastries, and guests stayed well beyond our planned midnight closing. Having found it difficult to sustain attendance at Stanford events without alcohol, we saw those late conversations as an encouraging sign that the space was serving its purpose."
      ],
      title: 'CHAIWALA',
      // How the homepage roster lists it; the nav card keeps the caps lockup.
      listTitle: 'Chaiwala',
      description: 'Brand and experience design for my South Asian teahouse popup series',
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
        // The cookbook beside the full case study.
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
            { fullCaseStudy: true },
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
      overview: "FigBuild 2026 Hackathon winner built using Figma Make. Circle is a speculative tool that helps elementary school teachers see the social patterns shaping participation and belonging. We built it to connect classroom observations, peer relationships, and group assignments to help teachers notice who may be drifting and decide what to try next.",
      hideCaseStudyLogo: true,
      caseStudyHalfWidth: true,
      caseStudy: [
        "A child can be quiet, well behaved, and easy to overlook. In a busy classroom, the absence of disruption can conceal the absence of connection. Circle grew from that gap: how could we help a teacher notice the students who rarely draw attention to themselves, and create more opportunities for them to participate?",
        "We built Circle for FigBuild 2026, responding to a brief to imagine a tool that tracks, measures, or visualizes an overlooked aspect of human sensory experience. We focused on belonging in elementary school, where teachers navigate an entire network of relationships alongside everything they are there to teach. Our challenge was to make subtle social patterns legible enough to inform an everyday decision.",
        "We began with the relationship as a unit of understanding. A student might withdraw in one group and contribute freely in another. Looking at the child alone would miss that difference. We structured Circle around three connected views: the classroom, the individual, and the pair. A teacher can follow a broad concern into a specific relationship, seeing each student’s experience alongside the other’s. This distinction mattered because the same pairing can affect two children differently.",
        "That context needed somewhere useful to go. We made group assignments the central intervention because teachers already make them regularly, and each arrangement creates an opportunity to change who interacts. Teachers choose a group size and identify pairings to avoid, bringing their own knowledge into the process. We placed explanations alongside suggested groups so teachers could examine the reasoning and revise the arrangement. Class reports carry that thinking forward, connecting observations to possible next steps, from a different pairing to an individual check-in.",
        "We wanted the interface to make these patterns readable while keeping the children behind them present. Circular student markers carry across classroom, relationship, and grouping views, creating continuity as the teacher moves between scales. Names and initials anchor the diagrams in familiar people. Warm neutrals, restrained pastel accents, and serif headings give the analytical structure a softer tone, while clear utility labels support quick scanning. In our presentation, we introduced photographs of children before the system diagrams to establish the experience we were designing for.",
        "Building in Figma Make made precision an essential part of our process. A broad prompt could produce a plausible dashboard, but our concept depended on distinctions that a generic dashboard would flatten: an individual experience within a relationship, an explanation beside a recommendation, and a clear route from noticing to responding. We had to translate those intentions into increasingly specific direction about hierarchy, interaction, and visual restraint. The challenge was making the generated experience reflect our thinking consistently across the product.",
        "Circle also raised a question we are still exploring: what can observation actually tell us about belonging? We imagined future sensing capabilities, while recognizing that participation and interaction are only proxies for an internal experience. We are exploring parental consent, local processing, and ways to surface changing patterns without giving children permanent labels. Our prototype helped us articulate how this could fit into a teacher’s day. Next, we want to understand whether these signals support more thoughtful decisions, and how to make room for the context that only a teacher can bring.",
      ],
      title: 'Circle',
      description: 'FigBuild 2026 Hackathon winner built using Figma Make',
      icon: '/design/circle-icon.jpg',
      media: ['/design/circle-hero.svg'],
      // The live prototype and deck lead into the full case study.
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
      key: 'foresight',
      hideCaseStudyLogo: true,
      caseStudyHalfWidth: true,
      overview: "Foresight deploys AI agents to navigate product interfaces, test workflows, and surface failures before customers encounter them. We began with a broader vision for synthetic user simulation, then rebuilt around a need we heard more clearly: helping product teams keep testing at the pace they were shipping. Across product and brand, we focused on making autonomous work easy to direct, inspect, and act on.",
      caseStudy: [
        "Software was becoming faster to build than teams could confidently evaluate. We had experienced that gap ourselves: making product decisions with limited research capacity, then spending hours manually checking the flows we had just shipped. We built Foresight to bring feedback closer to the moment a team could still do something with it.",
        "Our initial vision centered on synthetic users: agents that could explore products and help teams anticipate how people might experience them. Customer conversations sharpened the opportunity. Teams wanted relief from repetitive testing, with results they could verify and use immediately. We rebuilt the system around agents that navigate live interfaces, click, scroll, and complete workflows. That shift gave the broader ambition a concrete starting point and changed what the product needed to communicate.",
        "We were designing for product managers, designers, and engineers whose responsibilities overlapped around a release. Smaller teams needed coverage without a dedicated testing function. Larger organizations faced coordination across environments, devices, and existing processes. Both needed to describe what mattered without becoming specialists in how an agent worked. Our entry points accommodated existing QA sheets, conversational instructions, and explicit steps, allowing different levels of detail around the same task. The aim was to preserve the team’s knowledge while reducing the work required to put it into motion.",
        "Once a test ran autonomously, the design problem became one of accountability. A successful result needed to be inspectable. We organized the experience into a summary, a step-by-step breakdown, and agent recordings, giving people progressively deeper ways to understand a run. The summary supports a quick assessment; individual steps expose what was tested and the expected outcome; recordings provide a way to examine the agent’s actual path. This structure lets a user investigate a surprising result without making every routine check equally demanding.",
        "The test history carries that context into the everyday workflow. Flow names lead each row, followed by the number of steps, device, environment, and result. A checkout test in staging and the same test in production may look similar, but they support different decisions. Keeping those conditions beside the outcome helps prevent a result from becoming detached from what it actually covers. Folders organized around checkout, onboarding, and navigation follow the way teams recognize their product, making repeated testing easier to manage.",
        "We also designed the handoff beyond the report. We built a Linear integration that carries failures and reproduction steps into the place where a team already coordinates fixes. Finding an issue is only part of the work; someone still needs enough context to investigate and resolve it. Connecting those stages shaped our ambition for Foresight as a continuous part of product development.",
        "The brand needed to make that technical capability feel clear and usable. We paired dark surfaces and a compact outlined mark with a vivid orange accent, giving Foresight a recognizable presence across the product, site, and pitch. Within the interface, the palette becomes quieter so status information can take priority. Rounded typography brings an approachable quality to the technical subject, while the marketing site grounds the promise in visible workflows: starting a test, inspecting steps, and replaying what happened. We wanted people to understand the work they could delegate before asking them to imagine the technology’s longer-term possibilities.",
        "That longer-term vision raised a distinction we continued to think through. Completing a workflow demonstrates something different from representing a customer. An agent can establish whether a path works without establishing how a particular person would interpret it. Our enterprise direction explored how customer data and internal knowledge could make simulations more specific. It also made clear that greater specificity would require validation against the people being represented, and a way for customers to understand the limits of each result.",
        "Early pilots converted into paying customers after we narrowed the product around repetitive testing. Building Foresight taught us how much of an AI product’s value depends on the relationship between what it does, what it shows, and what a customer can responsibly conclude. Our broader ambition remained, but we had found a practical foundation: useful work, visible evidence, and a clear next action.",
      ],
      title: 'Foresight',
      description: 'Brand, design, and story for my agentic human simulation company',
      icon: '/design/foresight-icon.svg',
      media: ['/design/foresight-hero.svg'],
      // The wordmark is the hero only — no tiles repeating it below.
      gallery: [],
      rows: [
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-testing.svg', ratio: '1255 / 588' },
            { image: '/design/foresight-mark.svg', ratio: '1 / 1' },
          ],
        },
        // The deck, two slides per row.
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-01.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-02.jpg', ratio: '16 / 9' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-03.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-04.jpg', ratio: '16 / 9' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-05.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-06.jpg', ratio: '16 / 9' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-07.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-08.jpg', ratio: '16 / 9' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-09.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-10.jpg', ratio: '16 / 9' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/foresight-deck-11.jpg', ratio: '16 / 9' },
            { image: '/design/foresight-deck-12.jpg', ratio: '16 / 9' },
          ],
        },
        {
          items: [
            { image: '/design/foresight-site.svg', ratio: '1512 / 3663' },
          ],
        },
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'photography',
      overview: 'I direct and photograph shoots for friends, including graduation portraits at Stanford and an art capstone in the studio. This selection moves between posed portraits and photographs of people at work, with an emphasis on warm light, rich color, and the setting around each person.',
      title: 'Photos',
      description: 'Creative direction and photography for my friends’ shoots',
      icon: '/design/photography-icon.jpg',
      // Every landscape frame in the set, cycling on top.
      media: [
        '/design/photo-grad-03.jpg',
        '/design/photo-grad-06.jpg',
        '/design/photo-grad-07.jpg',
        '/design/photo-grad-11.jpg',
        '/design/photo-art-01.jpg',
        '/design/photo-art-02.jpg',
        '/design/photo-art-06.jpg',
        '/design/photo-art-07.jpg',
        '/design/photo-art-08.jpg',
      ],
      gallery: [],
      rows: [
        // --- Graduation ---
        { alignHeights: true, items: [
            { image: '/design/photo-grad-03.jpg', ratio: '3 / 2' },
            { image: '/design/photo-grad-04.jpg', ratio: '2 / 3' },
        ] },
        {
          ratio: '2 / 3',
          items: [
            { heading: 'Graduation', text: 'For my friends’ graduation portraits at Stanford, I treated the setting, pose, and light as parts of a single composition. I used the verticals of trees and architecture to frame the body, then changed the camera height to alter the relationship between the person and their surroundings. In the overhead portrait, the painted face and the sitter’s face create two points of attention across a diagonal; in the tighter architectural portraits, a dark window gives the face a quieter backdrop. Deep shadow lets parts of the scene recede, concentrating attention on an expression or gesture. I wanted the images to feel carefully composed while leaving room for the ease and personality of photographing friends.' },
            { image: '/design/photo-grad-02.jpg', ratio: '2 / 3', zoom: 1.16, zoomOrigin: '25% 50%' },
            { image: '/design/photo-grad-01.jpg', ratio: '2 / 3' },
          ],
        },
        { ratio: '2 / 3', items: [
            { image: '/design/photo-grad-05.jpg', ratio: '2 / 3' },
            { image: '/design/photo-grad-08.jpg', ratio: '2 / 3' },
            { image: '/design/photo-grad-09.jpg', ratio: '2 / 3' },
        ] },
        [
          { image: '/design/photo-grad-06.jpg', ratio: '3 / 2' },
        ],
        { ratio: '2 / 3', items: [
            { image: '/design/photo-grad-10.jpg', ratio: '2 / 3' },
            { image: '/design/photo-grad-12.jpg', ratio: '2 / 3' },
            { image: '/design/photo-grad-13.jpg', ratio: '2 / 3' },
        ] },
        { ratio: '3 / 2', items: [
            { image: '/design/photo-grad-07.jpg', ratio: '3 / 2' },
            { image: '/design/photo-grad-11.jpg', ratio: '3 / 2' },
        ] },

        // --- Kosi's art capstone ---
        {
          ratio: '2 / 3',
          items: [
            {
              heading: 'Art Capstone',
              text: [
                'For my friend ',
                { text: 'Kosi', url: 'https://fromkosi.com' },
                '’s art capstone, the compositional challenge was giving the artist a clear presence within a room already dense with color, pattern, and competing focal points. I used darker figures to hold attention against the paintings, balancing their silhouettes with larger areas of saturated color. Shooting obliquely along the walls lets the canvases overlap and recede, while objects near the camera establish depth and lead the eye into the room. In the wider frames, the spacing between people, easels, and paintings matters as much as any individual subject. I wanted the photographs to retain the studio’s density while giving the eye a deliberate route through it, with the artist and the work holding attention together.',
              ],
            },
            { image: '/design/photo-art-03.jpg', ratio: '2 / 3' },
          ],
        },
        { ratio: '3 / 2', items: [
            { image: '/design/photo-art-01.jpg', ratio: '3 / 2' },
            { image: '/design/photo-art-02.jpg', ratio: '3 / 2' },
        ] },
        { ratio: '2 / 3', items: [
            { image: '/design/photo-art-05.jpg', ratio: '2 / 3' },
            { image: '/design/photo-art-09.jpg', ratio: '2 / 3' },
        ] },
        [
          { image: '/design/photo-art-06.jpg', ratio: '3 / 2' },
        ],
        { ratio: '3 / 2', items: [
            { image: '/design/photo-art-07.jpg', ratio: '3 / 2' },
            { image: '/design/photo-art-08.jpg', ratio: '3 / 2' },
        ] },
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'fine-art',
      overview: "Work across charcoal, printmaking, installations, ceramics, and Indian spice powders. Exhibited at Pratt Manhattan Gallery, Memphis International Airport, Brooks Museum of Art, among others. Sold to Gus's Fried Chicken.",
      title: 'Fine Art',
      description: 'Exhibited at Pratt, Memphis Airport, sold to Gus’s Fried Chicken',
      icon: '/design/fine-art-icon.jpg',
      media: ['/design/fine-art-hero.jpg'],
      gallery: [],
      // A gallery, not a case study — the work carries the page.
      rows: [
        // Three faces staring out — the charcoal-and-red language, stated once
        // at full width before anything else.
        [
          { image: '/design/fine-art-egotism.jpg', ratio: '4698 / 2925' },
        ],
        // Twin portraits: same scale, same palette, the same held moment.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-masked.jpg', ratio: '2549 / 3389' },
            { image: '/design/fine-art-snatched.jpg', ratio: '2755 / 3629' },
          ],
        },
        // The narrative pair — a figure and a group, both interrupted by colour.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-burden.jpg', ratio: '3150 / 3952' },
            { image: '/design/fine-art-peer-pressure.jpg', ratio: '3214 / 2330' },
          ],
        },
        // Pair the mixed-media portraits at equal height, preserving both works.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-herself-a-stranger-within.jpg', ratio: '3128 / 2398' },
            { image: '/design/fine-art-emergence.jpg', ratio: '1554 / 2562' },
          ],
        },
        // The print chapter. Flux is one work whose two panels belong to each
        // other, so it stays a single card — splitting it put a gap and two
        // rounded edges through the middle of the piece.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-flux.jpg', ratio: '691 / 500' },
            { image: '/design/fine-art-drenched.jpg', ratio: '672 / 500' },
          ],
        },
        // Two verticals that leave charcoal behind: ornament and sepia.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-prayer-for-hunger.jpg', ratio: '3226 / 4188' },
            { image: '/design/fine-art-throw-me-back.jpg', ratio: '3085 / 4327' },
          ],
        },
        // Off the wall and into the room. Each piece is shown whole, then
        // close enough to see how it is made.
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-ceramics.jpg', ratio: '1454 / 1588' },
            { image: '/design/fine-art-ceramics-detail.jpg', ratio: '1692 / 1269' },
          ],
        },
        {
          alignHeights: true,
          items: [
            { image: '/design/fine-art-work.jpg', ratio: '2852 / 3062' },
            { image: '/design/fine-art-work-detail.jpg', ratio: '1052 / 1363' },
          ],
        },
      ],
      intro: '',
      credits: [],
    },
    {
      key: 'stanford-dorm-room',
      overview: 'Our dorm originally had two twin beds on opposite sides, each with a desk and dresser. We bunked the beds, took apart one dresser to make a coffee table, grouped the desks on one side, and added a sofa. Consolidating the sleeping and study areas freed up space for a living room where we could comfortably host many more people.',
      title: 'Dorm',
      description: 'Turning my college dorm into an inviting hosting space',
      icon: '/design/dorm-icon.jpg',
      // The one wide frame in the set opens the page on its own; the four
      // portraits pair off below, living area first, then the work corners.
      media: ['/design/dorm-01.jpg'],
      gallery: [],
      rows: [
        [
          { image: '/design/dorm-02.jpg', ratio: '3 / 4' },
          { image: '/design/dorm-03.jpg', ratio: '3 / 4' },
        ],
        // A portrait beside a landscape, so alignHeights sizes the columns
        // from their ratios and the pair still bottoms out level.
        {
          alignHeights: true,
          items: [
            { image: '/design/dorm-06.jpg', ratio: '3 / 4' },
            { image: '/design/dorm-07.jpg', ratio: '3 / 2' },
          ],
        },
      ],
      intro: '',
      credits: [],
    },
  ],
};

export default DESIGN;
