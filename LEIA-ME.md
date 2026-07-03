# Recado Anônimo — como configurar

São 3 arquivos:

- **enviar.html** → página onde as pessoas mandam o recado (texto ou foto)
- **tela.html** → tela protegida por senha, onde o recado aparece por 10s
- **config.js** → onde fica a chave de conexão do Firebase (compartilhada pelos dois)

Como é um site que precisa funcionar entre **computadores diferentes**, ele
precisa de um "correio" na internet no meio do caminho — usei o **Firebase**
(gratuito, do Google) porque não exige programar um servidor.

## Passo 1 — Criar o Firebase (5 minutos)

1. Acesse https://console.firebase.google.com e crie um projeto (gratuito).
2. No menu lateral: **Compilação → Firestore Database → Criar banco de dados**.
   Pode deixar no modo padrão sugerido.
3. Vá em **Configurações do projeto** (ícone de engrenagem) → role até
   "Seus apps" → clique no ícone **`</>`** (Web) → dê um nome qualquer →
   crie o app.
4. Vai aparecer um bloco `firebaseConfig = {...}`. Copie e cole dentro do
   arquivo `config.js`, no lugar do exemplo.
5. Ainda no Firebase, vá em **Firestore Database → Regras** e cole isto,
   depois clique em Publicar:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /recados/{docId} {
         allow read, write: if true;
       }
     }
   }
   ```

   (Isso deixa aberto só para essa coleção específica — suficiente para essa
   brincadeira, mas não é indicado guardar nada sensível ali.)

## Passo 2 — Colocar os arquivos no ar

Os dois computadores precisam acessar os arquivos por um link (não abrir o
.html direto no disco, porque a senha e o Firebase não funcionam bem assim).
Formas gratuitas e simples:

- **Netlify Drop** → https://app.netlify.com/drop — arraste a pasta com os
  3 arquivos e pronto, gera um link na hora.
- **Firebase Hosting** (já que você criou o projeto) — se quiser, posso te
  passar os comandos do terminal.
- **GitHub Pages** — se preferir versionar num repositório.

## Passo 3 — Usar

- Envie o link de `enviar.html` para quem vai mandar recados.
- Abra `tela.html` no computador que vai exibir, digite a senha
  **praviversempedirlicença** e deixe a aba aberta.
- Cada recado enviado aparece na tela automaticamente, some sozinho depois
  de 10 segundos, e a tela volta a aguardar o próximo.

## Detalhes técnicos

- Fotos são redimensionadas e comprimidas no navegador antes de enviar
  (limite do Firestore é 1MB por recado).
- A senha fica guardada só durante a sessão daquela aba (fecha a aba, pede
  de novo).
- Se dois recados chegarem quase juntos, o segundo entra numa fila e é
  exibido logo depois do primeiro terminar.
