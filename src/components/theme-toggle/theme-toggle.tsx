"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "../icons";


export default function ThemeToggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      type="button"
      className="cursor-pointer border-2 rounded-full fixed top-0 right-0 p-1 m-1"
      onClick={() => {
        console.log(toggle);

        setToggle((prev) => !prev);
      }}
    >
      {toggle ? <SunIcon className="w-15 h-15 animate-wiggle" /> : <MoonIcon className="w-15 h-15 animate-wiggle" />}
    </button>
  );
}
