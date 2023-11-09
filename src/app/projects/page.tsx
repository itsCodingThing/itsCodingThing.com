import Card from "@/components/Card";
import { fetchRepos } from "@/utils/gh-api";

export default async function ProjectsPage() {
    let repos = await fetchRepos();

    return (
        <section className="grid grid-cols-5">
            {repos.map((repo) => (
                <Card key={repo.id} repo={repo} />
            ))}
        </section>
    );
}
