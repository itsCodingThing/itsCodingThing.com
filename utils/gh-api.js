import GitHub from "github-api";
import key from "./config.json";

const gh = new GitHub({ token: key.token });

const getRandrepo = (repos, limit) => {
  let limitRepo = [];
  for (let i = 0; i <= limit; i++) {
    limitRepo[i] = repos[i];
  }
  return limitRepo;
};

const fetchRepos = async () => {
  let me = gh.getUser();
  let { data } = await me.listRepos();
  return getRandrepo(data, 5);
};

export default fetchRepos;
