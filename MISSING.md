# Missing items and questions

The page uses the supplied portrait, resume, employer logos, and school logos. Three project-image files were not in `assets/`, so each project has a terminal-style artwork placeholder. The research-paper card opens the supplied PDF until an IEEE Xplore URL is available. No phone number is shown.

## Assets to add (optional)

- [ ] **Age and Gender Prediction artwork** — the project is described, but no image is present to give it a project-specific visual. Add it at `assets/projects/age-and-gender-prediction.jpg`; set its `artworkAvailable` field to `true` in `content.js`.  
  Ready-to-paste prompt: “I added `assets/projects/age-and-gender-prediction.jpg`. Set the Age and Gender Prediction `artworkAvailable` field in `content.js` to `true` and keep everything else the same.”
- [ ] **Interactive Graph artwork** — the dashboard has no supplied screenshot or artwork. Add it at `assets/projects/interactive-graph-data-analysis.jpg`; set its `artworkAvailable` field to `true` in `content.js`.  
  Ready-to-paste prompt: “I added `assets/projects/interactive-graph-data-analysis.jpg`. Set the Interactive Graph `artworkAvailable` field in `content.js` to `true` and keep everything else the same.”
- [ ] **Research-paper artwork** — the paper PDF is present, but there is no thumbnail or project image. Add it at `assets/projects/behind-the-words.jpg`; set its `artworkAvailable` field to `true` in `content.js`.  
  Ready-to-paste prompt: “I added `assets/projects/behind-the-words.jpg`. Set the Behind the Words `artworkAvailable` field in `content.js` to `true` and keep everything else the same.”
- [ ] **Hobby photos (optional)** — the current after-hours section is complete without photos. If you would like images, tell me which repository paths to use and I can add them without changing the rest of the page.  
  Ready-to-paste prompt: “I added photos for surfing, reading, and painting under `assets/`. Add them to the after-hours section and keep everything else the same.”

## Questions / details to confirm

- [ ] **Headline preference** — the site currently uses “I optimize the part everyone else calls ‘good enough.’” Two alternatives: “Less busywork. Better models. Happier pipelines.” and “Curious about data; suspicious of slow workflows.”  
  Ready-to-paste prompt: “Use the headline ‘[chosen headline]’ in `content.js` and keep everything else the same.”
- [ ] **Amdocs title** — I used “Software Engineer,” matching the resume. Your form used “Software Developer”; which title do you prefer?  
  Ready-to-paste prompt: “Change the Amdocs title in `content.js` to ‘[preferred title]’ and keep everything else the same.”
- [ ] **Interactive Graph repository link** — the project currently links to your GitHub profile, `https://github.com/Nainaadhingra`, because the repository URL was not supplied.  
  Ready-to-paste prompt: “The Interactive Graph repository is [URL]. Update its link in `content.js` and keep everything else the same.”
- [ ] **IEEE Xplore paper link** — the research card currently opens the supplied PDF because the IEEE Xplore URL was not supplied.  
  Ready-to-paste prompt: “The IEEE Xplore page for my paper is [URL]. Update the research link in `content.js` and keep everything else the same.”

## Easter egg

- [x] Press `?` on the page to open the small command prompt. Try `help`, `optimize`, `surf`, or `close`.
