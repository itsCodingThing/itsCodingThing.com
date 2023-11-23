import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { adventPro } from "./Fonts";

function LinkBox({ children }: { children: ReactNode }) {
    return <div className="hover:bg-white hover:text-black mx-3 p-3 even:mx-0">{children}</div>;
}

export default function Navbar(props: { children: ReactNode }) {
    return (
        <nav className="flex flex-row justify-between px-5 mb-5 text-zinc-50">
            <h1 className={`text-4xl ${adventPro.className}`}>{props.children}</h1>

            <div className="flex flex-row text-lg">
                <LinkBox>
                    <Link href="https://github.com/itsCodingThing" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/social/github.svg" alt="github-icon" width={40} height={40} />
                    </Link>
                </LinkBox>

                <LinkBox>
                    <Link href="https://linkedin.com/in/itscodingthing" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/social/linkedin.svg" alt="github-icon" width={40} height={40} />
                    </Link>
                </LinkBox>

                <LinkBox>
                    <Link href="https://www.instagram.com/bhanu.singh/" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/social/instagram.svg" alt="github-icon" width={40} height={40} />
                    </Link>
                </LinkBox>

                {/* <LinkBox>
                    <Link href="https://twitter.com/bhanu1729" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/social/twitter.svg" alt="github-icon" width={40} height={40} />
                    </Link>
                </LinkBox> */}
            </div>
        </nav>
    );
}
