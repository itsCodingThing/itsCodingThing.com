import { LinkButton } from "@/components/Buttons";
import ScollArrow from "@/components/scroll-arrow";

export default function Socials() {
  return (
    <section id="socials" className="min-h-screen relative">
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-secondary text-2xl mb-6 text-center">FIND ME</p>
        <div className="flex flex-row justify-center gap-4">
          <LinkButton href="https://linkedin.com/in/itscodingthing">LINKEDIN</LinkButton>
          <LinkButton href="https://github.com/itsCodingThing">GITHUB</LinkButton>
          <LinkButton href="https://twitter.com/bhanu1729">TWITTER</LinkButton>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2">
        <ScollArrow to="#quote" />
      </div>
    </section>
  );
}
