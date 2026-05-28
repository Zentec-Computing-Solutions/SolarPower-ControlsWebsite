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

const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");
const forminit = typeof Forminit !== "undefined" ? new Forminit() : null;

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");
        const originalText = submitButton.textContent;

        if (!forminit) {
            alert("Forminit SDK failed to load. Please try again later.");
            return;
        }

        try {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
            if (contactFormStatus) {
                contactFormStatus.textContent = "";
            }

            const { error, redirectUrl } = await forminit.submit(
                "za2j4rh06a8",
                new FormData(contactForm),
            );

            if (!error) {
                submitButton.textContent = "Message Sent!";
                if (contactFormStatus) {
                    contactFormStatus.textContent =
                        "Thanks, your message has been sent.";
                }
                contactForm.reset();
            } else {
                console.error("Forminit submission error:", error);
                if (contactFormStatus) {
                    contactFormStatus.textContent =
                        error.message ||
                        "There was an error submitting the form. Please try again later.";
                }
                submitButton.textContent = originalText;
            }
        } catch (err) {
            console.error("Forminit submission failed", err);
            if (contactFormStatus) {
                contactFormStatus.textContent =
                    "Submission failed. Please try again later.";
            }
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
