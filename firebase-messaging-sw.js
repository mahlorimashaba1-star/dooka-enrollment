importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyBqV9Py9CW9tFMjcYGvucYELmDm3PFUcVQ",
  authDomain: "dooka-staff.firebaseapp.com",
  projectId: "dooka-staff",
  storageBucket: "dooka-staff.firebasestorage.app",
  messagingSenderId: "143844824656",
  appId: "1:143844824656:web:31d9edfeccddb1d8d32355"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'logo.png'
  });
});