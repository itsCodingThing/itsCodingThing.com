import Image from "next/image";
import { robotoCondensed } from "@/utils/Fonts";

export default function AboutPage() {
    return (
        <section id="about" className="h-screen flex justify-center items-center">
            <div className="md:w-3/4 h-3/4 grid xl:grid-cols-2">
                <div className="flex justify-center items-center">
                    <div className="h-fit p-2 rounded-full border-4 border-secondary">
                        <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-full overflow-hidden">
                            <Image
                                className="grayscale"
                                src="/assets/me.jpeg"
                                alt="my-pic"
                                quality={100}
                                priority
                                fill
                                sizes="100px"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`md:w-3/4 md:text-left md:p-0 px-12 text-secondary md:flex flex-col justify-center ${robotoCondensed.className} text-center`}
                >
                    <div className="mb-4">
                        <span className="text-6xl md:text-8xl font-semibold">Hi,</span>
                        <span className="text-4xl md:text-6xl">I&apos;m Bhanu</span>
                    </div>

                    <div className="text-lg font-medium">
                        <p>
                            a passionate <span className="text-xl font-bold mb-2">&lt;FullStackDeveloper&#47;&gt;</span>
                            , always eager to embrace new challenges in the dynamic world of software development.
                        </p>
                        <p className="mt-2">
                            My genuine enthusiasm for learning drives me to stay abreast of the latest tech trends. With
                            a robust work ethic, I strive to deliver innovative solutions, making technology exploration
                            not just a hobby but a way of life.
                        </p>
                    </div>
                    <br />
                    <div className="grid place-items-center">
                        <a
                            href="https://linkedin.com/in/itscodingthing"
                            className="max-w-fit px-4 py-2 m-2 border-2 border-secondary hover:bg-secondary hover:text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HIRE ME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
