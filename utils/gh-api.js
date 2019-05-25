import GitHub from "github-api";
import key from "./config.json";

const gh = new GitHub({ token: key.token });

const fetchRepos = async () => {
  let me = gh.getUser();
  let { data } = await me.listRepos();
  console.log(data);

  return data;
};

export default fetchRepos;
