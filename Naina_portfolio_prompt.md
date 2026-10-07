You are building my personal portfolio website from scratch in this VS Code workspace. I am not technical about web design, so you do ALL the work, file by file, until the site is fully complete. Do not stop early and do not give me a basic version. I want a polished, bold site that feels made for me, the kind of site people screenshot and send to friends.

HOW TO WORK
1. First read every file in /assets. My resume text is at the end of this prompt and is the single source of truth for my experience, education, projects and dates.
2. Create PLAN.md (a checklist of every requirement in this prompt) and MISSING.md (see below).
3. Build in 4 phases: (A) files and content data, (B) layout and responsive styling, (C) animations and interactions, (D) QA. After each phase, tick the items in PLAN.md and continue straight to the next phase without waiting for me.
4. Finish with the DEFINITION OF DONE check and report every item as PASS or FIXED.
5. Never make up roles, companies, dates, numbers or links.

AUTHENTICITY (most important rule)
- This site must be original and about me. Do not copy or imitate text, taglines, section names, page structure or layouts from any other portfolio, template or example site, including any you find in this workspace or remember from elsewhere. Never reuse phrases such as "Making the complicated clear", "Ideas you can open", "Selected Lab Projects", "Tools & Methods" or "Field notes".
- Write every headline, tagline, button label and section title fresh, from MY concept and MY answers below. Section titles should feel like they belong in a terminal. The top bar keeps short, plain names so people can scan it.
- Write in my own voice: a team player, warm and witty. Keep my facts and numbers exactly as given, but phrase them the way I would talk, not in generic recruiter language.
- Choose the layout of each section, especially Experience, from my concept. Do not fall back to a standard portfolio pattern.

WHERE TO LOOK FOR FILES
- Only use files inside this repository. All my images and documents live in /assets. Do not search anywhere else on my computer, do not download anything from the internet, and do not use stock photos.
- Files I expect to have:
  - assets/images/headshot.jpg
  - assets/docs/resume.pdf (for the download button)
  - assets/logos/amdocs.png, assets/logos/ola.png, assets/logos/microsoft.png
  - assets/logos/carnegie-mellon.png and a logo for MKSSS's Cummins College of Engineering for Women (assets/logos/cummins-college.png)
  - assets/projects/age-and-gender-prediction.jpg, assets/projects/interactive-graph-data-analysis.jpg, assets/projects/behind-the-words.jpg (all optional)
- If something is not in /assets, put a themed placeholder in its spot (for example a terminal window that prints "image not found: add assets/projects/... to display" in a friendly way, or an ASCII-style monogram instead of a logo) so the layout already works, and log it in MISSING.md.

MISSING.md (required)
Create MISSING.md in the project root and keep it up to date. For every missing or unclear item, add a checkbox entry with:
- what is missing and why it matters
- the exact file path in /assets, or the field in content.js, where it belongs
- a ready-to-paste prompt I can use later, for example: "I added assets/logos/ola.png. Replace the OLA placeholder with it and keep everything else the same."
Also list these questions for me:
- 2 alternative headlines
- My Amdocs title: my resume says "Software Engineer" and my form said "Software Developer". Use the resume title for now and ask me which I prefer.
- The GitHub link for my Interactive Graph project (my resume mentions GitHub but has no URL; link to my GitHub profile until I give you the repo link)
- A link to my IEEE Xplore paper
- Photos for my hobbies, if I want them
When you finish, show me MISSING.md and tell me the top 3 things to add first. In any future session, if MISSING.md has open items, remind me of them and offer to fill one in.

TECH RULES
- Plain HTML, CSS and JavaScript only: index.html, styles.css, main.js, content.js. No frameworks, no npm, no build step. It must deploy on Vercel as a static site with zero configuration.
- All my text lives in content.js as one clearly labeled object, and the page renders from it, so I can edit words later without touching the design.
- Up to 2 Google Fonts (for example one monospace face for the terminal feel and one highly readable face for longer text). No other libraries.
- Do not show my phone number anywhere on the site.

MY CONCEPT: A PLAYFUL, FUTURISTIC COMMAND-LINE TERMINAL
- My site feels like a command-line terminal, but a friendly, futuristic one: playful, not intimidating. Visitors who have never opened a terminal should still find everything instantly.
- Inspiration: Substack. Take its reading comfort (calm typography, comfortable line length, generous spacing for paragraphs) and combine it with the terminal look, so longer text is pleasant to read, not a wall of green monospace.
- Colors (Deep forest): dark forest green #14281D as the terminal background, leaf green #7FB685 as the phosphor accent (prompts, cursor, highlights, buttons), soft paper #F2E8CF for readable text. Check every text and background pair for AA contrast.
- My thread is optimization: it's the problem I can't stop thinking about, and it shows up across my work (faster pipelines, comparing optimizers, cutting manual effort). Let that idea show up in small, witty details.
- Terminal ideas to choose from and make your own: windows with title bars, prompts and commands as section intros, a blinking block cursor, monospace labels, status lines. Decide how far to take it in each section so it stays readable.

