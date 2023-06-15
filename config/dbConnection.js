const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      'mongodb+srv://bloodDonor:1OpR6jeB1ubxyZPy@cluster0.o9jnfig.mongodb.net/mycontacts?retryWrites=true&w=majority'
    )
    console.log(
      'Database connected: ',
      connect.connection.host,
      connect.connection.name
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDb
