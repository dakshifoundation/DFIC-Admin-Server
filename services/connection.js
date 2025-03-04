const mongoose= require('mongoose')
const logger= require('../services/logging.winston.js')
const { MongoClient }= require('mongodb')
const URL= process.env.Mongo_URL_Live


exports.handleDatabaseConnection= async ()=>{
    try{
        await mongoose.connect(URL)
    }catch(err){
        logger.servicesLogger.error("Error in connecting Database: "+ err.message)
        console.error("Error in connecting Database: "+err.message)
        throw err
    }
}


exports.handleMongodbConnection= async()=>{
    try{
        const client= new MongoClient(URL)
        await client.connect()
        const db= client.db("DFIC-Database")
        return { db, client }

    }catch(err){
        logger.servicesLogger.error("Error in connecting Database Client mongodb: "+ err.message)
        console.error("Error in connecting Database Client mongodb: "+err.message)
        throw err

    }
}