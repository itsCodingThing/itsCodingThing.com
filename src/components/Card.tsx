import Image from "next/image";
import { GithubRepo } from "@/utils/gh-api";
import { Fragment } from "react";

interface CardProps {
    repo: GithubRepo;
}

export default async function Card({ repo }: CardProps) {
    return (
        <div className="bg-slate-800 rounded-md cursor-pointer">
            <Image
                className="rounded-t-md"
                src={repo.og_image_url ?? "/assets/repo-placeholder.png"}
                alt="no descriptions"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                width={500}
                height={200}
                priority={true}
                placeholder="empty"
            />
            <div className="text-white p-2">
                <h2 className="text-2xl font-bold mb-2">{repo.name}</h2>
                <p className="mb-2">{repo.description}</p>

                {repo.topics.length ? (
                    <Fragment>
                        <p className="font-bold">Technologies</p>
                        <div className="flex">
                            {repo.topics.map((tech, i) => {
                                return (
                                    <Image
                                        key={i}
                                        className="rounded"
                                        src={`/assets/tech/${tech.toLowerCase()}.png`}
                                        alt={tech.toLowerCase()}
                                        width={30}
                                        height={30}
                                        quality={100}
                                    />
                                );
                            })}
                        </div>
                    </Fragment>
                ) : null}
            </div>
        </div>
    );
}
