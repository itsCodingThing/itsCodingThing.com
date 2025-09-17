import { collection, getDocs, setDoc, doc, writeBatch } from "firebase/firestore/lite";
import { firestore } from "@/utils/firebase";

const collectionName = "quotes";
const batch = writeBatch(firestore);

async function batchUpdateQuoteCollection() {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const size = snapshot.size;
  const batchSize = Math.floor(size / 500);
  const remaining = size - 500 * batchSize;
  let counter = 0;

  for (let i = 0; i <= batchSize; i++) {
    // this one is for remaining items in the collection
    if (i === batchSize) {
      const start = size * batchSize;
      const batchDocs = snapshot.docs.slice(start);

      for (const doc of batchDocs) {
        batch.update(doc.ref, { num: ++counter });
      }

      await batch.commit();

      return;
    }

    const start = i * size;
    const end = start + size;
    const batchDocs = snapshot.docs.slice(start, end);

    for (const doc of batchDocs) {
      batch.update(doc.ref, { num: ++counter });
    }

    await batch.commit();
  }
}

async function getCollectionDocs() {
  const snapshot = await getDocs(collection(firestore, collectionName));

  snapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data().num);
  });
}

getCollectionDocs();
