import GitHub from "github-api";

const gh = new GitHub({ token: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

const fetchRepos = async () => {
  let me = gh.getUser();
  let { data } = await me.listRepos();

  return data;
};

export default fetchRepos;
