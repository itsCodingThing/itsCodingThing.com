import Image from "next/image";
import { GithubRepo } from "@/utils/gh-api";

interface CardProps {
    repo: GithubRepo;
}

export default async function Card({ repo }: CardProps) {
    return (
        <div className="h-full bg-slate-800 rounded-md cursor-pointer relative">
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
            <div className="text-[#f5deb3] p-2">
                <h2 className="text-2xl font-bold mb-2">{repo.name}</h2>
                <p className="mb-2">{repo.description}</p>
            </div>
            <div className="bg-zinc-600/30 rounded-md backdrop-blur-sm shadow-xl z-10 h-full w-full absolute top-0 flex justify-center items-center">
                <h3 className="text-3xl">visit</h3>
            </div>
        </div>
    );
}
