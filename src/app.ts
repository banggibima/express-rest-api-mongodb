import express from 'express';
import cors from 'cors';
import database from './configs/database.config';
import user from './routes/user.route';
import config from './configs/config';
import route from './routes/route';

const app = express();

database.on('error', console.log.bind(console, 'connection error: '));
database.once('open', () => console.log('mongodb database connected'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', route);
app.use('/api/users', user);

app.listen(config.port, () => {
  console.log(`server already running on port ${config.port}`);
  console.log(`http://localhost:${config.port}`);
});
