"use client";

import { motion } from "framer-motion";
import { DownArrowIcon, UpArrowIcon } from "./Icons";

type THref = `#${string}`;

export default function ScollArrow({ to, type = "down" }: { to: THref; type?: "up" | "down" }) {
    return (
        <motion.a
            href={to}
            className="cursor-pointer text-3xl text-secondary absolute bottom-10 left-1/2"
            transition={{
                ease: "easeInOut",
                repeat: Infinity,
                duration: 2,
            }}
            initial={{
                y: 0,
            }}
            animate={{ y: [0, 10, 0] }}
        >
            {type === "down" ? <DownArrowIcon /> : <UpArrowIcon />}
        </motion.a>
    );
}
