import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuRGbBuPF6Kve8KH63m3MPMPXdPcATlRM",
  authDomain: "crwn-db-react-ecommerce.firebaseapp.com",
  databaseURL: "https://crwn-db-react-ecommerce.firebaseio.com",
  projectId: "crwn-db-react-ecommerce",
  storageBucket: "",
  messagingSenderId: "933379169856",
  appId: "1:933379169856:web:0a1fab504449f388"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
