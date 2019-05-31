import RNFirebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3ZIi2oPFSe3Lzih80maCb_UbvL-d3DjM",
    authDomain: "shoplist-2baf2.firebaseapp.com",
    databaseURL: "https://shoplist-2baf2.firebaseio.com",
    projectId: "shoplist-2baf2",
    storageBucket: "shoplist-2baf2.appspot.com",
    messagingSenderId: "954389931263",
    appId: "1:954389931263:web:8e5a69afc35f1dcf"
};

RNFirebase.initializeApp(firebaseConfig);

export default RNFirebase;