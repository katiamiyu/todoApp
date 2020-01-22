import express from 'express';
import todoRoute from './src/routes/todoRoute';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3008;

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

todoRoute(app);

app.all('*', (req, res) => {
  res.status(400).json({
    status: 404,
    error: 'the url you are trying to access does not exist',
  })
})

app.listen(port, () => {
  console.log(`todo app now running on ${port}`);
});