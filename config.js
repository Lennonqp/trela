// ============================================================
// CONFIGURAÇÃO DO SUPABASE
// ============================================================
// 1. Vá em https://supabase.com e crie uma conta / projeto novo
//    (gratuito). Dê o nome que quiser, escolha uma senha de
//    banco (guarde ela, mas não é usada aqui) e uma região.
// 2. Espere o projeto terminar de ser criado (leva ~2 min).
// 3. No menu lateral, vá em "SQL Editor", clique em "New query"
//    e cole o script abaixo, depois clique em "Run":
//
//    create table recados (
//      id bigint generated always as identity primary key,
//      tipo text not null,
//      conteudo text not null,
//      created_at timestamptz not null default now()
//    );
//
//    alter table recados enable row level security;
//
//    create policy "qualquer um pode inserir"
//      on recados for insert
//      to anon
//      with check (true);
//
//    create policy "qualquer um pode ler"
//      on recados for select
//      to anon
//      using (true);
//
//    alter publication supabase_realtime add table recados;
//
// 4. No menu lateral, vá em "Project Settings" (ícone de
//    engrenagem) > "Data API". Copie a "Project URL".
// 5. Na mesma tela, vá na aba "API Keys" e copie a chave
//    "anon" / "public" (NÃO a "service_role", essa é secreta).
// 6. Cole os dois valores abaixo, substituindo "COLE_AQUI".
// ============================================================

const SUPABASE_URL = "https://zlkmmstcslvqimuxjmko.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_bB6ATsXg69R9P1ETWEukTw_hY4heP7J";
