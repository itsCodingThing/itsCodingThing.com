import { LinkButton } from "@/components/Buttons";
import ScollArrow from "@/components/DownArrow";

export default function Socials() {
    return (
        <section id="socials" className="min-h-screen relative">
            <div className="h-screen flex flex-col items-center justify-center">
                <p className="text-secondary text-2xl mb-6 text-center">FIND ME</p>
                <div>
                    <LinkButton href="https://linkedin.com/in/itscodingthing">LINKEDIN</LinkButton>
                    <LinkButton href="https://github.com/itsCodingThing">GITHUB</LinkButton>
                    <LinkButton href="https://twitter.com/bhanu1729">TWITTER</LinkButton>
                </div>
            </div>
            <ScollArrow to="#quote" />
        </section>
    );
}
