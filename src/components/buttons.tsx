"use client";
import { useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function ExternalLinkButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="max-w-fit px-4 py-2 border-2 rounded text-secondary border-secondary hover:bg-secondary hover:text-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function ToggleButton() {
  const [darkMode, setToggle] = useState(true);

  return (
    <div
      className={`w-[4rem] h-5 bg-secondary rounded-full cursor-pointer relative`}
      onClick={() => {
        setToggle(!darkMode);
      }}
    >
      {darkMode ? (
        <MoonIcon className={`h-5 w-5 rounded-full absolute top-1/2 right-0 -translate-y-1/2`} />
      ) : (
        <SunIcon className={`h-5 w-5 rounded-full absolute top-1/2 left-0 -translate-y-1/2`} />
      )}
    </div>
  );
}
