import { getRandomQuote } from "@/utils/firebase";
import ScollArrow from "@/components/scroll-arrow";

export default async function QuoteSection() {
  const data = await getRandomQuote();

  return (
    <section id="quote" className="min-h-screen relative md:px-10">
      <div className="h-screen grid place-items-center">
        <div className="text-secondary text-center p-2 md:text-left md:p-0">
          <p className="text-3xl">{data.content}</p>
          <small className="text-lg"> - {data.title}</small>
        </div>
      </div>
      <ScollArrow to="#intro" type="up" />
    </section>
  );
}
