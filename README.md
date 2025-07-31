# NovaSpace Portfolio

### [View Live Demo 🚀](https://techysc23.github.io/novaspace-portfolio/)

A personal portfolio website built from the ground up with a "Cosmic Acrylic" aesthetic. This project combines a dynamic, animated nebula background with clean, semi-transparent "frosted glass" UI elements to create a modern, immersive, and professional-grade user experience.

---

## ✨ Key Features

* **Frosted Glass UI:** A modern, multi-layered design using `backdrop-filter` to create a beautiful sense of depth.
* **Parallax Background:** A pure CSS parallax effect on the nebula background gives the entire site a 3D feel.
* **Elegant Scroll Animations:** Sections and cards fade into view gracefully using the high-performance Intersection Observer API.
* **"Aurora" Hover Effect:** A dynamic, mouse-aware glow on interactive cards creates a premium, engaging feel.
* **Dynamic Skill Highlighting:** An intelligent feature that connects projects to the skills used to build them, highlighting the relevant skills as you hover over a project.
* **Fully Responsive:** Built with a mobile-first approach using modern CSS techniques like `clamp()`, Flexbox, and Grid for a seamless experience on all devices.

## 🛠️ Tech Stack

* **HTML5:** Semantic markup for structure and accessibility.
* **CSS3:** For all styling, layout, and animations.
  * CSS Custom Properties (Variables) for theming.
  * CSS Grid & Flexbox for responsive layouts.
  * `backdrop-filter` for the glass effect.
  * `@keyframes` and `transition` for animations.
* **Vanilla JavaScript (ES6+):** For all interactivity.
  * **Intersection Observer API:** For performant scroll animations.
  * **DOM Manipulation:** For dynamic class toggling and event handling.

---

## 🏗️ Project Structure

The project is organized with a clean, scalable, and modular structure that separates concerns.

```
novaspace-portfolio/
│
├── 📂 assets/
│   ├── 📂 images/      // Backgrounds, project thumbnails
│   └── 📂 icons/       // SVG icons for skills and links
│
├── 📂 css/
│   ├── 📂 sections/    // Component-specific stylesheets
│   ├── base.css        // CSS resets, variables, global fonts
│   └── main.css        // Imports all other CSS files
│
├── 📂 js/
│   └── main.js         // All JavaScript logic
│
├── index.html          // The single HTML file for the page
└── README.md           // You are here!
```

---

## 💡 Core Concepts & Implementation

This project was built on several modern frontend principles.

### 1. The "Cosmic Acrylic" Theme

The entire aesthetic is built on a foundation of CSS Custom Properties (Variables) defined in `css/base.css`.

> **Single Source of Truth**
> By defining the entire color palette and font stack in the `:root` pseudo-class, we establish a "single source of truth." To change a core color across the entire site, we only need to edit a single line of code, making the design system incredibly robust and easy to maintain.

The signature "frosted glass" effect is achieved with three key CSS properties on the cards:

```css
.project-card {
    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent base */
    border: 1px solid rgba(255, 255, 255, 0.2); /* A subtle edge to catch light */
    backdrop-filter: blur(10px); /* The magic: blurs whatever is BEHIND the element */
}
```

### 2. JavaScript-Driven Interactivity

All JavaScript is contained in `js/main.js` and wrapped in a `DOMContentLoaded` event listener to ensure the script runs only after the page is fully loaded.

#### Sticky Header

The navigation bar transforms from transparent to a frosted glass bar by listening to the `scroll` event and toggling a `.scrolled` class on the `<header>` element.

#### Scroll Animations

> **Performance First**
> Instead of listening to the `scroll` event (which fires constantly and can hurt performance), this project uses the **Intersection Observer API**. This modern API allows the browser to efficiently notify us when an element enters the viewport, meaning our animation code only runs *once* when needed.

The logic is simple:

1. All animatable elements start as `opacity: 0` and are shifted down (`transform: translateY(30px)`).
2. The Intersection Observer "watches" these elements.
3. When an element scrolls into view, the observer adds a `.visible` class, which transitions the element to `opacity: 1` and `transform: translateY(0)`.

### 3. Advanced UX Enhancements

#### Parallax Background

This is a pure CSS effect achieved by setting `background-attachment: fixed` on the `<body>`. This pins the background to the viewport, while the content scrolls over it, creating a simple but effective illusion of depth.

#### Aurora Hover Effect

This dynamic effect is a collaboration between CSS and JS:

1. **CSS:** A `::before` pseudo-element on each card contains a large, soft `radial-gradient`. Its position is controlled by two CSS variables: `--mouse-x` and `--mouse-y`.
2. **JS:** A `mousemove` event listener on each card calculates the mouse's position *relative to the card* and updates the `--mouse-x` and `--mouse-y` variables in real-time. This causes the gradient to follow the cursor.

#### Dynamic Skill Highlighting

This intelligent feature uses `data-*` attributes to create a semantic link between projects and the skills used to build them.

1. **HTML:** Skill cards have a `data-skill="html"` attribute. Project tags have a corresponding `data-skill="html"` attribute.
2. **JS:** When the mouse enters a project card, the script reads the `data-skill` attributes from its tags, finds the skill cards with matching attributes, and adds a `.highlighted` class to them.

## 🚀 Getting Started

To run this project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/TechySC23/novaspace-portfolio.git
    ```

2. Navigate to the project directory:

    ```bash
    cd novaspace-portfolio
    ```

3. Open the `index.html` file in your favorite web browser.

## 🙏 Acknowledgments

* **Fonts:** [Google Fonts](https://fonts.google.com/) (Plus Jakarta Sans, Poppins, Figtree)
* **Icons:** [Phosphor Icons](https://phosphoricons.com/)
* **Inspiration:** The modern design of the Microsoft Store website and countless beautiful portfolios across the web.

---

Created with care by **NovaSpace**.
