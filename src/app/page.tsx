import { Fragment } from "react";
import MagicTyped from "@/components/MagicTyped";

export default function HomePage() {
    return (
        <Fragment>
            <section className="h-[80vh] flex justify-center items-center">
                <div className="h-1/2 w-1/2 flex justify-center items-center">
                    <MagicTyped />
                </div>
            </section>
        </Fragment>
    );
}
