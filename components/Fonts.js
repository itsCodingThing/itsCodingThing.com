import { Roboto_Condensed, Advent_Pro, Roboto_Slab } from "next/font/google";

export const robotoSlab = Roboto_Slab({
    display: "swap",
    subsets: ["latin"],
});

export const robotoCondensed = Roboto_Condensed({
    weight: ["300", "700"],
    display: "swap",
    subsets: ["latin"],
});

export const adventPro = Advent_Pro({
    weight: "700",
    display: "swap",
    subsets: ["latin"],
});
