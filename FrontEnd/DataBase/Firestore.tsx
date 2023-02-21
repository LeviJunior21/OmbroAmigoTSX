import { firebase } from './FirebaseCredentials';

const firebaseFirestorePublicacoes = firebase.firestore().collection("publicacoes");
const firebaseFirestoreUsuarios = firebase.firestore().collection("usuarios");

export { firebaseFirestorePublicacoes, firebaseFirestoreUsuarios };
