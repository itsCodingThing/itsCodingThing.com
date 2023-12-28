"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { GithubRepo } from "@/utils/gh-api";
import Link from "next/link";

interface CardProps {
    repo: GithubRepo;
}

export default function Card({ repo }: CardProps) {
    const [isHover, setHover] = useState(false);

    return (
        <motion.div
            className="p-6 md:p-0"
            onHoverStart={() => {
                setHover(true);
            }}
            onHoverEnd={() => setHover(false)}
        >
            <div className="h-full w-80 md:w-64 md:ml-2 bg-slate-800 rounded-md cursor-pointer relative">
                <Image
                    className="rounded-t-md"
                    src={repo.og_image_url ?? "/assets/repo-placeholder.png"}
                    alt="no descriptions"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    width={500}
                    height={200}
                    priority={true}
                    placeholder="empty"
                />
                <div className="text-[#f5deb3] p-2">
                    <h2 className="text-2xl font-bold mb-2 text-wrap">{repo.name}</h2>
                    <p className="mb-2">{repo.description}</p>
                </div>
                {isHover ? (
                    <Link href={repo.html_url} target="_blank" rel="noopener">
                        <div className="bg-zinc-600/30 rounded-md backdrop-blur-sm shadow-xl z-10 h-full w-full absolute top-0 flex justify-center items-center">
                            <span className="rounded-md border-4 px-2 py-1">
                                <h3 className="text-3xl">visit</h3>
                            </span>
                        </div>
                    </Link>
                ) : null}
            </div>
        </motion.div>
    );
}
