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
3. O terminal informará que a API está rodando localmente na porta 5000. Deixe este terminal ativo.
   

### Passo 3: Inicializar o Frontend (React)

1. Abra um segundo terminal no painel (clique no ícone de "+" localizado no canto superior direito do painel de terminais).

2. Navegue até a pasta do frontend:
   ```bash
   cd reactClassificacaoTCC-codespace
   
3. Inicie a aplicação web React:
   ```bash
   npm start

4. O ecossistema do Codespaces detectará o tráfego na porta 3000 e abrirá automaticamente uma nova aba no seu navegador carregando a interface do sistema!
   
