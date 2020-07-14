// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
"use strict";
// Cloud Function, dialogflow and dialogflow-fulfillment SDK
const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion } = require("dialogflow-fulfillment");
process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

// Firebase Admin SDK
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// Telegram SDK
const Telegram = require("telegram-bot-api");
const api = new Telegram({
  token: "1184372475:AAESsH2FV5Fz3tz3BdAHAzSlJ9oe88euAb8",
});

exports.telegram = functions.https.onRequest((req, res) => {
  api
    .getMe()
    .then((respon) => res.json({ respon }))
    .catch((error) => null);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));
    let data = request.body.originalDetectIntentRequest;

    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function telegramWebHookHandler(agent) {
      let first_name = data.payload.data.from.first_name;
      let last_name = data.payload.data.from.last_name;
      let question = data.payload.data.text;
      const citiesRef = db.collection("cities").doc("BJ");

      agent.add(
        `Halo ${first_name} ${last_name}, Terimakasih telah bertanya tentang. '${question}'`
      );

      return citiesRef
        .get()
        .then((respon) => {
          if (!respon.exists) {
            agent.add("Maaf, Kami belum bisa menampilkan datanya..");
          } else {
            agent.add(respon.data().name);
          }
          return Promise.resolve("Read complete");
        })
        .catch((error) => agent.add(error));

      // .get()
      // .then((respon) => {
      //   if (!respon.exists) {
      //     agent.add("Maaf Kami Belum bisa menampilkan data");
      //   } else {
      //     agent.add(`${respon.data()}`);
      //   }
      //   return Promise.resolve("Read complete");
      // })
      // .catch((error) => agent.add(`${error}`));
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", welcome);
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("telegram-webhook", telegramWebHookHandler);
    // intentMap.set('your intent name here', googleAssistantHandler);
    agent.handleRequest(intentMap);
  }
);
