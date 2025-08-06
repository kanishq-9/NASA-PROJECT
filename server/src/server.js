const { createServer } = require("http");
const mongoose = require('mongoose');
const app = require("./app");
require("dotenv").config();
const { loadPlanetsData } = require("./models/planets.model");
const Mongoose_URL = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

const server = createServer(app);

mongoose.connection.once('open',()=>{
  console.log("Database connected");
})
mongoose.connection.on('error',(err)=>{
  console.log(err);
  
});


async function startServer() {
 await mongoose.connect(Mongoose_URL);
 //options ,{
//   useNewUrlParser:true,
//   useFindAndModify:false,
//   useCreateIndex:true,
//   useUnifiedTopology:true
//  } is set by default in new mongodb 
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
  });
}
startServer();

//NOTE

// --save-dev dependencies in cmd for saving nodemon in dev-dependencies

// to access env variables in package.json change "start" to "start": "PORT=5000 node src/server.js"

//to run nodemon use >> npm run watch
