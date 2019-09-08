import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBjejbVekjiOcD8abV9m59g4PTBKcBwPkQ',
  authDomain: 'registration-528a1.firebaseapp.com',
  databaseURL: 'https://registration-528a1.firebaseio.com',
  projectId: 'registration-528a1',
  storageBucket: '',
  messagingSenderId: '609657149040',
};

const fire = firebase.initializeApp(config);
export default fire;