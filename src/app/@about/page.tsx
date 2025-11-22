import Image from "next/image";
import { robotoCondensed } from "@/utils/fonts";
import ScollArrow from "@/components/scroll-arrow";
import { ExternalLink } from "@/components/buttons";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="h-screen snap-start flex justify-center items-center relative dark:text-white"
		>
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
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
				</div>
				<div
					className={`md:w-3/4 lg:text-left text-center md:p-0 px-12 text-secondary flex flex-col justify-center ${robotoCondensed.className}`}
				>
					<div className="mb-4">
						<span className="text-6xl md:text-8xl font-semibold">Hi,</span>
						<span className="text-4xl md:text-6xl">I&apos;m Bhanu</span>
					</div>
					<div className="text-lg font-medium my-2">
						<p>
							a passionate{" "}
							<span className="text-xl font-bold mb-2">
								&lt;FullStackDeveloper&#47;&gt;
							</span>
							, always eager to embrace new challenges in the dynamic world of
							software development.
						</p>
						<p className="mt-2">
							My genuine enthusiasm for learning drives me to stay abreast of
							the latest tech trends. With a robust work ethic, I strive to
							deliver innovative solutions, making technology exploration not
							just a hobby but a way of life.
						</p>
					</div>
					<div className="grid place-items-center">
						<ExternalLink href="https://linkedin.com/in/itscodingthing">
							HIRE ME
						</ExternalLink>
					</div>
				</div>
			</div>
			<ScollArrow to="#socials" />
		</section>
	);
}
