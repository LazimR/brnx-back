FROM node:24-alpine3.21 AS builder

WORKDIR /app

# Copie os arquivos de dependências do Yarn
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install --production --frozen-lockfile

# Copie o restante do código da aplicação
COPY . .

RUN yarn prisma:generate

FROM node:24-alpine3.21

WORKDIR /app

COPY --from=builder /app ./
# Gere o build (caso use TypeScript)
RUN yarn build

# Exponha a porta usada pela aplicação (ajuste se necessário)
EXPOSE 9000

# Comando para iniciar a aplicação (ajuste se necessário)
CMD ["node", "dist/server.js"]
