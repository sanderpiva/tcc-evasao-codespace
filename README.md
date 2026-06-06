# 🚀 Ecossistema Full-Stack: NoDropOut Soft (GitHub Codespaces)

Este repositório unifica o **Backend (Flask + Naive Bayes)** e o **Frontend (React)** do modelo preditivo para avaliação de evasão acadêmica, permitindo a execução imediata e integrada diretamente no navegador através do **GitHub Codespaces**.

---

## 🛠️ Como Executar o Ecossistema em 1 Clique

Siga os passos abaixo para levantar o servidor Flask e a interface React na máquina virtual do GitHub:

### Passo 1: Iniciar o Ambiente Virtual
Clique no botão verde **"<> Code"** no topo deste repositório, selecione a aba **Codespaces** e clique em **"Create codespace on master"**.

*(Aguarde cerca de 1 a 2 minutos para que o GitHub provisione o container e instale as dependências de Python e Node.js automaticamente em segundo plano).*

### Passo 2: Inicializar o Backend (API Flask)
1. No terminal integrado que se abriu na parte inferior da tela, navegue até a pasta do backend:
   ```bash
   cd projetoClassificacao-codespace
2. Inicialize o servidor de desenvolvimento da API Python:
   ```bash
   python app.py
3. Deixe este terminal aberto durante todo o tempo de uso.
   

### Passo 3: Inicializar o Frontend (React)

1. Abra um segundo terminal no painel (clique no ícone de "+" localizado no canto superior direito do painel de terminais).

2. Navegue até a pasta do frontend:
   ```bash
   cd reactClassificacaoTCC-codespace
   
3. Inicie a aplicação web React:
   ```bash
   npm run dev

4. Após rodar o comando acima, o Codespaces identificará a aplicação e permitirá o acesso. Basta clicar no link gerado na aba de portas (Ex: porta 5173) para abrir a interface no seu navegador.

---

## ⚠️ AVISO: Configuração de Portas
Para que a comunicação entre o React e a API Flask funcione, você deve configurar as portas como Públicas:

Vá na aba PORTAS (abaixo do terminal).

- Clique com o botão direito nas portas do backend (Ex: 5000) e frontend (Ex: 5173).

- Selecione "Alterar Visibilidade da Porta" para Pública.

- Após isso, clique no link gerado na porta do frontend para abrir a interface no seu navegador.

---

**Autor** Sander Gustavo Piva
   
