import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="grid grid-cols-2">
            <div className="flex justify-center items-center">
                <Image
                    className="border-8 border-yellow-500 rounded"
                    src="/myPic2-fixed.jpg"
                    alt="my-pic"
                    width={300}
                    height={500}
                />
            </div>
            <div className="say-something">
                <div className="hiContainer">
                    <h1 className="display-2 say-heading">Hi,</h1>
                    <Image src="/hi2.png" alt="sayHi" width={100} height={100} />
                </div>
                <div className="description">
                    <p>
                        I&apos;m Bhanu, and I&apos;m all about embracing new challenges and diving headfirst into the
                        world of software development.
                    </p>
                    <br />
                    <p>
                        I have a genuine passion for learning and enjoy staying up to date with the latest in tech. With
                        a strong work ethic, I work hard to create innovative solutions. Exploring new technology trends
                        is not just a hobby; it&apos;s my way of life.
                    </p>
                </div>
                <div className="social-icons">
                    <span className="facebook">
                        <a href="https://www.facebook.com/bhanu1729" target="_blank" rel="noopener noreferrer">
                            <Image src="/facebook.svg" alt="facebook-icon" width={50} height={50} />
                        </a>
                    </span>
                    <span className="instagram">
                        <a href="https://www.instagram.com/bhanu.singh/" target="_blank" rel="noopener noreferrer">
                            <Image src="/instagram.svg" alt="insta-icon" width={50} height={50} />
                        </a>
                    </span>
                    <span className="github">
                        <a href="https://github.com/itsCodingThing" target="_blank" rel="noopener noreferrer">
                            <Image src="/github.svg" alt="github-icon" width={50} height={50} />
                        </a>
                    </span>
                    <span className="twitter">
                        <a href="https://twitter.com/bhanu1729" target="_blank" rel="noopener noreferrer">
                            <Image src="/twitter.svg" alt="twitter-icon" width={50} height={50} />
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}
