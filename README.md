# WhatsHub - Gerador de Links e Agenda de Contatos WhatsApp

## 🌟 Visão Geral

O **WhatsHub** é uma aplicação web desenvolvida com **React JS** no front-end com estilização com TailWind e componentes Material UI e **Supabase** como back-end (BaaS), proporcionando uma experiência completa de **produtividade e organização de contatos** no WhatsApp. A principal inovação do projeto é o **login seguro via Supabase**, garantindo **segurança, individualidade e privacidade** no acesso aos contatos salvos.

O projeto integra duas funcionalidades centrais: **Gerador de Links** e **Agenda de Contatos**, permitindo que usuários criem links diretos para WhatsApp e mantenham seus contatos organizados de forma eficiente.

#### *Disponível em:* https://wats.vercel.app/home

---

## 🎯 Objetivos do Projeto

- Criar uma interface **intuitiva e responsiva**.
- Desenvolver uma aplicação com modularização e componentização.
- Garantir **persistência de dados** segura utilizando o Supabase.
- Proporcionar **login individual e seguro**, com suporte a **email/senha** e **OAuth via Google**.
- Facilitar o **início de conversas no WhatsApp** de forma rápida e organizada.

---

## 💡 Funcionalidades

### 1️⃣ Gerador de Links WhatsApp
- Entrada de número com **máscara automática** `(XX) XXXXX-XXXX`.
- Campo para **mensagem opcional**, codificada para URL.
- Geração do link no formato: `https://wa.me/55NUMERO?text=MENSAGEM`.
- Opção de **copiar link** ou abrir diretamente no WhatsApp.
- Integração com contatos salvos da agenda para preenchimento automático.

### 2️⃣ Agenda de Contatos
- **CRUD completo:** criar, ler, atualizar e deletar contatos.
- Lista de contatos organizada e responsiva.
- Pesquisar contatos por número.
- Botão de **mensagem rápida** que envia o número diretamente ao gerador de links.
- Feedbacks visuais via **SweetAlert2** para sucesso ou erro nas ações.

### 3️⃣ Login e Cadastro Seguro (Inovação)
- O sistema de autenticação utiliza o Supabase para gerenciar usuários e sessões.  

- No **login**, existem duas formas de acesso: via email e senha ou via Google OAuth. Ao abrir a página de login, o sistema verifica automaticamente se o usuário já possui uma sessão ativa; caso positivo, ele é redirecionado para a página inicial. Para o login tradicional, o usuário deve preencher os campos de email e senha. O sistema valida se todos os campos estão preenchidos e então tenta autenticar o usuário com o Supabase. Em caso de sucesso, é exibida uma mensagem de confirmação e o usuário é redirecionado; em caso de erro, uma mensagem apropriada informa o problema, incluindo situações de credenciais incorretas ou problemas de conexão. No login via Google, o sistema autentica usando OAuth, trata casos em que o email já está cadastrado com outro método e fornece mensagens de sucesso ou erro antes do redirecionamento automático.

- No **cadastro**, o usuário deve fornecer email, senha e confirmação de senha. O sistema valida se todos os campos foram preenchidos, se as senhas coincidem e se a senha atende a critérios de segurança, incluindo tamanho entre 4 e 6 caracteres, não possuir caracteres repetidos consecutivos e evitar sequências numéricas previsíveis. Antes de criar o usuário, o sistema verifica na tabela de usuários se o email já está registrado para evitar duplicidade. Após passar todas as validações, o usuário é criado no Supabase Auth e, opcionalmente, registrado na tabela de usuários. Em seguida, uma mensagem de sucesso é exibida e o usuário é redirecionado para a página inicial.  

- Todo o fluxo inclui tratamento de erros e mensagens claras para garantir que o usuário entenda qualquer problema durante login ou cadastro.

---

## 🛠 Tecnologias Utilizadas

- **Front-end:** React JS, Material-UI (MUI), React Icons e TailWindCSS.
- **Back-end / Banco de Dados:** Supabase (Auth + PostgreSQL BaaS).
- **Bibliotecas Auxiliares:** SweetAlert2, supabase-js.
- **Estilização:** Tailwind CSS e MUI para componentes responsivos.
- **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`).

---

## 🔑 Requisitos Funcionais e Técnicos

- **RF-01:** Input de número com máscara `(XX) XXXXX-XXXX`.
- **RF-02:** Campo de mensagem opcional e codificação URL.
- **RF-03:** Geração de link `wa.me`.
- **RF-04:** Link de saída somente leitura e botão copiar.
- **RF-05:** Abrir WhatsApp diretamente no navegador.
- **RF-06 a RF-10:** CRUD completo da agenda, integração com gerador de links, pesquisa e feedbacks.

- **RT-01:** Estrutura React clara e modular.
- **RT-02:** Gerenciamento de estado com Hooks.
- **RT-03:** Integração segura com Supabase, armazenamento de chaves em `.env`.
- **RT-04:** Código limpo, comentado e legível.
- **RT-05 (Inovação):** Login individual via Supabase, garantindo **privacidade e segurança de dados**.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js >= 16
- NPM
### Instalação

1. **Clone o repositório:**
```
git clone https://github.com/seuusuario/whats-hub.git
cd whats-hub
```


2. **Instale as dependências**
```
npm install
```

3. **Configure variáveis de ambiente (.env)**
```
VITE_SUPABASE_URL=SEU_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANONIMAl
```

4. **Inicie a aplicação:**
```
npm run dev
```
---
## ✅ Diferenciais e Inovação
- Segurança e individualidade: Cada usuário tem acesso somente aos seus contatos.
- Login integrado: Supabase Auth com email/senha e Google OAuth.
- Experiência otimizada: Feedback visual com SweetAlert2, design moderno e intuitivo.
- Eficiência: Gerador de links direto para WhatsApp integrado à agenda de contatos.


