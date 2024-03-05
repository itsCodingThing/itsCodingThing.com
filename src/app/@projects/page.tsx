import Card from "@/components/Card";
import { fetchGithubRepos } from "@/utils/gh-api";

export default async function ProjectsSection() {
    // const repos = await fetchGithubRepos();

    return (
        <section className="mt-[5rem] flex justify-center">
            <div className="md:w-[70rem]">
                {/*                 <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {repos.showcase.map((repo) => (
                        <Card key={repo.id} repo={repo} />
                    ))}
                </div>
 */}
            </div>
        </section>
    );
}
