const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://telegram-chatbot-6d2d0.firebaseio.com",
});

module.exports = admin;
