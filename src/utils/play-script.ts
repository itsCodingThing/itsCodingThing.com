import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "@/utils/firebase";

const collectionName = "quotes";

async function getCollectionDocs() {
  const snapshot = await getDocs(collection(firestore, collectionName));

  snapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data().num);
  });
}

getCollectionDocs();
