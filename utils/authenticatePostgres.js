import 'dotenv/config'
import fs from 'fs';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function authenticatePostgres() {
  const db = new Sequelize('', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        ca: fs.readFileSync(`${__dirname}/us-west-1-bundle.pem`),
      },
    }
  });

  db.authenticate().then(() => {
    console.log('DB Connected');
  }).catch((err) => {
    console.log('---------------------------- ERROR START -----------------------------');
    console.log(err);
    console.log('---------------------------- ERROR END -----------------------------');
  })
}

export default authenticatePostgres;