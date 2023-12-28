"use client";

import { motion } from "framer-motion";

export default function DownArrow() {
    return (
        <motion.div
            transition={{
                ease: "easeInOut",
                repeat: Infinity,
                duration: 2,
            }}
            initial={{
                y: 0,
                rotate: 45,
            }}
            animate={{ y: [0, 10, 0], rotate: 45 }}
            className="cursor-pointer h-[3rem] w-[3rem] absolute bottom-10 left-1/2 border-secondary border-r-2 border-b-2"
        />
    );
}
