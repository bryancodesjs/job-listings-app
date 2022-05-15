import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyAHonV21Zxs0A5sVPjD1Bo2X426PlL1xrY",
  authDomain: "job-listing-site.firebaseapp.com",
  projectId: "job-listing-site",
  storageBucket: "job-listing-site.appspot.com",
  messagingSenderId: "618593555529",
  appId: "1:618593555529:web:0f5384dbeb89ed7aee9b98",
};

firebase.initializeApp(config);

export default firebase.database();