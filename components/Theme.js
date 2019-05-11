import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../styles/App.css";

export default ({ children }) => {
  return (
    <div className="theme">
      <Head>
        <title>itsCodingThing</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Advent+Pro:700|Roboto+Slab|Roboto+Condensed:300,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
      </Head>
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
};
