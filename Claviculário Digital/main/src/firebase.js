import {initializeApp} from 'firebase'

const app=initializeApp(
{
  apiKey: "AIzaSyArCEp7b7oNMpZAcAzU8_IKyOwTdGcZOdY",
  authDomain: "claviculario-vue.firebaseapp.com",
  databaseURL: "https://claviculario-vue.firebaseio.com",
  projectId: "claviculario-vue",
  storageBucket: "",
  messagingSenderId: "767808274249"
});

// configuração do armazenamento

export const db = app.database();
export const chavesRef = db.ref("chaves");
export const pessoasRef = db.ref("pessoas");
export const emprestimosRef = db.ref("emprestimos");
export const salasRef = db.ref("salas");

// configuração do autenticador

// export const authRef = app.auth();