import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>{props.children}</span>
      </div>

      <div className="nav-link">
        <Link href="/">
          <a className="link">Home</a>
        </Link>

        <Link href="/about">
          <a className="link">About</a>
        </Link>

        <Link href="/projects">
          <a className="link">Projects</a>
        </Link>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          padding: 0 1.5rem 0 1.5rem;
          width: 100%;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .navbar-brand {
          height: 100%;
        }

        .navbar-brand span {
          color: whitesmoke;
          font-family: "Advent Pro", sans-serif;
        }

        .navbar-brand,
        .nav-link a {
          padding: 0.5rem;
          margin: 0 0.5rem;
        }

        .nav-link a {
          display: inline-block;
          color: whitesmoke;
          transition: all 0.5s ease 0s;

          text-decoration: none;
        }

        .nav-link a:hover,
        .nav-link a:focus,
        .nav-link a:active {
          background-color: #17b0cf;
        }

        @media (max-width: 576px) {
          .navbar {
            flex-direction: column;
            align-items: center;
            background-color: #283043;
          }

          .navbar-brand {
            height: 100%;
            width: fit-content;
          }
        }
      `}</style>
    </nav>
  );
}
