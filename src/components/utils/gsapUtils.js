import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    gsap.ticker.lagSmoothing(0);

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    const scrollTriggerConfig = {
        trigger: ".sobremi-seccion",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    };

    gsap.fromTo(
        ".sobremi-seccion",
        { "--rect-x-position": "-170%" },
        { "--rect-x-position": "170%", ease: "none", scrollTrigger: scrollTriggerConfig }
    );

    gsap.fromTo(
        ".sobremi-seccion",
        { "--rect-x2-position": "170%" },
        { "--rect-x2-position": "-170%", ease: "none", scrollTrigger: scrollTriggerConfig }
    );
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.ticker.lagSmoothing(0);

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    const scrollTriggerConfig = {
        trigger: ".projects-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        //markers: true,
    };

    gsap.fromTo(
        ".projects-section",
        {
            "--rect-x-position": "-170%",
        },
        {
            "--rect-x-position": "170%",
            ease: "none",
            scrollTrigger: scrollTriggerConfig,
        }
    );

    gsap.from(".projects-outer .section-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects-outer",
            start: "top 88%",
        },
    });

    gsap.from(".sobremi-text", {
        y: 35,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".sobremi-text",
            start: "top 88%",
        },
    });

    gsap.from(".skills-wrapper .box", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".skills-wrapper",
            start: "top 90%",
        },
    });

    gsap.from(".sobremi-seccion .section-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".sobremi-seccion",
            start: "top 88%",
        },
    });

    gsap.from(".experience-item", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".experience-timeline",
            start: "top 85%",
        },
    });

    gsap.from(".project-card", {
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".project-cards-grid",
            start: "top 87%",
        },
    });
});
