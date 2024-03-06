import ScollArrow from "@/components/DownArrow";
import MagicTyping from "@/components/MagicTyping";

export default function HomePage() {
    return (
        <section id="intro" className="min-h-screen relative">
            <div className="h-screen grid place-items-center">
                <MagicTyping lines={["itsCodingThing", "I am developer"]}/>
            </div>
            <ScollArrow to="#about" />
        </section>
    );
}
