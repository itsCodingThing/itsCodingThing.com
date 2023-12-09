"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { adventPro } from "./Fonts";

const socialLinks = [
    {
        href: "https://github.com/itsCodingThing",
        src: "/assets/social/github.svg",
        alt: "github",
    },
    {
        href: "https://linkedin.com/in/itscodingthing",
        src: "/assets/social/linkedin.svg",
        alt: "linkedin",
    },
    {
        href: "https://www.instagram.com/bhanu.singh/",
        src: "/assets/social/instagram.svg",
        alt: "instragam",
    },
    {
        href: "https://twitter.com/bhanu1729",
        src: "/assets/social/twitter.svg",
        alt: "github-icon",
    },
];

function LinkBox({ children }: { children: ReactNode }) {
    return <div className="hover:bg-white hover:text-black mx-3 p-3 even:mx-0">{children}</div>;
}

function SocialLinks({ socials }: { socials: { href: string; src: string; alt: string }[] }) {
    return socials.map((social, i) => {
        return (
            <LinkBox key={i}>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Image src={social.src} alt={social.alt} width={40} height={40} />
                </Link>
            </LinkBox>
        );
    });
}

export default function Navbar(props: { children: ReactNode }) {
    const navRef = useRef(null);
    const navIsInView = useInView(navRef);

    return (
        <nav ref={navRef} className="w-screen flex flex-row justify-center md:justify-between mb-5 px-2 text-zinc-50">
            <h1 className={`text-4xl ${adventPro.className} text-[#f5deb3]`}>{props.children}</h1>

            <div className="hidden md:flex flex-row">
                <SocialLinks socials={socialLinks} />
            </div>

            <div className="hidden md:block absolute">
                <AnimatePresence>
                    {!navIsInView && (
                        <motion.div
                            className={`bg-slate-100 w-fit fixed right-10 top-[40%] rounded-xl z-50`}
                            initial={{ y: "110vh" }}
                            animate={{ y: "0" }}
                            exit={{ y: "110vh" }}
                        >
                            <div className="flex flex-col items-center">
                                <SocialLinks socials={socialLinks} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
