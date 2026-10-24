/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ------------------------------------------------------------
   - Everything visitors see comes from here. index.html only draws it.
   - Text goes inside "quotes". Keep the commas and brackets.
   - Anything left as "" (empty) or [] (empty list) is hidden from the site,
     unless showEmptyHints is true (then you see dashed "add me" boxes).
   - When you're finished editing, set showEmptyHints to false.
   - Careful: every item in a list needs a comma after it, and one
     "statement" must be ONE string in quotes (a stray second string breaks the page).
   ============================================================ */

const SITE = {

  /* ---------- Turn this off before you publish ---------- */
  showEmptyHints: false,

  /* ---------- Basic info ---------- */
  name: "Rajkumar Shanajaoba Singh",
  pageTitle: "Rajkumar Shanajaoba Singh | Phase Change Memory Researcher",
  eyebrow: "Materials Science · Device Physics",
  position: "PhD Scholar",
  affiliation: "NIT Calicut, India | Incoming visiting fellow at Tohoku University, Sendai, Japan",   // EDIT after you move
  statement: "I study how materials remember and sense. My work on phase change memory spans chalcogenide materials, device fabrication and electrical measurements, aiming for fast, energy-efficient, drift-resilient multi-level devices that act as stable analog synapses for neuromorphic computing.",

  email: "rajkumar_p240165mt@nitc.ac.in",
  location: "Kozhikode, India (moving to Sendai, Japan)",   // EDIT after you move, e.g. "Sendai, Japan"
  photo: "",                        // EDIT: your profile photo file, e.g. "photo.jpg" (upload it next to index.html)
  photoPosition: "center",          // EDIT if your face is cropped: "center top", "center 20%", ...
  cvLink: "",                       // EDIT: link to your CV (PDF in this folder, e.g. "cv.pdf", or a Drive link)

  links: [                          // empty ones are hidden
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=nrSxFHEAAAAJ&hl=en" },
    { label: "ORCID",          url: "https://orcid.org/0009-0005-7106-4700" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Rajkumar-Singh-20" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/rajkumar-shanajaoba-singh-81673912b/" },
    { label: "GitHub",         url: "" }
  ],

  /* ---------- Highlight: the big featured card at the top ---------- */
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
  about: [
    "My goal is to develop phase change memory that is fast, energy-efficient and reliable enough for neuromorphic computing. That means chalcogenide materials engineered for fast switching and drift-resilient, multi-level resistance states, so that a single device can act as a stable analog synapse.",
    "I am a PhD scholar in Materials Science at NIT Calicut, working on phase change memory materials and devices. My work follows the path from material to device: thin film fabrication, materials and device characterization of chalcogenides, and electrical measurements of how they switch.",
    "Before my PhD, I worked on an ISRO-RAC-S project on spinel-structured lithium-based soft ferrimagnets for satellite communication at NIT Manipur. I have also recently begun working on photodetectors.",
    "Next, I have been invited to Tohoku University, Sendai, as a LOTUS-ASPIRE visiting fellowship candidate, to develop scalable and reliable selector-only memory based on N- and Si-doped GeTe."
  ],

  /* ---------- Journey: newest first. Use now:true for the current entry ---------- */
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

  /* ---------- Research ---------- */
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
      title: "Drift-Resilient Multi-Level Synaptic Memory",
      type: "Research proposal · Chalcogenide materials",
      text: "Proposed development of drift-resilient, multi-level chalcogenide synaptic memory prototypes (Sn- and As-engineered GeTe, GST467 nanocomposites) for energy-efficient neuromorphic AI hardware, targeting TRL 3 to 5."
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
  showSchematics: true,             // the two animated physics schematics; set false to hide them
  gallery: [
    // Put image files in the same folder as index.html, then add them here:
    // { src: "iv-curve.png", title: "I-V switching curve", caption: "Al/In2O3:Ti/Al device, bipolar sweep." },
  ],

  /* ---------- Publications ---------- */
  // status: "published" | "review" | "prep"
  publications: [
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
      doi: "10.1039/D5MA01008J"
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
  skills: [
    { group: "Fabrication & Characterization", items: ["Thin film fabrication", "Thin film characterization", "Device fabrication", "Chalcogenide materials characterization"] },
    { group: "Measurement", items: ["I-V characterization", "Keysight B2900X SMU", "Keysight EasyEXPERT"] },
    { group: "Programming", items: [] },            // EDIT: add the languages you use
    { group: "Analysis & Writing", items: [] }      // EDIT: e.g. Origin, LaTeX
  ],
  languages: ["English", "Hindi", "Manipuri"],

  /* ---------- Achievements, fellowships, workshops ---------- */
  achievements: [
    { title: "Selected for the LOTUS-ASPIRE India–Japan Exchange Programme", year: "2026", note: "Visiting fellowship at Tohoku University · supported by JST" },
    { title: "Beam time approved at IUAC, New Delhi", year: "2026", note: "Inter-University Accelerator Centre · Accelerator Users Committee" },
    { title: "GATE", year: "2022", note: "Graduate Aptitude Test in Engineering" },
    { title: "Ishan Uday Scholarship", year: "", note: "UGC scholarship for North Eastern Region students" }
  ],

  /* ---------- Connect section ---------- */
  connectText: "Open to collaborations in phase change memory, chalcogenide thin films and neuromorphic devices. Reach out and let's talk.",

  /* ---------- Footer ---------- */
  lastUpdated: "October 2026"
};
