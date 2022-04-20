import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCMXAZqAn2x9yh6tmFeCZCKD2zBzBdAL9s",
    authDomain: "warehouseinventory-65e5b.firebaseapp.com",
    databaseURL: "https://warehouseinventory-65e5b-default-rtdb.firebaseio.com",
    projectId: "warehouseinventory-65e5b",
    storageBucket: "warehouseinventory-65e5b.appspot.com",
    messagingSenderId: "319510778159",
    appId: "1:319510778159:web:8f1610c3871713690d51da",
    measurementId: "G-JK3NW4ZLYF"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getDatabase(app)
  