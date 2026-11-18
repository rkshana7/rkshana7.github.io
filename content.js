/* ==================================================================
   CONTENT FILE: EDIT THIS TO UPDATE YOUR WEBSITE
   ==================================================================
   index.html only DRAWS what is written here. You never need to touch
   index.html to change words, papers, photos or links.

   ---- THE 6 RULES (most mistakes come from breaking one of these) ----
   1. Text goes inside straight double quotes:   "like this"
   2. A text value must stay on ONE line. Never press Enter inside quotes.
   3. Every item in a list [ ... ] ends with a comma. Items are written
      inside curly braces { ... }. The last comma is optional.
   4. To show a double quote inside text, use curly quotes “ ” instead.
   5. Lines starting with // are remarks (ignored by the website).
      Put // AFTER the comma at the end of a line, never inside quotes.
   6. Empty "" or [] means "hide this". The section simply disappears.

   ---- HOW TO UPDATE THE LIVE SITE ----
   Open this file on GitHub -> pencil icon -> edit -> "Commit changes".
   Wait about 1 minute, then hard refresh the site (Ctrl+Shift+R).

   ---- QUICK MAP: "I want to change..." -> "edit this" ----
   My name / title under it ............ name, position, affiliation
   The sentence in the top banner ....... statement
   Profile photo ........................ photo, photoPosition
   CV download button ................... cvLink
   Social/profile buttons ............... links
   Big highlight cards at top ........... highlights
   About paragraphs ..................... about
   Jobs / degrees timeline .............. experience, education
   Courses, workshops, short projects ... training
   Research interests (chips) ........... interests
   Project cards ........................ projects
   Gallery images ....................... gallery (and showSchematics)
   Papers and patents ................... publications (and boldAuthor)
   Skills / languages ................... skills, languages
   Awards ............................... achievements
   Sentence in the Connect section ...... connectText
   "Last updated" in the footer ......... lastUpdated

   ---- BEFORE YOU COMMIT: 30-SECOND CHECK ----
   - showEmptyHints is false
   - Every claim is true and official (nothing in proposal stage)
   - Image / PDF file names match the uploaded files exactly
   - lastUpdated shows the current month
   ================================================================== */

