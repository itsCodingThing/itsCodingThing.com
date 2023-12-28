import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import RenderParticles from "@/components/RenderParticles";

import "../style/tailwind.css";
import "../style/style.css";

export const metadata: Metadata = {
    title: "itsCodingThing",
    description: "my personal website for display my creativity and give an idea about me",
    icons: {
        shortcut: "/assets/itscodingthinglogocircle.png",
    },
};

export default function RootLayout(props: { children: ReactNode; projects: ReactNode; about: ReactNode }) {
    return (
        <html lang="en">
            <body className="w-screen relative overflow-x-hidden">
                <RenderParticles />
                <Navbar>&lt;itscodingthing/&gt;</Navbar>
                <main className="container mx-auto">
                    {props.children}
                    {props.about}
                    {props.projects}
                    <footer className="mt-16 h-80">
                        <h1>footer</h1>
                    </footer>
                </main>
            </body>
        </html>
    );
}
