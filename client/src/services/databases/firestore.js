import * as admin from "../config/firebase-admin";

const db = admin.firestore();

const collection = (reference) => {
  return db.collection(reference);
};
