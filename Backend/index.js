import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import formRoute from './route/form.route.js'
import cors from 'cors';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("mongodb is connected");

} catch (error) {
  console.log("error", error);

}

app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/data', formRoute);

app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});