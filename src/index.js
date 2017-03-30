import express from 'express';

const port = process.env.PORT || 8000;
const app = express();

app.set('port', port);

app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
