import Head from "next/head";
import Navbar from "./Navbar";

export default function Theme({ children }) {
  return (
    <div className="theme">
      <Head>
        <title>itsCodingThing</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="my personal website for display my creativity and give an idea about me"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Advent+Pro:700|Roboto+Slab|Roboto+Condensed:300,700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/itscodingthinglogocircle.png" />
      </Head>
      <Navbar>&lt;itscodingthing/&gt;</Navbar>

      {children}
      <style jsx>{`
        .theme {
          background-color: #283043;
          height: 100%;
          font-family: "Roboto Slab", serif;
        }
      `}</style>
    </div>
  );
}
