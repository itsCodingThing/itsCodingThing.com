import { DownArrowIcon, UpArrowIcon } from "./Icons";

type Href = `#${string}`;

export default function ScollArrow({ to, type = "down" }: { to: Href; type?: "up" | "down" }) {
  return (
    <a href={to} className="cursor-pointer animate-bounce text-3xl text-secondary absolute bottom-10 left-1/2">
      {type === "down" ? <DownArrowIcon /> : <UpArrowIcon />}
    </a>
  );
}
