"use client";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function MagicTyped() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I am a dev", "I am a techie", "I am a foodie", "itsCodingThing"],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h1 className="text-4xl md:text-6xl text-[#f5deb3]">
            <span ref={el}></span>
        </h1>
    );
}
