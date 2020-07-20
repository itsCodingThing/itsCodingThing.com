import Head from "next/head";

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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      {children}
      <style jsx>{`
        .theme {
          background-color: #283043;
          height: 100vh;
          font-family: "Roboto Slab", serif;
        }
      `}</style>
    </div>
  );
}
