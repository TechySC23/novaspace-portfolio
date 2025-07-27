// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
	// ===== 1. Sticky Header on Scroll =====
	const header = document.getElementById("main-header");
	// Add 'scrolled' class to header when user scrolls past a certain point
	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});

	// ===== 2. Smooth Scrolling for Nav Links =====
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// ===== 3. Scroll-into-View Animations =====
	// This uses the Intersection Observer API for performance
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{
			threshold: 0.1, // Trigger when 10% of the element is visible
		},
	);

	// Select all elements you want to animate
	const elementsToAnimate = document.querySelectorAll(
		".skill-card, .project-card, .interest-item, .contact-card, .narrative-card, #skills .section-title, #projects .section-title, #interests .section-title, #contact .section-title",
	);
	elementsToAnimate.forEach((el) => {
		observer.observe(el);
	});
});
