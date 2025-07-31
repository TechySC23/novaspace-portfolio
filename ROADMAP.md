# NovaSpace Portfolio Roadmap

This document outlines the planned development and chronicles the build history for the `novaspace-portfolio` project. It is versioned using the **NovaVer** specification, reflecting a deliberate, granular, and long-term development philosophy.

**Versioning Philosophy for this Project:**

* **`PATCH` (`v0.0.X`):** Represents a "Focus Area" or a working group of tasks. It increments only when the high-level focus of development shifts.
* **`TAG` (`-alpha`, `-beta`, etc.):** A fluid descriptor of the project's overall stability at the time of a specific build.
* **`BUILD` (`-N`):** A continuous, ever-increasing integer that uniquely identifies a build. It does not reset until a `MAJOR` version change.

---

## Phase 1: The Foundation (`v0.1.0` Milestone)

This first major phase is about transforming the project from a single page into a true, multi-page website with a rich narrative. It involves establishing the architecture, creating new pages, and executing a professional pre-launch checklist to ensure quality.

### Focus: `v0.0.1` — Initial Architecture & Documentation

* `v0.0.1-preview-15`: **[INIT]** The project is in its earliest public state. The core UI, effects, and single-page structure are in place but require significant refinement and expansion.
* `v0.0.1-alpha-16`: **[ACTION]** Create and commit the official `ROADMAP.md` to establish project direction and history.
* `v0.0.1-alpha-17`: **[REFACTOR]** Add detailed comments to `main.js` explaining the function of each script section.
* `v0.0.1-alpha-18`: **[SETUP]** Create empty `stellarver.html` and `aboutme.html` files.
* `v0.0.1-alpha-19`: **[SETUP]** Add HTML5 boilerplate to both new page files.
* `v0.0.1-alpha-20`: **[SETUP]** Create and commit the `deploy.yml` GitHub Actions workflow for automated deployment.

### Focus: `v0.0.2` — Core Page Styling

* `v0.0.2-alpha-21`: **[SETUP]** Create the empty `css/pages.css` file and import it into `main.css`.
  * **[FIX]** Adds the `permissions: contents: write` block to the deploy job, giving the action the necessary permissions to push the build artifacts to the gh-pages branch.
* `v0.0.2-alpha-22`: **[STYLE]** Add the base `.page-container` and `.page-header` styles to `pages.css` to ensure consistent layout and spacing.
* `v0.0.2-alpha-23`: **[STYLE]** Create and style the `.page-content` frosted glass container, reusing variables from `base.css`.
* `v0.0.2-alpha-24`: **[STYLE]** Design and implement the `.callout-card` style for the StellarVer page to highlight key principles.
* `v0.0.2-beta-25`: **[STATE CHANGE]** The core page architecture is now stable. The project is now considered to be in a `beta` state, focusing on content and refinement.
* `v0.0.2-beta-26`: **[FIX]** Adjust margins on `.page-header` to improve visual balance with the main navigation bar.

### Focus: `v0.0.3` — `stellarver.html` Content and Polish

* `v0.0.3-beta-27`: **[CONTENT]** Add the full, humanistic text content for the StellarVer philosophy to `stellarver.html`.
* `v0.0.3-beta-28`: **[STYLE]** Add custom styling for the `<code>` and `<pre>` tags on the page to make them fit the "Cosmic Acrylic" theme.
* `v0.0.3-beta-29`: **[CONTENT]** Add the Creative Commons license section, including the text, logo, and links, to the `stellarver.html` footer.
* `v0.0.3-beta-30`: **[STYLE]** Refine the styling of the license section to ensure clarity and readability.
* `v0.0.3-rc.1-31`: **[STATE CHANGE]** The `stellarver.html` page is now content-complete and considered a Release Candidate.
* `v0.0.3-rc.1-32`: **[FIX]** Perform a full proofread of the page and correct several typos in the text.

### Focus: `v0.0.4` — `aboutme.html` Content and Polish

* `v0.0.4-rc.1-33`: **[HTML]** Structure `aboutme.html` with a two-column layout for a personal photo and a narrative section.
* `v0.0.4-rc.1-34`: **[STYLE]** Implement the responsive two-column layout in `pages.css`.
* `v0.0.4-rc.1-35`: **[CONTENT]** Add placeholder content for the narrative and a placeholder for the profile image.
* `v0.0.4-rc.1-36`: **[CONTENT]** Add a placeholder image with proper aspect ratio styling.

### Focus: `v0.0.5` — Navigation & Finalization

* `v0.0.5-rc.2-37`: **[STATE CHANGE]** The entire project is approaching its first major milestone.
* `v0.0.5-rc.2-38`: **[REFACTOR]** Update navigation links across all three HTML files.
* `v0.0.5-rc.2-39`: **[TEST]** Perform a thorough manual test of all navigation.
* `v0.0.5-rc.2-40`: **[FIX]** Correct the active link styling for the new pages.

### Focus: `v0.0.6` — `aboutme.html` Content Finalization

