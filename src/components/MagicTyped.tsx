"use client";
import Typed from "typed.js";
import { useRef, useEffect, ElementRef } from "react";

export default function MagicTyped() {
    const el = useRef<ElementRef<"span">>(null);

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
        <h1 className="text-4xl md:text-6xl text-secondary">
            <span ref={el}></span>
        </h1>
    );
}
