# image latest of the node 12
FROM node:12

# define the working directory
WORKDIR /usr/src/app

# COPY package.json and package-lock.js to WORKDIR
COPY package*.json ./

# install dependencies
RUN npm install

# COPY everything else
COPY . .

# Listen ti port 5000
EXPOSE 5000

# run the npm start command
CMD ["npm", "start"]