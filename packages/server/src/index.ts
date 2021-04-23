import express from 'express';
import cors from 'cors';
import conf from './utils/config';
import getToken from './api/getToken';

const app = express();
app.use(cors());
app.use(express.json());
const port = conf.port || 8888;

if (!conf.agora_app_id || !conf.agora_app_secret) {
  console.error('Env file not set correctly');
  process.exit();
}

app.get('/', (_, res) => {
  res.send('Welcome to waitroom API');
});

app.get('/get-token', getToken);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
