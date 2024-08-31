FROM node:18

# Cria e define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Compila o TypeScript
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["node", "dist/app.js"]