import Card from "@/components/Card";
import { fetchRepos } from "@/utils/gh-api";

export default async function ProjectsPage() {
    let repos = await fetchRepos();

    return (
        <div className="projects">
            {repos.length === 0 ? (
                <div className="load">
                    <p>Please wait...</p>
                </div>
            ) : (
                <div className="grid">
                    {repos.map((repo) => (
                        <div className="grid-item" key={repo.id}>
                            <Card repo={repo} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
