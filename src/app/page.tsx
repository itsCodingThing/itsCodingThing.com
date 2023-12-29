import MagicTyped from "@/components/MagicTyped";
import ScollArrow from "@/components/DownArrow";

export default function HomePage() {
    return (
        <section id="intro" className="min-h-screen relative">
            <div className="h-screen grid place-items-center">
                <MagicTyped />
            </div>
            <ScollArrow to="#about" />
        </section>
    );
}
