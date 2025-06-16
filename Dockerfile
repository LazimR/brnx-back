FROM node:24-slim AS builder

WORKDIR /app

# Instale dependências do sistema para o Prisma
RUN apt-get update && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copie os arquivos de dependências
COPY package.json yarn.lock ./

# Instale todas as dependências
RUN yarn install --frozen-lockfile

# Crie o diretório src/prisma
RUN mkdir -p src/prisma

# Copie explicitamente o schema.prisma
COPY src/prisma/schema.prisma src/prisma/

# Copie o .env
COPY .env ./

# Ajuste permissões antes de gerar o Prisma
RUN chown -R node:node /app && chmod -R 755 /app

# Verifique se o schema.prisma foi copiado e tem permissões corretas
RUN ls -l src/prisma/schema.prisma || (echo "schema.prisma not found" && exit 1)
RUN su node -c "ls -l src/prisma/schema.prisma" || (echo "node user cannot access schema.prisma" && exit 1)

# Gere os arquivos do Prisma
RUN yarn prisma:generate

# Copie o restante do código
COPY . .

# Ajuste permissões novamente após copiar tudo
RUN chown -R node:node /app && chmod -R 755 /app

FROM node:24-slim

WORKDIR /app

# Instale dependências do sistema
RUN apt-get update && apt-get install -y \
    openssl \
    libssl-dev \
    ca-certificates \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copie os arquivos da fase builder
COPY --from=builder /app ./

# Ajuste permissões na imagem final
RUN chown -R node:node /app && chmod -R 755 /app

# Verifique permissões na imagem final
RUN ls -l src/prisma/schema.prisma || (echo "schema.prisma not found in final image" && exit 1)
RUN su node -c "ls -l src/prisma/schema.prisma" || (echo "node user cannot access schema.prisma in final image" && exit 1)

# Gere o build
RUN yarn build

# Exponha a porta
EXPOSE 3000

# Adicione HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:3000/ || exit 1

# Use usuário node
USER node

# Comando para iniciar a aplicação
CMD ["node", "dist/server.js"]
