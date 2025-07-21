const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`);
});

//NOTE

// --save-dev dependencies in cmd for saving nodemon in dev-dependencies

// to access env variables in package.json change "start" to "start": "PORT=5000 node src/server.js"

//to run nodemon use >> npm run watch
