import GitHub from "github-api";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const gh = new GitHub({ token });

export interface GithubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    avatar_url: string;
    html_url: string;
    url: string;
    updated_at: string;
}

export async function fetchRepos() {
    let me = gh.getUser();

    try {
        let { data } = await me.listRepos();

        return data as GithubRepo[];
    } catch (error) {
        console.log(error);
        return [];
    }
}
