# Use the official Node.js image as the base image
FROM node:25-bullseye

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

RUN apt update
RUN apt install -y iproute2 iputils-ping tcpdump sngrep curl wget net-tools

# Copy the rest of the application code
COPY . .

# Expose the ports used by the two servers
EXPOSE 3000 3001

# Command to run the application
CMD ["node", "multus.js"]