* This focus is all about bringing the "About Me" page to life with real content, transforming it from a wireframe into a personal introduction.
* `v0.0.6-rc.2-41`: **[CONTENT]** Write and commit the final, humanistic narrative for the `aboutme.html` page.
* `v0.0.6-rc.2-42`: **[ASSET]** Source, optimize, and add the actual profile photo, replacing the placeholder.
* `v0.0.6-rc.2-43`: **[FIX]** Adjust typography and spacing within the `aboutme.html` narrative for optimal readability.

### Focus: `v0.0.7` — SEO & Metadata

* This focus treats search engine and social media presence as a first-class feature, ensuring the site is discoverable and shares beautifully.
* `v0.0.7-rc.2-44`: **[META]** Add meaningful `<title>` and `<meta name="description">` tags to all three HTML pages.
* `v0.0.7-rc.2-45`: **[META]** Implement Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) across all pages for rich link previews on social platforms.
* `v0.0.7-rc.2-46`: **[ASSET]** Design and create a high-quality `og-image.jpg` to be used for the social media preview image.

### Focus: `v0.0.8` — Accessibility Overhaul (A11y)

* This focus is dedicated to a thorough review of the site's accessibility, ensuring it is usable and welcoming to everyone.
* `v0.0.8-rc.2-47`: **[A11Y]** Review and add descriptive `alt` text to every `<img>` tag that is not purely decorative.
* `v0.0.8-rc.2-48`: **[A11Y]** Add appropriate `aria-label` attributes to icon-only links or buttons to provide context for screen readers.
* `v0.0.8-rc.2-49`: **[A11Y]** Test and verify that the entire site, including the navigation and all interactive elements, is fully navigable using only the keyboard.
* `v0.0.8-rc.2-50`: **[A11Y]** Run a Lighthouse accessibility audit and address any automatically-detected issues.

### Focus: `v0.0.9` — Final Polish & Pre-Launch Checks

* This is the final checklist before the milestone release. It covers the small but vital details that create a professional final product.
* `v0.0.9-rc.3-51`: **[STATE CHANGE]** The project is now in its final Release Candidate stage before the Foundation milestone.
* `v0.0.9-rc.3-52`: **[ASSET]** Create and implement a comprehensive `favicon` set (including `favicon.ico`, `apple-touch-icon.png`, and manifest icons) for all devices and platforms.
* `v0.0.9-rc.3-53`: **[TEST]** Perform a final cross-browser compatibility check on the latest versions of Chrome, Firefox, and Safari.
* `v0.0.9-rc.3-54`: **[CLEANUP]** Run a code linter (like Prettier) across the entire HTML, CSS, and JS codebase to ensure consistent formatting.
* `v0.0.9-rc.3-55`: **[DOCS]** Update the main `README.md` to reflect the new features and a link to the live deployment.

### **`v0.1.0-stable-56`: The "Foundation" Milestone Release**

* The portfolio is now a stable, accessible, SEO-friendly, multi-page website with a complete narrative. This marks the end of the initial development phase and the readiness for public announcement.

---

## Phase 2: The Dynamic Arc (`v0.1.x` -> `v0.5.0` Milestone)

This phase is dedicated to transforming the portfolio from a static site into a dynamic, data-driven application, showcasing modern frontend development practices.

### Focus: `v0.1.1` through `v0.1.8` — Data-Driven Content

* This series of patches will focus on creating a `data/` directory and moving all project, skill, and interest information into JavaScript objects. Each patch will tackle one piece of the refactor: creating the data file, writing the render function, and replacing the static HTML.

### Focus: `v0.2.1` through `v0.2.9` — The Interactive Contact Form

* These patches will methodically build a full-stack feature: a beautiful frontend form that submits to a serverless function, which then sends an email. This demonstrates a deep understanding of modern web architecture.

### **`v0.5.0-stable-110`: The "Dynamic" Milestone Release**

* The portfolio's content is now fully managed by data files, and it features a secure, serverless contact form.

---

## Phase 3: The Content & Community Arc (`v0.5.x` -> `v1.0.0` Milestone)

This phase establishes the portfolio as a platform for sharing knowledge and engaging with the community.

### Focus: `v0.5.1` through `v0.8.x` — The Blog Engine

* This long series of patches will involve architecting a simple, elegant blog powered by Markdown. It will include creating the blog list and article page layouts, integrating a Markdown-to-HTML library, and writing the first several posts. This is a significant undertaking that demonstrates content strategy and technical skill.

### **`v1.0.0-stable-200`: The "Finished" Milestone Release**

* The project is now a complete personal platform: a portfolio, a blog, and a showcase of personal projects and philosophies. It is considered "feature-complete" as per the original vision.

---

## Phase 4: The Experimental Horizon (`v1.x.x` and beyond)

With the core product complete, this phase is for exploring ambitious, creative, and cutting-edge features.

### Focus: `v1.0.1` and beyond — The Command Palette

* A major feature where users can navigate the site and perform actions using a keyboard-driven command palette, similar to those found in modern code editors.

### Focus: `v1.1.0` and beyond — The Theme Engine

* A deep refactor of the CSS to allow for a "Light Mode" and potentially other creative themes, all managed by a simple UI toggle.

### Focus: `v1.2.0` and beyond — The WebGL Nebula

* An ambitious rewrite of the parallax background to use a fully interactive, shader-based WebGL nebula that reacts to the user's mouse in three dimensions.
