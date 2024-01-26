importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB81cCapMF7mz8hPY4-UVvqcRasBXmplJY",
  authDomain: "friendlychat1-8c411.firebaseapp.com",
  databaseURL: "https://friendlychat1-8c411-default-rtdb.firebaseio.com",
  projectId: "friendlychat1-8c411",
  storageBucket: "friendlychat1-8c411.appspot.com",
  messagingSenderId: "1061833684843",
  appId: "1:1061833684843:web:9c7c0ca3879834412bfe2e"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});