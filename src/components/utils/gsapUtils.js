import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    gsap.ticker.lagSmoothing(0);

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
    
    gsap.fromTo(".sobremi-seccion", 
        { 
            '--rect-x-position': '-100%' 
        },
        { 
            '--rect-x-position': '100%',
            ease: "none",
            scrollTrigger: {
                trigger: ".sobremi-seccion",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: true,
            }
        }
    );
});