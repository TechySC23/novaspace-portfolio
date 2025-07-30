
# NovaSpace Portfolio Roadmap

This document outlines the planned development and chronicles the build history for the `novaspace-portfolio` project. It is versioned using the **NovaVer** specification, reflecting a deliberate, granular, and long-term development philosophy.

**Versioning Philosophy for this Project:**

* **`PATCH` (`v0.0.X`):** Represents a "Focus Area" or a working group of tasks. It increments only when the high-level focus of development shifts.
* **`TAG` (`-alpha`, `-beta`, etc.):** A fluid descriptor of the project's overall stability at the time of a specific build.
* **`BUILD` (`-N`):** A continuous, ever-increasing integer that uniquely identifies a build. It does not reset until a `MAJOR` version change.

---

## Current State: `v0.0.1-preview-15`

The project is in its earliest public state. The core UI, effects, and single-page structure are in place but require significant refinement and expansion.

---

## Phase 1: The Foundation (`v0.1.0` Milestone)

This first major phase is about transforming the project from a single page into a true, multi-page website with a rich narrative. It involves establishing the architecture, creating new pages, and populating them with carefully crafted content.

### Focus: `v0.0.1` — Initial Architecture & Documentation

* `v0.0.1-alpha-16`: **[ACTION]** Create and commit the official `ROADMAP.md` to establish project direction and history.
* `v0.0.1-alpha-17`: **[REFACTOR]** Add detailed comments to `main.js` explaining the function of each script section (Header, Animations, Aurora Effect, etc.).
* `v0.0.1-alpha-18`: **[SETUP]** Create the empty `stellarver.html` file in the root directory.
* `v0.0.1-alpha-19`: **[SETUP]** Add the basic HTML5 boilerplate to `stellarver.html`, including links to the existing CSS and JS files.
* `v0.0.1-alpha-20`: **[SETUP]** Create the empty `aboutme.html` file.
* `v0.0.1-alpha-21`: **[SETUP]** Add HTML5 boilerplate to `aboutme.html`.
* `v0.0.1-alpha-22`: **[SETUP]** Create the empty `css/pages.css` file and import it into `main.css`. This file will hold styles unique to these new static pages.

### Focus: `v0.0.2` — Core Page Styling

* `v0.0.2-alpha-23`: **[STYLE]** Add the base `.page-container` and `.page-header` styles to `pages.css` to ensure consistent layout and spacing.
* `v0.0.2-alpha-24`: **[STYLE]** Create and style the `.page-content` frosted glass container, reusing variables from `base.css`.
* `v0.0.2-alpha-25`: **[STYLE]** Design and implement the `.callout-card` style for the StellarVer page to highlight key principles.
* `v0.0.2-beta-26`: **[STATE CHANGE]** The core page architecture is now stable. The project is now considered to be in a `beta` state, focusing on content and refinement.
* `v0.0.2-beta-27`: **[FIX]** Adjust margins on `.page-header` to improve visual balance with the main navigation bar.

### Focus: `v0.0.3` — `stellarver.html` Content and Polish

* `v0.0.3-beta-28`: **[CONTENT]** Add the full, humanistic text content for the StellarVer philosophy to `stellarver.html`.
* `v0.0.3-beta-29`: **[STYLE]** Add custom styling for the `<code>` and `<pre>` tags on the page to make them fit the "Cosmic Acrylic" theme.
* `v0.0.3-beta-30`: **[CONTENT]** Add the Creative Commons license section, including the text, logo, and links, to the `stellarver.html` footer.
* `v0.0.3-beta-31`: **[STYLE]** Refine the styling of the license section to ensure clarity and readability.
* `v0.0.3-rc.1-32`: **[STATE CHANGE]** The `stellarver.html` page is now content-complete and considered a Release Candidate for the Foundation milestone.
* `v0.0.3-rc.1-33`: **[FIX]** Perform a full proofread of the page and correct several typos in the text.

### Focus: `v0.0.4` — `aboutme.html` Content and Polish

* `v0.0.4-rc.1-34`: **[HTML]** Structure `aboutme.html` with a two-column layout for a personal photo and a narrative section.
* `v0.0.4-rc.1-35`: **[STYLE]** Implement the two-column layout using a responsive CSS Grid or Flexbox approach in `pages.css`.
* `v0.0.4-rc.1-36`: **[CONTENT]** Add placeholder content for the narrative and a placeholder for the profile image.

### Focus: `v0.0.5` — Navigation and Finalization

* `v0.0.5-rc.2-37`: **[STATE CHANGE]** The entire project is approaching its first major milestone.
* `v0.0.5-rc.2-38`: **[REFACTOR]** Update the `main-header` navigation links across all three HTML files (`index.html`, `stellarver.html`, `aboutme.html`) to ensure they link correctly to the new pages and the anchor tags on the main page.
* `v0.0.5-rc.2-39`: **[TEST]** Perform a thorough manual test of all navigation links and page rendering.
* `v0.0.5-rc.2-40`: **[FIX]** Correct the active link styling for the new pages.

### **`v0.1.0-stable-41`: The "Foundation" Milestone Release**

* The portfolio is now a stable, multi-page website with a complete narrative. This marks the end of the initial development phase.

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
