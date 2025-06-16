# BRNX Back-end

Este projeto é o back-end do sistema de relatórios de demandas de problemas enfrentados por provedores da empresa BRNX. O sistema permite armazenar, consultar e gerenciar relatórios de ocorrências e demandas relacionadas aos provedores.

## Tecnologias utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para criar as rotas e gerenciar as requisições HTTP.
- **Prisma**: ORM (Object-Relational Mapping) para facilitar a comunicação com o banco de dados.
- **Yarn**: Gerenciador de pacotes utilizado para instalar e gerenciar as dependências do projeto.

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LazimR/brnx-back
   cd brnx-back
   ```

2. **Instale o Yarn (caso não tenha):**
   ```bash
   npm install -g yarn
   ```

3. **Instale as dependências do projeto:**
   ```bash
   yarn install
   ```

4. **Configure o banco de dados e o Prisma conforme necessário.**
   ```bash
   prisma:generate
   prisma:migrate
   ```

5. **Inicie o servidor:**
   ```bash
   yarn start
   ```

Pronto! O back-end estará rodando e pronto para receber requisições.
