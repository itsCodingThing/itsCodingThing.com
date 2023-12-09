import Image from "next/image";
import { robotoCondensed } from "@/components/Fonts";

export default function AboutPage() {
    return (
        <section className="md:h-screen flex justify-center items-center">
            <div className="md:p-2 md:w-3/4 h-3/4 grid md:grid-cols-2 bg-zinc-600/30 md:rounded-xl backdrop-blur-sm shadow-xl">
                <div className="flex justify-center items-center">
                    <Image
                        className="border-8 border-yellow-500 rounded"
                        src="/assets/myPic2.jpg"
                        alt="my-pic"
                        width={300}
                        height={500}
                        priority={true}
                    />
                </div>
                <div
                    className={`md:w-3/4 md:text-left text-[#f5deb3] flex flex-col justify-center ${robotoCondensed.className} text-center`}
                >
                    <div className="hidden mb-4 md:flex items-center">
                        <h1 className="text-8xl font-semibold">Hi,</h1>
                        <Image src="/assets/hi2.png" alt="sayHi" width={100} height={100} />
                    </div>
                    <h1 className="text-3xl font-bold my-2">&lt;FullStackDeveloper&#47;&gt;</h1>
                    <div className="text-lg font-medium">
                        <p>
                            I&apos;m Bhanu, and I&apos;m all about embracing new challenges and diving headfirst into
                            the world of software development.
                        </p>
                        <br />
                        <p>
                            I have a genuine passion for learning and enjoy staying up to date with the latest in tech.
                            With a strong work ethic, I work hard to create innovative solutions. Exploring new
                            technology trends is not just a hobby; it&apos;s my way of life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
