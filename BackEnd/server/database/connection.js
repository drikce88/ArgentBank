const mongoose = require('mongoose')
const databaseUrl = "mongodb+srv://drikce88:f3execBLZ1g8vX9a@cluster0.w6jwjun.mongodb.net/ArgentBank?retryWrites=true&w=majority&appName=Cluster0";
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
