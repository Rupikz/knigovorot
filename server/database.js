import { Pool } from 'pg';
import config from './config/config';

const pool = new Pool({
  connectionString: config.DB_CONNECT,
});

console.log('База данных вроде подключена...');

export default pool;
