# Imagem base
FROM node

# Diretório do container
WORKDIR /usr/app/rentx

# Copia o package.json para o WORKDIR
COPY package.json .

# Instala dependências presentes no package.json
RUN npm i

# Copia os arquivos do atual diretório para o WORKDIR
COPY . .

# Libera a porta 3333 (porta utilizada no server do app)
EXPOSE 3333

# Comando que executa a aplicação (deve ser sempre o último)
CMD [ "npm", "run", "dev" ]