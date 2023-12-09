import Card from "@/components/Card";
import { fetchGithubRepos } from "@/utils/gh-api";

export default async function ProjectsPage() {
    const repos = await fetchGithubRepos();

    return (
        <section className="mt-[10rem] flex justify-center">
            <div className="md:w-[70rem] flex overflow-x-scroll">
                {repos.showcase.map((repo) => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
}
