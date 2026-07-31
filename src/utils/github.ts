import { Octokit } from "octokit";
import z from "zod";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const GithubUserSchema = z.object({
	user: z.object({
		pinnedItems: z.object({
			nodes: z.array(
				z.object({
					name: z.string(),
					description: z.string(),
					url: z.string(),
					stargazerCount: z.number(),
					primaryLanguage: z.object({
						name: z.string(),
					}),
				}),
			),
		}),
	}),
});

export type PinnedRepo = z.output<
	typeof GithubUserSchema
>["user"]["pinnedItems"]["nodes"][number];

export async function getPinnedRepos(username: string) {
	const result = await octokit.graphql(
		`
      query getPinned($login: String!) {
        user(login: $login) {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                stargazerCount
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `,
		{
			login: username,
		},
	);

	const { user } = await GithubUserSchema.parseAsync(result);

	return user.pinnedItems.nodes;
}
