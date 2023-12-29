import ScollArrow from "@/components/DownArrow";

export default function QuoteSection() {
    return (
        <section id="quote" className="min-h-screen relative">
            <div className="h-screen grid place-items-center">
                <div className="text-secondary text-center p-2 md:text-left md:p-0">
                    <p className="text-3xl">We are all something, but none of us are everything.</p>
                    <small className="text-lg"> - Blaise Pascal</small>
                </div>
            </div>
            <ScollArrow to="#intro" type="up" />
        </section>
    );
}
