FROM node:alpine 

WORKDIR /app
# El punto es el directorio base en este caso "app"
COPY package*.json .
RUN npm install --force
# RUN npm ci --only=production
COPY . .
RUN npm run build
# exponemos el puerto al cual se conectara
EXPOSE 5173
# hacemos que se ejecuten los siguietes scripts
CMD ["npm", "start","dev"]

