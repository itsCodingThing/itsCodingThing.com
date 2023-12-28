"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { adventPro } from "@/utils/Fonts";

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

function SocialLinks({ socials }: { className?: string; socials: { href: string; src: string; alt: string }[] }) {
    return socials.map((social, i) => {
        return (
            <div key={i} className={"hover:text-black mx-3 p-3 even:mx-0"}>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Image src={social.src} alt={social.alt} width={40} height={40} />
                </Link>
            </div>
        );
    });
}

export default function Navbar(props: { children: ReactNode }) {
    return (
        <nav className="w-screen flex flex-row justify-center md:justify-between mb-5 px-2 text-zinc-50">
            <h1 className={`text-4xl ${adventPro.className} text-secondary`}>{props.children}</h1>
        </nav>
    );
}
