// Single source of truth for everything you will edit: links, copy, projects.
// Replace every "#" and every [placeholder] here. No other file needs touching.

export const site = {
  name: "Kenisha Verma",
  role: "[Role] · Delhi NCR",
  timezone: "Asia/Kolkata",
  city: "DELHI NCR",
  links: {
    bookCall: "#", // Google Calendar booking link
    resume: "#", // Google Drive link
    email: "mailto:kenishav06@gmail.com",
    credit: "https://www.youtube.com/watch?v=6MAzUT1YhWE&t=22s",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kenishaverma" },
    { label: "Behance", href: "https://www.behance.net/kenishaverma" },
    { label: "Instagram", href: "https://www.instagram.com/_kenishaverma_/" },
    { label: "Pinterest", href: "https://in.pinterest.com/kenishaverma18/" },
    { label: "X", href: "https://x.com/KenishaVerma" },
  ],
  nav: [
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" },
    { label: "Stills", href: "/stills/" },
    { label: "Letterforms", href: "/letterforms/" },
  ],
  hero: {
    photo: "", // e.g. "/images/me.jpg" (put file in public/images)
    caption: "[One line that sounds like you]",
    // The biggest text on the home page. `accent` must be a phrase inside `statement`; it is set in serif italic.
    statement: "I design [what] for [whom] so that [what changes].",
    accent: "[what changes]",
  },
  about: {
    short: "[Two or three lines: who you are, what you care about, what you are working toward.]",
    portrait: "",
    lead: "[Where you are from] > [where you are now].",
    paragraphs: [
      "[Paragraph 1: what you care about in design.]",
      "[Paragraph 2: how you work. One belief, one example.]",
      "[Paragraph 3: outside work, one line.]",
    ],
    experience: [
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
    ],
  },
};

export type Step = { label: string; caption: string; img?: string };
export type Project = {
  slug: string;
  name: string;
  year: string;
  claim: string;
  role: string;
  team: string;
  duration: string;
  tools: string;
  cover: string;
  process?: Step[]; // leave empty to use the default steps below
};

export const projects: Project[] = [1, 2, 3, 4].map((n) => ({
  slug: `project-${n}`,
  name: `[Project ${n} name]`,
  year: "[YEAR]",
  claim: "[One line: what it is and why it matters, ideally with a number]",
  role: "[Role]",
  team: "[Team]",
  duration: "[Duration]",
  tools: "[Tools]",
  cover: "",
}));

// Default process strip shown in every case study. Override per project with `process`.
export const defaultProcess: Step[] = ["Research", "Sketches", "Wireframes", "Prototype", "Testing"].map((label) => ({
  label,
  caption: "[What you did and what you learned]",
}));

// Add file names from public/images/stills and public/images/letterforms here.
export const stills: string[] = [];
export const letterforms: { src: string; title: string; year: string; ratio: string }[] = [];
export const STILL_RATIOS = ["4/5", "1/1", "3/2", "4/5", "3/2", "4/5", "1/1", "3/2", "4/5", "1/1", "4/5", "3/2"];
export const LETTER_RATIOS = ["1/1", "4/5", "3/2", "4/5", "3/2", "1/1", "3/2", "1/1", "4/5"];
