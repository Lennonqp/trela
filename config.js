// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================================
// 1. Vá em https://console.firebase.google.com
// 2. Crie um projeto novo (gratuito)
// 3. No menu lateral, vá em "Compilação" > "Firestore Database"
//    e clique em "Criar banco de dados" (pode escolher modo de
//    produção, depois aplicamos as regras abaixo)
// 4. Vá em "Configurações do projeto" (ícone de engrenagem) >
//    role até "Seus apps" > clique no ícone "</>" (Web) para
//    criar um app da Web
// 5. Copie o objeto "firebaseConfig" que aparece e cole aqui
//    embaixo, substituindo o objeto de exemplo.
// ============================================================

const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// ============================================================
// Depois de colar sua config, vá em Firestore Database > Regras
// e cole isto (permite ler/escrever só na coleção usada aqui):
//
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /recados/{docId} {
//       allow read, write: if true;
//     }
//   }
// }
//
// Isso deixa aberto (qualquer um pode enviar/ler recados), o que
// é aceitável para essa brincadeira, mas não guarde nada sensível.
// ============================================================
