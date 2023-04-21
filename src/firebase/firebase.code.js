import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAkFZ_dc_C-rpp48vxeAfkMulI81qjIh1w",
    authDomain: "simple-emajon-site.firebaseapp.com",
    projectId: "simple-emajon-site",
    storageBucket: "simple-emajon-site.appspot.com",
    messagingSenderId: "8322659878",
    appId: "1:8322659878:web:5a0ea947d88bd22efc58e7"
};

const app = initializeApp(firebaseConfig);

export default app