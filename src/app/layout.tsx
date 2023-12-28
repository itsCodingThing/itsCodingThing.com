import { Metadata } from "next";
import { ReactNode } from "react";

import "../styles/tailwind.css";

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
            <body className="w-screen bg-primary">
                <main className="container mx-auto">{props.children}</main>
            </body>
        </html>
    );
}