SECTIONS (in this order)
1. Top bar: sticky, my name or a monogram on the left, links to every section with smooth scrolling and the active section highlighted, a prominent "Download Resume" button (assets/docs/resume.pdf, download attribute), and a thin scroll-progress bar styled to fit my concept. On phones: an accessible menu button (aria-expanded, closes on link tap and on Escape) with the resume button still easy to reach.
2. Hero: my headshot framed to fit my concept, my name, a witty one-liner headline of 10 words or fewer, and a 1 to 2 sentence subline. Write them yourself from this material: I turn complex data and technical problems into practical, data-driven solutions using AI and machine learning; I'm doing my MISM at Carnegie Mellon; I'm looking for an AI/ML internship for Summer 2027; I'm obsessed with optimization. Write 3 headline options, use the best one, and put the other 2 in MISSING.md. Add two buttons (one to my work, one to contact) and a scroll cue that fits my concept.
3. Experience: all three roles from my resume (Amdocs, OLA, Microsoft) with title, dates, and the strongest points in my voice. Keep every number exactly (40%, 30%, 15+ hours per week, 10M+ monthly active users, 5+ UI improvements, up to 90%). Company logos from assets/logos. Logo, role, company and dates must be readable at a glance, with the details easy to expand or skim. Most recent first. Design the layout from my terminal concept.
4. Projects and research: 
   - Age and Gender Prediction (shipped): a CNN that predicts age and gender from facial images; compared Adam, Adagrad and Adadelta optimizers. Python, TensorFlow.
   - Interactive Graph, Data Analysis: an interactive dashboard for automotive data analysis with dynamic comparisons. Python, Plotly. GitHub link.
   - Research paper, "Behind the Words: Unmasking Bias Lurking in LLMs and Data", published at IEEE Pune Conference 2025 (IEEE Xplore). Give it a special "published" treatment.
   Make it easy to add more projects later from content.js.
5. Education: both degrees from my resume (Carnegie Mellon MISM, expected December 2027, with my 15% merit scholarship and coursework; Cummins College B.Tech in Electronics and Telecommunication with Honors in Data Science, 2024, with coursework), with school logos.
6. Skills: I have more than 16, so group them by category with a small interactive way to explore them that fits my terminal concept. Never show an empty category or add skills I didn't list.
   - Languages: Python, Java, SQL, JavaScript
   - AI/ML: TensorFlow, Deep Learning, Regression, Classification, Neural Networks, Time Series, Hypothesis Testing
   - Data: MySQL, MongoDB, Pandas, Plotly
   - Cloud and Infrastructure: AWS, Azure, Docker, Kubernetes
   - Backend: REST APIs, Microservices
   - DevOps: Git, GitHub, GitLab, Jenkins, Bitbucket, Azure DevOps
7. Life outside work: surfing, reading, and the fact that I painted my entire room myself. Keep it short and fun.
8. Contact and footer: a closing line in my voice, my email ndhingra@andrew.cmu.edu (shown as text with a copy button, plus a mailto link), and inline SVG icon links to LinkedIn https://www.linkedin.com/in/naina-dhingra-4b5b53211/ and GitHub https://github.com/Nainaadhingra. Current year set by JavaScript.

SIGNATURE INTERACTIONS (required)
1. Cursor trail that fits my theme (for example fading phosphor-green characters or tiny block cursors). Desktop only, lightweight, and off for reduced motion and touch devices.
2. Text that types or scrambles itself in: the hero headline types out, and section titles decode from scrambled characters when they scroll into view. Every animated text must also exist as real, readable text for screen readers and search engines.
3. Hidden easter egg on theme (for example a secret command or key combo that opens a tiny interactive prompt with a few fun commands about me). It must never block reading or clicking. Mention it in MISSING.md so I know it exists.

MOTION AND DELIGHT (required, motion level: bold)
- A short boot-sequence intro on load (under 2 seconds, skippable with any key or tap, shown once per visit), then the hero.
- Scroll reveals with a stagger on sections and cards (IntersectionObserver), hover states on everything clickable, and satisfying press feedback on buttons.
- Animate only transform and opacity, keep it smooth.
- Respect prefers-reduced-motion: no boot sequence, no cursor trail, no typing or scrambling, just simple fades.
- Content must be visible even if animations fail (never leave anything stuck at opacity 0).

RESPONSIVE AND ACCESSIBLE (required)
- Mobile first. Check at 360, 768, 1024 and 1440px: no horizontal scrolling, tap targets at least 44px, body text at least 16px.
- Semantic landmarks, alt text on every image, visible focus states, AA contrast, keyboard-friendly menu and easter egg.
- A page title with my name, a meta description, an SVG favicon that fits my concept, and Open Graph tags using my headshot.
- Lazy-load images and set width and height. Compress anything over 500KB.

