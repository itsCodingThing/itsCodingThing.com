import Link from "next/link";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>{props.children}</span>
            </div>

            <div className="nav-link">
                <Link href="/" className="link">
                    Home
                </Link>

                <Link href="/about" className="link">
                    About
                </Link>

                <Link href="/projects" className="link">
                    Projects
                </Link>
            </div>
        </nav>
    );
}
