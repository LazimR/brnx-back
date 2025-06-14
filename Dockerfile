FROM node:20-alpine

WORKDIR /app

# Copie os arquivos de dependências do Yarn
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante do código da aplicação
COPY . .

# Gere o build (caso use TypeScript)
RUN yarn build

# Exponha a porta usada pela aplicação (ajuste se necessário)
EXPOSE 9000

# Comando para iniciar a aplicação (ajuste se necessário)
CMD ["yarn", "start:prod"]