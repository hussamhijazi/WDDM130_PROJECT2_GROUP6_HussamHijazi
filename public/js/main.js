// 1. Hover Effect: Enlarge logo on hover
const logo = document.querySelector('.logo'); 
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.2)'; 
    logo.style.transition = 'transform 0.3s ease'; 
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)'; 
});

// 2. Nav Items: Enlarge and Change Color on Hover
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); 

    navLinks.forEach(link => {
        // On mouse enter: enlarge and change color
        link.addEventListener("mouseover", () => {
            link.style.color = "red";
            link.style.transform = "scale(1.2)";
            link.style.transition = "all 0.3s ease"; 
        });

        // On mouse leave: reset to original size and color
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.transform = "scale(1)";
        });
    });
});

// 3. Hero Heading: Update Dynamic Text
document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelector(".hero-text h1");

    // Array of dynamic messages
    const messages = [
        "Welcome to MJ Interior Design",
        "Your Dream Interiors Start Here"
    ];

    let currentMessageIndex = 0;

    // Function to update the heading text
    const updateHeroHeading = () => {
        heroHeading.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length; 
    };

    // Update hero heading every 3 seconds
    setInterval(updateHeroHeading, 3000);
});

// 4. Footer: Update Year Dynamically
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector(".custom-footer p"); 
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} MJ Interior Design Studio. All rights reserved.`; 
});

// 5. Add hover effect to Service cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)"; 
            card.style.transition = "transform 0.3s ease";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)"; 
        });
    });
});

// 6. Card Flip Effect: Show Hidden Content on Click
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const inner = card.querySelector(".card-inner");
            inner.classList.toggle("flipped"); 
        });
    });
});

// 7. Hover Effect: Scale and Add Style to Project Cards
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item"); 

    projectItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            const projectImage = item.querySelector(".project-image"); 
            const projectContent = item.querySelector(".project-content");
            
            projectImage.style.transform = "rotate(3deg) scale(1.1)";
            projectImage.style.transition = "transform 0.3s ease";

            projectContent.style.backgroundColor = "rgba(255, 100, 100, 0.2)"; 
            projectContent.style.transition = "background-color 0.3s ease";
        });

        // Reset style on mouse leave
        item.addEventListener("mouseleave", () => {
            const projectImage = item.querySelector(".project-image");
            const projectContent = item.querySelector(".project-content");
            
            projectImage.style.transform = "rotate(0) scale(1)";
            projectContent.style.backgroundColor = "transparent"; 
        });
    });
});

// 8. Gallery Hover and Lightbox Effect
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img"); 
    const body = document.querySelector("body");

    galleryItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });

        item.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            body.appendChild(lightbox);

            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt;
            img.classList.add("lightbox-image");
            lightbox.appendChild(img);

            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });
});

// 9. Animate Gallery Grid on Load (fade-in animation for gallery items when the page loads)
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 100); 
    });
});

// 10. Testimonial Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const prevButton = document.querySelector(".carousel-prev"); 
    const nextButton = document.querySelector(".carousel-next"); 

    let currentIndex = 0; 

    const updateActiveCard = () => {
        testimonialCards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add("active"); 
                card.style.display = "block"; 
            } else {
                card.classList.remove("active");
                card.style.display = "none"; 
            }
        });
    };

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateActiveCard();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length; 
        updateActiveCard();
    });

    updateActiveCard();
});


// 11. Highlight the hovered team member
document.addEventListener("DOMContentLoaded", () => {
    const teamItems = document.querySelectorAll(".team-item");

    teamItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            teamItems.forEach(other => {
                if (other !== item) {
                    other.style.filter = "blur(2px)";
                    other.style.opacity = "0.6";
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            teamItems.forEach(other => {
                other.style.filter = "none";
                other.style.opacity = "1";
            });
        });
    });
});

// 12. Reactions for Blog Posts
document.addEventListener("DOMContentLoaded", () => {
    const reactionButtons = document.querySelectorAll(".reaction-btn");

    reactionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const count = button.querySelector(".reaction-count");
            count.textContent = parseInt(count.textContent) + 1;
        });
    });
});

// 13. Collapsible FAQ
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (question.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});

// 14. Dynamic Search for FAQs
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    const searchInput = document.querySelector(".faq-search");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isOpen = answer.classList.contains("open");

            faqItems.forEach(otherItem => {
                otherItem.querySelector(".faq-answer").classList.remove("open");
            });

            if (!isOpen) {
                answer.classList.add("open");
            }
        });
    });

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();

        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question").textContent.toLowerCase();
            const answer = item.querySelector(".faq-answer").textContent.toLowerCase();

            if (question.includes(query) || answer.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // 15. Form Validation
    // Validate that all fields are filled and the email is properly formatted.
    function validateForm(name, email, message) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (name === "" || message === "" || !emailRegex.test(email)) {
            return false;
        }
        return true;
    }

    // 16. Simulated Submission
    // Simulate a server interaction with a success rate of 80%.
    function simulateSubmission(callback) {
        const isSuccess = Math.random() < 0.8; 
        setTimeout(() => {
            callback(isSuccess); 
        }, 2000);
    }

    // 17. Loading Spinner
    // Show the loading spinner while the form is being submitted.
    function showLoadingSpinner() {
        const submitButton = document.querySelector(".form-group-submit button");
        submitButton.innerHTML = "Sending..."; 
        submitButton.disabled = true; 
    }

    // Hide the loading spinner after submission.
    function hideLoadingSpinner() {
        const submitButton = document.querySelector(".form-group-submit button");
        submitButton.innerHTML = "Send Message"; 
        submitButton.disabled = false; 
    }

    // 18. Success and Error Message Display
    // Display the appropriate message based on the result of the simulated submission.
    function displayMessage(isSuccess) {
        if (isSuccess) {
            successMessage.style.display = "block"; 
            errorMessage.style.display = "none"; 
            contactForm.reset(); 
        } else {
            errorMessage.textContent = "Oops! There was an error sending your message. Please try again later.";
            errorMessage.style.display = "block"; 
            successMessage.style.display = "none"; 
        }
    }

    // 19. Reset Form After Submission
    // Reset form fields when the submission is successful.
    function resetForm() {
        contactForm.reset();
    }

    // Form submission event listener
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Hide previous messages
        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate form fields
        if (!validateForm(name, email, message)) {
            errorMessage.textContent = "Please fill in all fields with valid information.";
            errorMessage.style.display = "block"; 
            return; 
        }

        // Simulate form submission
        showLoadingSpinner(); 
        simulateSubmission((isSuccess) => {
            hideLoadingSpinner(); 
            displayMessage(isSuccess); 
        });
    });
});


// 20. Copy-to-Clipboard Feature for Contact Info
document.addEventListener("DOMContentLoaded", () => {
    const contactInfoItems = document.querySelectorAll(".contact-info li p");

    contactInfoItems.forEach(item => {
        item.addEventListener("click", () => {
            const textToCopy = item.textContent.split(": ")[1]; 
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const copiedMessage = document.createElement("span");
                    copiedMessage.textContent = "Copied!";
                    copiedMessage.style.color = "#155724"; 
                    copiedMessage.style.marginLeft = "10px"; 
                    copiedMessage.style.fontSize = "0.9rem";

                    item.appendChild(copiedMessage);

                    item.style.backgroundColor = "#d4edda"; 
                    item.style.color = "#155724"; 

                    setTimeout(() => {
                        copiedMessage.remove(); 
                        item.style.backgroundColor = ""; 
                        item.style.color = ""; 
                    }, 1500);
                }).catch(err => {
                    console.error("Failed to copy text: ", err);
                });
            }
        });

        item.style.cursor = "pointer";
    });
});


