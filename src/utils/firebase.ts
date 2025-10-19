import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { randomInt } from "node:crypto";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";
import z from "zod";

const config = await z.parseAsync(z.string(), process.env.FIREBASE_CONFIG);
const app = initializeApp(JSON.parse(config));

export const firestore = getFirestore(app);

interface Quote {
  title: string;
  content: string;
  num: number;
}

export async function getRandomQuote() {
  const docSnapShot = await getDoc(doc(firestore, "metadata", "quotes"));
  const size = docSnapShot.data()?.total ?? 10;

  const random = randomInt(size);
  const quotesSnap = await getDocs(query(collection(firestore, "quotes"), where("num", "==", random)));
  const data = quotesSnap.docs[0].data() as Quote;

  return data;
}
