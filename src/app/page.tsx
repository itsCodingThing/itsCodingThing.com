import { Fragment } from "react";
import MagicTyped from "@/components/MagicTyped";

export default function HomePage() {
    return (
        <Fragment>
            <section className="h-[80vh]">
                <div className="bg-red-400 h-full flex justify-center items-center ">
                    <MagicTyped />
                </div>
            </section>
        </Fragment>
    );
}