const SITE = {

  /* ---------- Turn this off before you publish ---------- */
  // true  = dashed "add me" boxes appear where data is missing (useful while editing on your computer)
  // false = those boxes are hidden (ALWAYS use false on the live site)
  showEmptyHints: false,

  /* ---------- Basic info (the top banner) ---------- */
  // name          : big heading, footer, and the photo's alt text
  // pageTitle     : text shown in the browser tab and in Google results
  // eyebrow       : small capital line above your name
  // position + affiliation : joined with a dot into the line under your name.
  //                 Use " | " inside affiliation to separate two institutions.
  //   AFTER YOU MOVE TO SENDAI, e.g. affiliation: "Visiting Fellow, Tohoku University, Sendai, Japan | PhD Scholar, NIT Calicut, India"
  // statement     : ONE sentence/paragraph beside the amber bar (keep it as one string)
  // email         : shows as an email link in the banner and the Connect button
  // location      : the globe line. Update after you move, e.g. "Sendai, Japan"
  // photo         : file name of your picture, uploaded next to index.html. "" hides it.
  //                 File name is case-sensitive (photo.jpg is not Photo.JPG).
  // photoPosition : how the picture is cropped in the circle: "center", "center top", "center 20%"
  // cvLink        : "cv.pdf" if you upload cv.pdf next to index.html, or a full https:// link. "" hides the button.
  name: "Rajkumar Shanajaoba Singh",
  pageTitle: "Rajkumar Shanajaoba Singh | Phase Change Memory Researcher",
  eyebrow: "Materials Science · Device Physics",
  position: "PhD Scholar",
  affiliation: "NIT Calicut, India | Incoming visiting fellow at Tohoku University, Sendai, Japan",   // EDIT after you move
  statement: "I study how materials remember and sense. My work on phase change memory spans chalcogenide materials, device fabrication and electrical measurements, aiming for fast, energy-efficient, drift-resilient multi-level devices that act as stable analog synapses for neuromorphic computing.",

  email: "rajkumar_p240165mt@nitc.ac.in",
  location: "Kozhikode, India (moving to Sendai, Japan)",   // EDIT after you move, e.g. "Sendai, Japan"
  photo: "photo.jpg",                        // EDIT: your profile photo file, e.g. "photo.jpg" (upload it next to index.html)
  photoPosition: "center",          // EDIT if your face is cropped: "center top", "center 20%", ...
  cvLink: "",                       // EDIT: link to your CV (PDF in this folder, e.g. "cv.pdf", or a Drive link)

  // links: profile buttons shown in About and Connect. A link with url "" is hidden.
  // To add one more, copy a line, e.g.  { label: "GitHub", url: "https://github.com/rkshana7" },
  links: [                          // empty ones are hidden
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=nrSxFHEAAAAJ&hl=en" },
    { label: "ORCID",          url: "https://orcid.org/0009-0005-7106-4700" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Rajkumar-Singh-20" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/rajkumar-shanajaoba-singh-81673912b/" },
    { label: "GitHub",         url: "" }
  ],

  /* ---------- Highlight: the big featured cards at the top ---------- */
  // Each card needs: tag (small caps line), title, text. "facts" (small chips) is optional.
  // Newest / most important FIRST. To remove a card, delete its whole { ... }, block.
  // To add a card, copy this template into the list (mind the comma after the previous card):
  //   {
  //     tag: "★ HIGHLIGHT · NAME OF EVENT · 2027",
  //     title: "One-line headline",
  //     text: "Two or three sentences with the facts.",
  //     facts: ["Small chip 1", "Small chip 2"]     // optional, delete this line if unused
  //   },
  // Only post things that are official (selected, approved, published).
  highlights: [
    {
      tag: "★ HIGHLIGHT · LOTUS-ASPIRE, INDIA–JAPAN · 2026",
      title: "Selected for the LOTUS-ASPIRE India–Japan exchange programme",
      text: "Our joint proposal was selected for funding under the Adopting Sustainable Partnerships for Innovation Research Ecosystem (ASPIRE) Exchange Type (LOTUS-ASPIRE) Programme, an India–Japan cooperative programme supported by the Japan Science and Technology Agency (JST). I have been invited to Tohoku University, Sendai, as a visiting fellowship candidate to work on scalable and reliable selector-only memory based on N- and Si-doped GeTe.",
      facts: ["Tohoku University · Prof. Yuta Saito's group", "Selector-only memory · N- and Si-doped GeTe", "Thin film deposition · SOM device fabrication", "Programme period 2026 – 2029", "Supported by JST"]
    },
    {
      tag: "★ HIGHLIGHT · IUAC, NEW DELHI · 2026",
      title: "Beam time approved at the Inter-University Accelerator Centre",
      text: "My proposal, “Towards the realization of a highly controllable multilevel Phase Change Memory device with low power density using ion implantation engineered Ge₄Sb₆Te₇”, was reviewed by IUAC's Accelerator Users Committee and approved for low-energy beam time.",
    }
  ],

  /* ---------- About (each string is one paragraph) ---------- */
  // Add a paragraph = add a new "..." line with a comma after it. Delete a line to remove it.
  // Remember to update these when your situation changes (e.g. after you reach Tohoku).
  about: [
    "My goal is to develop phase change memory that is fast, energy-efficient and reliable enough for neuromorphic computing. That means chalcogenide materials engineered for fast switching and drift-resilient, multi-level resistance states, so that a single device can act as a stable analog synapse.",
    "I am a PhD scholar in Materials Science at NIT Calicut, working on phase change memory materials and devices. My work follows the path from material to device: thin film fabrication, materials and device characterization of chalcogenides, and electrical measurements of how they switch.",
    "Before my PhD, I worked on an ISRO-RAC-S project on spinel-structured lithium-based soft ferrimagnets for satellite communication at NIT Manipur. I have also recently begun working on photodetectors.",
    "Next, I have been invited to Tohoku University, Sendai, as a LOTUS-ASPIRE visiting fellowship candidate, to develop scalable and reliable selector-only memory based on N- and Si-doped GeTe."
  ],

  /* ---------- Journey: newest first. Use now:true for the current entry ---------- */
  // Each entry: years, title, place, text (optional), now (optional).
  // now: true makes the dot amber. Only ONE entry per list should have it.
  // WHEN YOU START A NEW ROLE: copy the top block, paste it ABOVE, edit it, give it now: true,
  // then delete the now: true line (and the comma before it) from the older block.
  // Template:
  //   {
  //     years: "2027 – Present",
  //     title: "Visiting Researcher",
  //     place: "Tohoku University, Sendai, Japan",
  //     text: "One line on what you do.",           // optional
  //     now: true
  //   },
  experience: [
    {
      years: "2024 – Present",
      title: "PhD Scholar, Phase Change Memory Materials and Devices",
      place: "NIT Calicut, Kerala, India",
      text: "Thin film fabrication, and material and device characterization of chalcogenide phase change memory.",
      now: true
    },
    {
      years: "2022 – 2024",
      title: "Project Associate, ISRO-RAC-S Project",
      place: "Department of Physics, NIT Manipur, India",
      text: "Synthesis of spinel structured lithium-based soft ferrimagnets for application in satellite communication."
    },
    {
      years: "Apr – Jun 2018",
      title: "Intern",
      place: "NIT Manipur, India",
      text: "Study of segregation of flexible polymers in confinement."
    }
  ],
  education: [
    {
      years: "2024 – Present",
      title: "PhD, Materials Science",
      place: "National Institute of Technology Calicut",
      text: "Thin film fabrication and characterization.",
      now: true
    },
    {
      years: "2019 – 2021",
      title: "Master's in Physics",
      place: "North Eastern Regional Institute of Science and Technology (NERIST)"
    },
    {
      years: "2016 – 2019",
      title: "Bachelor's Degree",   // EDIT: e.g. "B.Sc. in Physics"
      place: "St. Xavier's College, Mumbai"
    }
  ],

  /* ---------- Training: courses, workshops, short-term projects ---------- */
  // Each card: title (required); tag, org, date, text, image (all optional).
  // tag   = small amber label above the title, e.g. "Certificate", "Ongoing", "Attended"
  // org   = organiser / place        date = when
  // image = a certificate picture: upload it next to index.html, then  image: "certificate.jpg"
  // Template:
  //   {
  //     tag: "Workshop · Attended",
  //     title: "Name of the course",
  //     org: "Organiser, place",
  //     date: "1 – 5 June 2027",
  //     text: "One line (optional)."
  //   },
  // List only what you actually attended or are doing. Update the tag when status changes
  // (e.g. "Provisionally accepted" -> "Attended").
  // image: optional certificate picture (upload it next to index.html, then add image: "name.jpg"). tag, org, date, text are optional.
  training: [
    {
      tag: "Ongoing · Short-term project",
      title: "I-V switching studies on doped PCM materials and devices",
      org: "CeNSE, Indian Institute of Science (IISc), Bangalore",
      text: "Carrying out a short-term project on I-V switching in doped phase change memory materials and devices."
    },
    {
      tag: "School · Provisionally accepted",   // EDIT to "School · Attended" if you attended
      title: "School on Characterization of Materials Engineered by Ion Beams: Transport, Structure, and Spectroscopy",
      org: "Inter-University Accelerator Centre (IUAC), New Delhi",
      date: "12 – 15 May 2026"
    },
    {
      tag: "Certificate",
      title: "Semiconductor Training Program",
      org: "CeNSE, IISc, in association with Lam Research",
      text: "Organized by the Centre for Nano Science and Engineering (CeNSE), IISc, in collaboration with partner institutes. Supported by Lam Research and the India Semiconductor Mission, MeitY."
    },
    {
      tag: "Certificate of participation",
      title: "INUP-i2i Hands-on Training on Nanofabrication & Characterization Techniques",
      org: "Indian Nanoelectronics Users' Programme, CeNSE, IISc, Bangalore",
      date: "20 – 29 January 2025"
    },
    {
      tag: "GIAN course · Attended",
      title: "Chalcogenide based phase change memory for non-volatile data storage in physical/offline mode",
      org: "Department of Electronics & Instrumentation Engineering, NIT Silchar, Assam",
      date: "28 July – 1 August 2025",
      text: "One-week course under the Global Initiative of Academic Networks (GIAN)."
    }
  ],

  /* ---------- Research ---------- */
  // interests: short chips. Add or delete strings freely.
  // projects : cards. Each has title, type (small grey line, e.g. "Experimental · Early stage"), text.
  //            Keep status honest in "type": Upcoming / Early stage / Ongoing / Completed.
  //            Move a project from "Upcoming" to its real status when work actually starts.
  // Project template:
  //   {
  //     title: "Project name",
  //     type: "Experimental · Ongoing",
  //     text: "Two sentences on what is done."
  //   },
  interests: [
    "Phase change memory", "Selector-only memory", "Chalcogenide thin films", "Ion implantation engineering",
    "Multi-level resistive states", "Drift-resilient synaptic memory", "Neuromorphic hardware",
    "Materials & device characterization", "Resistive switching", "Photodetectors"
  ],

  projects: [
    {
      title: "Selector-Only Memory Based on N- and Si-Doped GeTe",
      type: "Upcoming · Tohoku University · LOTUS-ASPIRE",
      text: "Development of scalable and reliable selector-only memory: thin film deposition, process optimization, device fabrication and electrical characterization, hosted by Prof. Yuta Saito."
    },
    {
      title: "Phase Change Memory: From Material to Device",
      type: "Experimental · Chalcogenide thin films",
      text: "Thin film fabrication, materials characterization and electrical measurement of chalcogenide phase change memory devices."
    },
    {
      title: "Bipolar Resistive Switching in Al/In₂O₃:Ti/Al Memristors",
      type: "Experimental · Device analysis",
      text: "Detailed analysis of bipolar switching: I-V curves are digitized programmatically to pinpoint SET/RESET transitions and non-monotonic current behaviour."
    },
    {
      title: "Photodetector Characterization",
      type: "Experimental · Early stage",
      text: "Recently started: setting up time-resolved current-voltage measurements on a Keysight B2900X SMU to characterize photodetectors."
    }
  ],

  /* ---------- Gallery ---------- */
  // showSchematics: true shows the two animated schematics (phase change lattice and photoresponse).
  //                 These are drawings, not measurements. Set false to hide them once you have real figures.
  // gallery: your own images (TEM, I-V curves ...).
  //   1) Upload the image next to index.html (simple name, no spaces, under about 1 MB).
  //   2) Add one line below. src must match the file name exactly (capital letters count).
  //   3) Put a scale bar on TEM images and axis labels and units on I-V plots.
  //   Only show data you are free to share publicly.
  showSchematics: true,             // the two animated physics schematics; set false to hide them
  gallery: [
    // Put image files in the same folder as index.html, then add them here:
    // { src: "iv-curve.png", title: "I-V switching curve", caption: "Al/In2O3:Ti/Al device, bipolar sweep." },
  ],

  /* ---------- Publications ---------- */
  // Newest FIRST (paste new papers at the top of the list below).
  // status : "published" | "review" (under review) | "prep" (in preparation) | "patent"
  // title, authors, venue : plain text. Write subscripts as characters (Ge₂Sb₂Te₅), not as HTML.
  // doi    : a bare DOI ("10.1039/D5MA01008J") shows as "DOI: ..."; a full link ("https://...")
  //          shows as "Read the paper →". Use "" for no link (e.g. a patent).
  // boldAuthor : your name as it appears in author lists; it is shown in bold. Add other spellings if needed.
  // Template:
  //   {
  //     status: "published",
  //     title: "Paper title",
  //     authors: "A. Author, R. S. Singh, B. Author",
  //     venue: "Journal Name, Volume(Issue), pages (Year)",
  //     doi: "https://doi.org/10.xxxx/xxxxx"
  //   },
  // When a paper moves from "review" to published: change status and update venue and doi.
  // status: "published" | "review" | "prep"
  // Your name as written in the author lists below; it is shown in bold. Add other spellings if you use them.
  boldAuthor: ["R. S. Singh", "Rajkumar Shanajaoba Singh"],
  publications: [
    {
      status: "published",
      title: "Arsenic-engineered Ge₂Sb₂Te₅ films with enhanced thermal stability and data retention for non-volatile memory applications",
      authors: "N. K. Mubaris, R. Kemparaju, R. S. Singh, A. S. Rithwik, K. Ramesh, V. E. Madhavan",
      venue: "Journal of Materials Chemistry C (Communication), published 11 November 2026",
      doi: "https://doi.org/10.1039/D6TC03082C"
    },
    {
      status: "published",
      title: "Tailoring thermal stability and crystallization behavior in GeTe through arsenic incorporation for electronic memories",
      authors: "R. S. Singh, N. K. Mubaris, V. E. Madhavan",
      venue: "Materials Science in Semiconductor Processing, 217, 111130 (2027)",
      doi: "https://www.sciencedirect.com/science/article/pii/S1369800126007262"      // a bare DOI or a full web link both work
    },
    {
      status: "published",
      title: "Controlling the phase transition dynamics of GeTe by Sn substitution for phase change memory, photodetection and neuromorphic devices",
      authors: "M. N. K., R. S. Singh, P. Chinmay Kumar, R. Naik, V. E. Madhavan",
      venue: "Materials Advances, 7(2), 874–885 (2026)",
      doi: "https://doi.org/10.1039/D5MA01008J"
    },
    {
      status: "published",
      title: "Enhanced Piezoresistive Behavior in Flexible Ge–Sb–Te Thin Films for High-Performance Strain Sensing",
      authors: "A. S. Rithwik, N. K. Mubaris, R. S. Singh, M. Mudassir, C. N. S. Kumar, et al.",   // EDIT: full author list
      venue: "Journal of Alloys and Compounds, 190547 (2026)",
      doi: "https://www.sciencedirect.com/science/article/pii/S0925838826046165"
    },
    {
      status: "patent",
      title: "Flexible and Wearable Strain Sensor using Ge₂Sb₂Te₅ Thin Films",
      authors: "V. E. Madhavan, A. S. Rithwik, N. K. Mubaris, R. S. Singh (inventors)",
      venue: "Indian Patent No. 597814 · Application No. 202641004101 · filed 15 Jan 2026, granted 4 Aug 2026 · Patentee: NIT Calicut",
      doi: ""
    },
    {
      status: "published",
      title: "Studies of electrical and magnetic properties of Mn-, Zn- and Ti-substituted lithium ferrites",
      authors: "R. S. Singh, T. N. Singh, M. Maisnam, T. Gajjar, K. Parikh",
      venue: "Journal of Materials Science: Materials in Electronics, 35(18), 1272 (2024)",
      doi: "https://link.springer.com/article/10.1007/s10854-024-13033-1"
    },
    {
      status: "published",
      title: "Temperature-dependent response of electrical properties for Ti⁴⁺ doped Li0.35+y/2Zn0.1Mn0.1TiyFe2.35−3y/2O4 spinel ferrites",
      authors: "T. N. Singh, A. Hriishu, R. S. Singh, M. Maisnam",
      venue: "Journal of Materials Science: Materials in Electronics, 35(17), 1169 (2024)",
      doi: "https://link.springer.com/article/10.1007/s10854-024-12942-5"
    },
  ],

  /* ---------- Skills ---------- */
  // Each group: group (card title) and items (chips). A group with items: [] is hidden.
  // To add a new group, copy a line:  { group: "Programming", items: ["Python"] },
  // Only list skills you actually use.
  skills: [
    { group: "Fabrication & Characterization", items: ["Thin film fabrication", "Thin film characterization", "Device fabrication", "Chalcogenide materials characterization"] },
    { group: "Measurement", items: ["I-V characterization", "Keysight B2900X SMU", "Keysight EasyEXPERT"] },
    { group: "Programming", items: [] },            // EDIT: add the languages you use
    { group: "Analysis & Writing", items: [] }      // EDIT: e.g. Origin, LaTeX
  ],
  languages: ["English", "Hindi", "Manipuri"],

  /* ---------- Achievements, fellowships, awards ---------- */
  // Each: title (required), year (optional, "" to hide), note (optional small grey line).
  // Template:  { title: "Award name", year: "2027", note: "Awarding body" },
  achievements: [
    { title: "Selected for the LOTUS-ASPIRE India–Japan Exchange Programme", year: "2026", note: "Visiting fellowship at Tohoku University · supported by JST" },
    { title: "Beam time approved at IUAC, New Delhi", year: "2026", note: "Inter-University Accelerator Centre · Accelerator Users Committee" },
    { title: "GATE", year: "2022", note: "Graduate Aptitude Test in Engineering" },
    { title: "Ishan Uday Scholarship", year: "", note: "UGC scholarship for North Eastern Region students" }
  ],

  /* ---------- Connect section (last section) ---------- */
  // One sentence above the Email me button. The buttons come from email and links above.
  connectText: "Open to collaborations in phase change memory, chalcogenide thin films and neuromorphic devices. Reach out and let's talk.",

  /* ---------- Footer ---------- */
  // Change this month text every time you edit the site, e.g. "December 2026".
  lastUpdated: "October 2026"
};
