import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAUfQfNtxVwQbtN-vn8k8FiRv6eZKai2OM",
    authDomain: "canteen-b2cdd.firebaseapp.com",
    projectId: "canteen-b2cdd",
    storageBucket: "canteen-b2cdd.appspot.com",
    messagingSenderId: "1049404479787",
    appId: "1:1049404479787:web:8fc395e00ac9ad294d8d6e",
    measurementId: "G-R7DR54CYBF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();