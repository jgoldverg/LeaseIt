const mongoDb = require("mongodb")

const connection = "mmongodb://localhost:27017/exampleDb;

const connectionDb= () => {
    return mongoDb.connect(connection, function(err, db) {
        if(!err){
            console.log("CONNNECTED TO DB")
        }else{
            console.log("FAILED TO CONNECT: \n" + err)
        }
    });
}