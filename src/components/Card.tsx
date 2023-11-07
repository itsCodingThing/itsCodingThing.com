"use client";

export default function Card({ repo }) {
    const anchor = window.document.createElement("a");
    anchor.href = repo.html_url;
    anchor.target = "__blank";
    anchor.rel = "noreferrer";

    let date = new Date(repo.updated_at);

    let onClickBtn = () => {
        anchor.click();
    };

    return (
        <div className="card" onClick={onClickBtn}>
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
            </div>
            <div className="card-footer">
                <small>{`last updated - ${date.toDateString()}`}</small>
            </div>

            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background-color: pink;
                    height: 100%;
                    width: auto;
                    padding: 0.4rem 0.8rem;
                    border-radius: 0.5rem;
                    cursor: pointer;

                    transition: all 0.2s ease 0s;
                }

                .card:hover {
                    box-shadow: 0px 0px 8px 5px rgba(255, 255, 255, 0.4);
                    transform: translate(5px, -5px) scale(1.05);
                }

                .card:focus,
                .card:active {
                    box-shadow: none;
                    transform: translate(0) scale(1);
                }

                .card-body > h5 {
                }

                .card-body > p {
                    padding-top: 0.5rem;
                    padding-bottom: 1rem;
                    font-size: 0.6rem;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    color: blue;
                }

                .card-footer > small,
                .card-footer > a {
                    font-size: 0.7rem;
                }

                @media (max-width: 567px) {
                    .card:focus,
                    .card:active,
                    .card:hover {
                        box-shadow: none;
                        transform: none;
                    }
                }
            `}</style>
        </div>
    );
}