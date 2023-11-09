"use client";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function MagicTyped() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I am a developer", "I am a techie", "I am a foodie", "itsCodingThing"],
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
        <h1 className="typed">
            <span ref={el}></span>
        </h1>
    );
}
