import Link from "next/link";
import { ReactNode } from "react";
import { adventPro } from "./Fonts";

function LinkBox({ children }: { children: ReactNode }) {
    return <div className="hover:bg-white mx-3 p-3 even:mx-0">{children}</div>;
}

export default function Navbar(props: { children: ReactNode }) {
    return (
        <nav className="flex flex-row justify-between px-5 mb-5">
            <h1 className={`text-4xl ${adventPro.className}`}>{props.children}</h1>

            <div className="flex flex-row text-lg">
                <LinkBox>
                    <Link href="/">Home</Link>
                </LinkBox>

                <LinkBox>
                    <Link href="/about">About</Link>
                </LinkBox>

                <LinkBox>
                    <Link href="/projects">Projects</Link>
                </LinkBox>
            </div>
        </nav>
    );
}
