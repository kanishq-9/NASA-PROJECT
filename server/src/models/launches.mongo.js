const mongoose = require("mongoose");


const launchSchema = new mongoose.Schema({
    rocketNumber:{
        type:Number,
        required:true,
    } ,
  mission: {
    type:String,
    required:true
},
  rocket: {
    type:String,
    required:true
},
  launchDate:{
    type:Date,
    required:true
},
  destination: {
    // type:mongoose.ObjectId,
    // ref:"Planet"==> only if you take data using a foreign key
    type:String,
    required:true
  },
  customer: [String],
  success: {
    type:Boolean,
    required:true,
    default:true
  },
  upcoming: {
    type:Boolean,
    required:true
  },
});

module.exports = mongoose.model('Launch', launchSchema);
//Launch is the collection name in mongoDB, it has created collection of "launches" in node model and made a connection. Now this has created an object to make CRUD operations on the schemas, so we export it
//mongo schema and model are classes and objects that provides a way to talk to the documents
//whereas MVC is a general concept that we can use it for any database or any external datasource. we use them to act as data access layer