gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  // Name and title animation with fade and scale on scroll
  gsap.fromTo(
    ".name-title",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".name-title",  // The element to trigger the animation
        start: "top 80%", // Start when 80% of the element is in the viewport
        end: "bottom 20%", // End when 20% of the element leaves the viewport
        scrub: true, // Smooth scrolling effect
      }
    }
  );

  // Profile contact fade-in animation on scroll
  gsap.to(".profile-contact", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".profile-contact",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    }
  });

  // Animating contact items with stagger on scroll
  gsap.fromTo(
    ".contact-item",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact-item",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    }
  );

  // Project cards animate from left to right on scroll
  gsap.fromTo(
    ".project-card",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".project-card",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    }
  );

  // Skills section fade-in and items animation
  gsap.to(".skills-languages", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills-languages",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    }
  });

  gsap.fromTo(
    ".skills ul li",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 1,
      scrollTrigger: {
        trigger: ".skills ul", // Trigger when the list enters the viewport
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    }
  );

  // Languages section list items animation
  gsap.fromTo(
    ".languages ul li",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.3,
      delay: 1.2,
      scrollTrigger: {
        trigger: ".languages ul", // Trigger when the language list enters the viewport
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    }
  );

  // Resume list items animation with stagger on scroll
  gsap.from(".resume-list li", {
    opacity: 1,
    y: 30,
    stagger: 0.2,
    duration: 1,
    delay: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".resume-list", // Trigger when the resume list enters the viewport
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    }
  });
};