DEFINITION OF DONE
[ ] Every section is present with my real content or a themed placeholder, with no lorem ipsum or invented facts
[ ] No text, taglines or section names copied from another portfolio or template
[ ] All three roles, both degrees, both projects and the research paper appear, with logos or fallbacks
[ ] Every number from my resume is exactly right
[ ] No phone number on the site
[ ] Resume download works
[ ] Top bar links jump to the right sections and highlight the active one; the phone menu works
[ ] The terminal concept is clear, and long text is still comfortable to read
[ ] Cursor trail, typing and scrambling text, and the easter egg work; the boot intro is short and skippable
[ ] Skills display is grouped and interactive
[ ] Reduced-motion users get a calm version
[ ] Looks intentional at 360px and 1440px with no horizontal scroll
[ ] No console errors
[ ] MISSING.md lists every placeholder and open question with a ready-to-paste prompt
Then tell me: the files you created, how to open the site in my browser, the top 3 items from MISSING.md, and 3 ideas to make it even more me.

MY RESUME TEXT
Naina Dhingra
Pittsburgh, PA | ndhingra@andrew.cmu.edu | linkedin.com/nainadhingra
Education
Carnegie Mellon University, PA
Master of Information Systems Management
• Coursework: Machine Learning in Production, Decision Making Under Uncertainty, Database
Management, Python for Software Developers
• Awarded 15% merit based scholarship
Expected December 2027
MKSSS’s Cummins College of Engineering for Women, Pune
B.Tech. - Electronics And Telecommunication Engineering, Honors in Data Science
2024
• Coursework:Introduction to Data Science, Artificial Intelligence, Deep Learning, Machine Learning with Python, Web Data
Mining, Big Data Analytics
Technical Skills
• Languages: Python, Java, SQL, JavaScript
• AI/ML: TensorFlow, Deep Learning, Regression, Classification, Neural Networks, Time Series, Hypothesis Testing
• Data: MySQL, MongoDB, Pandas, Plotly
• Cloud and Infrastructure: AWS, Azure, Docker, Kubernetes
• Backend: REST APIs, Microservices
• DevOps: Git, GitHub, GitLab, Jenkins, Bitbucket, Azure DevOps
Work Experience
Software Engineer | Amdocs August 2024 to July 2026
• Automated manual test-case execution for AT&T’s fallback system using an internal test-automation framework, cutting
regression testing time by 40%.
• Validated real-time billing accuracy across wireless and fiber services on an enterprise bill-generation platform processing
millions of customer bills monthly for AT&T.
• Migrated core billing services from a monolithic architecture to microservices using Java, Spring Boot, and REST APIs,
reducing deployment time per release by 30% and unlocking independent service scaling.
• Built an Excel-based bulk attribute-update tool for account activation team, integrating with third-party activation systems
to eliminate manual per-record updates across 3 teams and save 15+ hours of manual effort per week.
• Automated data loading and rule validation across dozens of Oracle SQL tables through API-driven loaders, replacing
manual SQL updates and shrinking data-refresh turnaround from days to hours.
Software Engineer Intern | OLA July 2023 to December 2023
• Enhanced the post-service star-rating experience across driver and customer applications for rides, packages, and food
delivery, contributing to a platform serving 10M+ monthly active users.
• Collaborated with product designers in Figma to translate product requirements into responsive, user-focused interfaces,
delivering 5+ UI improvements across customer-facing workflows.
Software Engineer Intern | Microsoft May 2023 to July 2023
• Developed an internal CI/CD automation tool for a hybrid cloud product using Azure DevOps, Docker, GitHub, and
Kubernetes, reduced build, test, and deployment cycle time by up to 90%, enabling faster release cycles.
Projects
Age and Gender Prediction
• Trained a CNN-based deep learning model to predict age and gender from facial images.
• Compared Adam, Adagrad, and Adadelta optimizers to evaluate impact on convergence speed and prediction accuracy.
• Implemented solution using Python and TensorFlow.
Interactive Graph- Data Analysis GitHub
• Developed an interactive dashboard for automotive data analysis, enabling dynamic comparison across multiple attributes.
• Built visualizations using Python and Plotly to support exploratory data analysis.
Research Paper
Behind the Words: Unmasking Bias Lurking in LLMs and Data IEEE Xplore
• Designed a comparative bias-evaluation framework for 3 language models (BERT, RoBERTa, GPT-2) across 3 benchmark
datasets (StereoSet, CrowS-Pairs, Indian-BhED), covering racial, religious, gender, and caste biases.
• Implemented scoring functions to quantify model preferences for stereotypical versus anti-stereotypical responses,
supporting consistent cross-model and cross-dataset evaluation.
• Identified substantial variation in bias across models, with GPT-2 exhibiting 72% religious and 62% racial bias, while
RoBERTa exhibited 61% caste bias, published at IEEE Pune Conference 2025.
