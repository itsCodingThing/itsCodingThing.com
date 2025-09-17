import { randomInt } from "node:crypto";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";
import { firestore } from "@/utils/firebase";
import ScollArrow from "@/components/DownArrow";

export default async function QuoteSection() {
  console.log("-------------------------server--------------------------");
  const docSnapShot = await getDoc(doc(firestore, "metadata", "quotes"));
  const size = docSnapShot.data()?.total ?? 10;

  const random = randomInt(size);
  const quotesSnap = await getDocs(query(collection(firestore, "quotes"), where("num", "==", random)));
  const data = quotesSnap.docs[0].data();

  return (
    <section id="quote" className="min-h-screen relative">
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
