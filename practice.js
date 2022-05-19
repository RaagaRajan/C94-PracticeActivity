
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAhlGkRVwR4wLijA2D-vhRf6vV6thumyKM",
  authDomain: "class93-kwitter.firebaseapp.com",
  databaseURL: "https://class93-kwitter-default-rtdb.firebaseio.com",
  projectId: "class93-kwitter",
  storageBucket: "class93-kwitter.appspot.com",
  messagingSenderId: "137877376732",
  appId: "1:137877376732:web:d704dd30c13935f935ae19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "I am feeling sleepy"
    });
}