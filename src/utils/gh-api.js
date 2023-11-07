import GitHub from "github-api";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const gh = new GitHub({ token });

export async function fetchRepos() {
    console.log(token);

    let me = gh.getUser();

    try {
        let { data } = await me.listRepos();

        return data;
    } catch (error) {
        console.log(error);

        return [];
    }
}
