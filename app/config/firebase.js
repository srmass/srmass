// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auths = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZSGR7l5mRzVp-UfuWtd0GT9btbK9QYYQ',
  authDomain: 'mdev-72d6a.firebaseapp.com',
  projectId: 'mdev-72d6a',
  storageBucket: 'mdev-72d6a.appspot.com',
  messagingSenderId: '495918853243',
  appId: '1:495918853243:web:dc3ddaf7b7e25dacab46de',
  measurementId: 'G-ZRN2FE710V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
