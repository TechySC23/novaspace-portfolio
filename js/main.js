/*
 * Main JavaScript for NovaSpace Portfolio
 * Author: Shreyas Chatterjee (NovaSpace)
 * Version: v0.0.1-alpha-17
 *
 * This file handles all the dynamic interactivity for the site,
 * from simple UI enhancements to more complex, interconnected features.
 * Let's get to it.
 */

// We wrap everything in a DOMContentLoaded listener.
// This is best practice - it ensures our script doesn't try to find
// elements in the HTML before they've actually been loaded by the browser.
// No one likes a "Cannot read properties of null" error.
document.addEventListener("DOMContentLoaded", () => {
	// --- 1. Sticky Header ---
	// The goal: have the header be transparent at the top of the page,
	// and then morph into a frosted glass bar when the user scrolls down.
	const header = document.getElementById("main-header");

	// We could get fancy here, but a simple check on scroll position is all we need.
	// 50px is a good, noticeable threshold that isn't too sensitive.
	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});

	// --- 2. Smooth Scrolling ---
	// Default anchor link behavior (#) is to instantly jump to the section. It's jarring.
	// This script intercepts those clicks and smoothly scrolls instead.
	// It targets any anchor link that starts with a '#'.
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			// First, we prevent the default jump.
			e.preventDefault();

			// Then, we find the element we want to scroll to and use the
			// browser's built-in smooth scroll. Super clean.
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// --- 3. Scroll-into-View Animations ---
	// This is the magic that makes the sections fade in as you scroll.
	// We're using the Intersection Observer API because it's way more performant
	// than listening for the 'scroll' event. The browser does the heavy lifting.
	const observer = new IntersectionObserver(
		(entries) => {
			// The callback gives us a list of elements being observed.
			entries.forEach((entry) => {
				// 'isIntersecting' is a boolean. True if the element is in the viewport.
				if (entry.isIntersecting) {
					// Add our .visible class (defined in CSS) to trigger the animation.
					entry.target.classList.add("visible");
					// Optional: Once it's visible, we don't need to watch it anymore.
					// This can save a tiny bit of performance on very long pages.
					// observer.unobserve(entry.target);
				}
			});
		},
		{
			// The threshold option is a percentage. 0.1 means "fire the event
			// as soon as 10% of the element is visible". It feels responsive
			// without being too early.
			threshold: 0.1,
		},
	);

	// Now we just need to tell the observer which elements to watch.
	// We've selected all the elements we gave the initial "hidden" state in the CSS.
	const elementsToAnimate = document.querySelectorAll(
		".skill-card, .project-card, .interest-item, .contact-card, .narrative-card, #skills .section-title, #projects .section-title, #interests .section-title, #contact .section-title",
	);
	// And here we kick it all off by looping through our list and observing each one.
	elementsToAnimate.forEach((el) => {
		observer.observe(el);
	});

	// --- 4. Aurora Hover Effect ---
	// This creates that cool, mouse-following gradient glow on the cards.
	// It works by updating CSS Custom Properties in real-time.
	const cards = document.querySelectorAll(".project-card, .skill-card, .contact-card");

	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			// We need the mouse position *relative to the card itself*, not the whole page.
			const rect = card.getBoundingClientRect(); // Gets the card's size and position.
			const x = e.clientX - rect.left; // x position inside the element.
			const y = e.clientY - rect.top; // y position inside the element.

			// Now we set these values as CSS variables on this specific card.
			// The CSS for the card's ::before pseudo-element will pick these up automatically.
			card.style.setProperty("--mouse-x", `${x}px`);
			card.style.setProperty("--mouse-y", `${y}px`);
		});

		// Note: The mouseleave event is currently empty.
		// The opacity transition is handled purely by CSS's :hover state, which is cleaner.
		// Kept this here in case we want to add more complex logic later.
		card.addEventListener("mouseleave", () => {});
	});

	// --- 5. Dynamic Skill Highlighting ---
	// This is the "smart" feature connecting projects to the skills that built them.
	const projectCards = document.querySelectorAll(".project-card");
	const skillsGrid = document.querySelector(".skills-grid"); // We'll need the parent container.

	projectCards.forEach((card) => {
		// For each project, find the `<li>` tags that have a `data-skill` attribute.
		const skillTags = card.querySelectorAll(".project-tags li[data-skill]");
		// Create a clean array of the skill names (e.g., ['html', 'css']).
		const requiredSkills = Array.from(skillTags).map((tag) => tag.dataset.skill);

		// When the mouse enters a project card...
		card.addEventListener("mouseenter", () => {
			// Add a class to the whole grid. This lets us fade out non-highlighted cards.
			skillsGrid.classList.add("is-highlighting");

			// Loop through the skills needed for THIS project...
			requiredSkills.forEach((skill) => {
				// ...find the corresponding skill card in the other section...
				const skillCard = document.querySelector(`.skill-card[data-skill="${skill}"]`);
				// ...and if it exists, light it up.
				if (skillCard) {
					skillCard.classList.add("highlighted");
				}
			});
		});

		// And when the mouse leaves, we just do the reverse.
		card.addEventListener("mouseleave", () => {
			skillsGrid.classList.remove("is-highlighting");
			// This removes the highlight from all cards, but for safety,
			// we'll just target the ones we know we added the class to.
			requiredSkills.forEach((skill) => {
				const skillCard = document.querySelector(`.skill-card[data-skill="${skill}"]`);
				if (skillCard) {
					skillCard.classList.remove("highlighted");
				}
			});
		});
	});
});
