// ============================================
// SOLAR POWER & CONTROLS WEBSITE - JavaScript
// Modern Interactions & Animations
// ============================================

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "flex" ? "none" : "flex";
        hamburger.classList.toggle("active");
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.8s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and product cards
document.querySelectorAll(".service-card, .product-card").forEach((card) => {
    card.style.opacity = "0";
    observer.observe(card);
});

// Form submission handler
// To make this work on GitHub Pages, configure a form endpoint such as
// Formspree (https://formspree.io/) or Getform (https://getform.io/) and
// provide the endpoint URL below. Both providers accept file uploads.
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/yourFormId"

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");
        const originalText = submitButton.textContent;

        const name = contactForm
            .querySelector('input[type="text"]')
            .value.trim();
        const email = contactForm
            .querySelector('input[type="email"]')
            .value.trim();
        const message = contactForm.querySelector("textarea").value.trim();
        const fileInput = contactForm.querySelector("#attachment");

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Build FormData for POST
        const fd = new FormData();
        fd.append("name", name);
        fd.append("email", email);
        fd.append("message", message);
        if (fileInput && fileInput.files.length > 0) {
            fd.append("attachment", fileInput.files[0]);
        }

        if (!FORM_ENDPOINT) {
            // No endpoint configured — show instructions and fallback to mailto
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`,
            );
            window.location.href = `mailto:info@solarpowercontrols.com?subject=Website%20Contact&body=${mailtoBody}`;
            return;
        }

        try {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            const resp = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: fd,
            });

            if (resp.ok) {
                submitButton.textContent = "Message Sent!";
                contactForm.reset();
            } else {
                console.error("Form submission error:", resp.statusText);
                alert(
                    "There was an error submitting the form. Please try again later.",
                );
                submitButton.textContent = originalText;
            }
        } catch (err) {
            console.error("Form submission failed", err);
            alert("Submission failed. Please try again later.");
            submitButton.textContent = originalText;
        } finally {
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 2500);
        }
    });
}

// Navbar background on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
        navbar.style.backgroundColor = "var(--secondary-color)";
    }
});

// Parallax effect for hero section
const heroSection = document.querySelector(".hero");
if (heroSection) {
    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY;
        if (scrollValue < window.innerHeight) {
            heroSection.style.backgroundPosition = `0% ${scrollValue * 0.5}px`;
        }
    });
}

// Counter animation for stats
const stats = document.querySelectorAll(".stat h3");
const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    let current = 0;
    const increment = target / 50; // Adjust speed by changing divisor

    const updateCount = () => {
        current += increment;
        if (current < target) {
            element.textContent =
                current.toFixed(0) +
                (element.textContent.includes("%")
                    ? "%"
                    : element.textContent.includes("+")
                      ? "+"
                      : "");
            setTimeout(updateCount, 30);
        } else {
            element.textContent = element.textContent; // Reset to original
        }
    };

    updateCount();
};

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".stat h3").forEach((stat) => {
                    animateCounter(stat);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 },
);

const aboutSection = document.querySelector(".about");
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// Smooth hover effects on service cards
document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        // Only collapse the nav on mobile; desktop nav should remain visible.
        if (isMobile && navMenu) {
            navMenu.style.display = "none";
            if (hamburger) {
                hamburger.classList.remove("active");
            }
        }
    });
});

// Handle keyboard navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu && navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        if (hamburger) {
            hamburger.classList.remove("active");
        }
    }
});

console.log("SolarPower & Controls Website - Ready!");
