const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Like = require('./models/likesNumber');
const moongose = require('mongoose');
const mongodbUrl =
  'mongodb+srv://baxa_2910:bohodir29102001<>@test.7g6l3.mongodb.net/user?retryWrites=true&w=majority';
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
const connectDb = async () => {
  try {
    await moongose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log('Mongo is connected');
  } catch (error) {
    console.log(error);
  }
};
connectDb();

app.post('/likes', async (req, res) => {
  const newLike = new Like({
    likes: req.body.number,
  });

  const newuser = await newLike.save();
  console.log(newuser);
  res.json(newLike);
});

app.get('/like', async (req, res) => {
  const oldLikes = await Like.find({ likes: 1 });
  let numbers = 0;
  for (var i = 0; i < oldLikes.length; i++) {
    numbers += oldLikes[i].likes;
  }
  // console.log(numbers);
  res.json(numbers);
});

app.delete('/delete', async (req, res) => {
  try {
    // console.log(req.body.id);
    const deleteLike = await Like.deleteOne();
    // console.log(deleteLike);
    res.json({ deleteLike });
  } catch (error) {
    console.log(error);
  }
});

const Port = 1000 || process.env.Port;

app.listen(Port, () => console.log(`Port is working ${Port}`));
