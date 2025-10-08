import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

 gsap.registerPlugin(SplitText);

const techWord = document.querySelector(".word-3d-tech");
const cursor = document.querySelector(".cursor");
const listTech = ['PHP', 'JavaScript', 'Java', 'React'];
let wordIndex = 0;

gsap.to(cursor, { opacity: 0, ease: "power2.inOut", repeat: -1 })

function typeAndUntype() {
    const word = listTech[wordIndex];
    techWord.innerHTML = word;
    const split = new SplitText(techWord, { type: "chars" });
    split.split({content: word});

    gsap.set(split.chars, { visibility: 'hidden' });

    const tl = gsap.timeline({
        onComplete: () => {
            split.revert();
            wordIndex = (wordIndex + 1) % listTech.length;
            typeAndUntype()
        }
    });

    tl.to(split.chars, {
        duration: 0,
        visibility: 'visible',
        stagger: 0.8
    })
    .to(split.chars, {
        duration: 0,
        visibility: 'hidden',
        stagger: {
            from: "end",
            amount: 1.5,
        }
    }, "+=1.5");
}

typeAndUntype();