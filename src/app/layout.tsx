import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { robotoCondensed, robotoSlab } from "@/components/Fonts";

import "../style/tailwind.css";
import "../style/style.css";

export const metadata: Metadata = {
    title: "itsCodingThing",
    description: "my personal website for display my creativity and give an idea about me",
    icons: {
        shortcut: "/itscodingthinglogocircle.png",
    },
};

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${robotoCondensed.className} ${robotoSlab.className}`}>
                <Navbar>&lt;itscodingthing/&gt;</Navbar>
                <main>{props.children}</main>
            </body>
        </html>
    );
}
