import { z } from "zod";
import { Octokit } from "octokit";
import { JSDOM } from "jsdom";
import logger from "@/utils/logger";

const gh = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });

const GithubRepo = z
    .object({
        id: z.number(),
        name: z.string(),
        full_name: z.string(),
        description: z.preprocess((val) => val ?? "", z.string()),
        html_url: z.string(),
        url: z.string(),
        updated_at: z.preprocess((val) => val ?? "", z.string()),
        topics: z.string().array().default([]),
        og_image_url: z.string().default(""),
        og_image_alt: z.string().default(""),
        language: z.preprocess((val) => val ?? "", z.string()),
    })
    .strip();

export type GithubRepo = z.infer<typeof GithubRepo>;

export async function fetchGithubRepos() {
    const repos: { showcase: GithubRepo[]; others: GithubRepo[] } = { showcase: [], others: [] };

    try {
        const gitResponse = await gh.request("GET /user/repos", {
            headers: {
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });

        gitResponse.data.forEach((repo) => {
            const parse = GithubRepo.safeParse(repo);

            if (parse.success) {
                logger.info(parse.data, "github repo");

                // separate showcase project and non-showcase
                if (parse.data.topics.includes("showcase")) {
                    // filter showcase keyword from topics
                    parse.data.topics = parse.data.topics
                        .filter((val) => val !== "showcase")
                        .map((val) => val.toLocaleLowerCase());

                    repos.showcase.push(parse.data);
                } else {
                    repos.others.push(parse.data);
                }
            } else {
                logger.error(parse.error, "github repo safe parsing error");
            }
        });

        return {
            showcase: await Promise.all(
                repos.showcase.map(async (repo) => {
                    const response = await fetch(repo.html_url);
                    const page = await response.text();
                    const dom = new JSDOM(page);

                    const elem = dom.window.document.querySelector('meta[property="og:image"]');
                    const ogImageUrl = elem?.getAttribute("content") ?? "";

                    logger.info(ogImageUrl, "github repo image url");

                    return { ...repo, og_image_url: ogImageUrl };
                })
            ),
            others: repos.others,
        };
    } catch (err) {
        logger.error(err, "github repo fetching error");
        return repos;
    }
}
