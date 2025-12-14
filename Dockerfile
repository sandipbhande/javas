FROM node:alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY ./ ./

# Expose the desired port
EXPOSE 8081

# Command to run your application
CMD ["npm", "start"]



