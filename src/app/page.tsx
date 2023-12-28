"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import DownArrow from "@/components/DownArrow";
import MagicTyped from "@/components/MagicTyped";

export default function HomePage() {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <section className="min-h-screen relative">
            <div className="h-screen grid place-items-center">
                <div ref={ref}>
                    <MagicTyped />
                </div>
            </div>
            {inView ? <DownArrow /> : null}
        </section>
    );
}
