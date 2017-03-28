import express from 'express';

const port = process.env.PORT || 8000;
const app = express();

app.set('port', port);

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
