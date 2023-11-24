import Card from "@/components/Card";
import { fetchGithubRepos } from "@/utils/gh-api";

export default async function ProjectsPage() {
    const repos = await fetchGithubRepos();

    return (
        <section className="h-screen flex justify-center items-center bg-lime-700">
            <div className="grid grid-cols-4 gap-4">
                {repos.showcase.map((repo) => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
}
