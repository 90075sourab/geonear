const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGOURI,{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})

module.exports=mongoose.connection;
