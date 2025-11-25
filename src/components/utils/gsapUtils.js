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
        //markers: true,
    };
    
    // Animar el rectángulo
    gsap.fromTo(".sobremi-seccion", 
        { 
            '--rect-x-position': '-170%'
        },
        { 
            '--rect-x-position': '170%',
            ease: "none",
            scrollTrigger: scrollTriggerConfig
        }
    );
});