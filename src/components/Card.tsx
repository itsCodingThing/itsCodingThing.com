import { GithubRepo } from "@/utils/gh-api";

export default function Card({ repo }: { repo: GithubRepo }) {
    // const anchor = window.document.createElement("a");
    // anchor.href = repo.html_url;
    // anchor.target = "__blank";
    // anchor.rel = "noreferrer";

    let date = new Date(repo.updated_at);

    // let onClickBtn = () => {
    //     anchor.click();
    // };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
            </div>
            <div className="card-footer">
                <small>{`last updated - ${date.toDateString()}`}</small>
            </div>
        </div>
    );
}
