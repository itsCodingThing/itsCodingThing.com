import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/tailwind.css";
import "@/styles/style.css";

export const metadata: Metadata = {
  title: "itsCodingThing",
  description: "my personal website for display my creativity and give an idea about me",
  icons: {
    shortcut: "/assets/itscodingthinglogocircle.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
  projects: ReactNode;
  about: ReactNode;
  quote: ReactNode;
  socials: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth scroll-container">
      <body className="w-screen container mx-auto">
        {props.children}
        {props.about}
        {props.socials}
        {props.quote}
      </body>
    </html>
  );
}
