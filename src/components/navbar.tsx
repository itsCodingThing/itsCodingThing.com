"use client";

import type { ReactNode } from "react";
import { adventPro } from "@/utils/fonts";

export default function Navbar(props: { children: ReactNode }) {
  return (
    <nav className="w-screen flex flex-row justify-center md:justify-between mb-5 px-2 text-zinc-50">
      <h1 className={`text-4xl ${adventPro.className} text-secondary`}>{props.children}</h1>
    </nav>
  );
}
