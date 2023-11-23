import { Fragment } from "react";
import MagicTyped from "@/components/MagicTyped";

export default function HomePage() {
    return (
        <Fragment>
            <section className="h-[80vh] flex justify-center items-center text-white text-6xl">
                <MagicTyped />
            </section>
        </Fragment>
    );
}
