import Link from "next/link";

export default (props) => {
    return (
        <nav className="navbar bg-transparent navbar-light">
            <span className="navbar-brand mb-0 h1">
                {props.children}
            </span>

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
                    position: absolute;
                    top: 0;
                    padding: 0 1.5rem 0 1.5rem;
                    width: 100%;

                    flex-direction: column;
                    justify-content: center;
                }

                .nav-link {
                    padding: 0;
                }

                a {
                    padding: 0;
                    color: black;
                }
                                
                .nav-link a {
                    display: block;
                    float: left;

                    padding: .5rem;          
                    text-decoration: none;
                }
                
                .nav-link a:hover {
                    background-color: #17b0cf;
                }

                .navbar-brand {
                    font-family: 'Advent Pro', sans-serif;
                }

                @media(min-width: 576px) {
                    .navbar {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
            
            `}</style>
        </nav>
    );
};