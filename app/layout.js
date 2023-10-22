import "../style/style.css";

import Navbar from "../components/Navbar.js";
import { robotoCondensed, robotoSlab, adventPro } from "../components/Fonts.js";

export const metadata = {
    title: "itsCodingThing",
    description: "my personal website for display my creativity and give an idea about me",
    icons: {
        shortcut: "/itscodingthinglogocircle.png",
        stylesheet:
            "https://fonts.googleapis.com/css?family=Advent+Pro:700|Roboto+Slab|Roboto+Condensed:300,700&display=swap",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${robotoCondensed.className} ${robotoSlab.className} ${adventPro.className}`}>
                <Navbar>&lt;itscodingthing/&gt;</Navbar>
                {children}
            </body>
        </html>
    );
}
