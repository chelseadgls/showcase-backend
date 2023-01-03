import mongoose from 'mongoose';
import chalk from 'chalk';

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/showcase'

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .set('strictQuery', false)
  .connect(url, mongooseConfig)
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  });

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});
  
mongoose.connection.on("error", (error) => {
  console.log(chalk.red(`MongoDB connection error: ${error}`));
});

export default mongoose.connection