import firebase from './firebase/firebase.utils';
import 'firebase/firestore';

const firestore = firebase.firestore();

//find a specific item in cart for a specific user
firestore.collection('users').doc('1DumFFAuedmgsrFnnVGA').collection('cartItems').doc('TOT7eiP6E6W8hTXZYbPV'); 
//alternative code
firestore.doc('/users/1DumFFAuedmgsrFnnVGA/cartItems/TOT7eiP6E6W8hTXZYbPV');
//find a specific collection for a specific user
firestore.collection('/users/1DumFFAuedmgsrFnnVGA/cartItems');