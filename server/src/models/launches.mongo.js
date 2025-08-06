const mongoose = require("mongoose");


const launchesSchema = new mongoose.Schema({
    rocketNumber:{
        type:Number,
        required:true,
        min:100
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