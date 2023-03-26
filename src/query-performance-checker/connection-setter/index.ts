import { Connection, createConnection } from "mysql";
import { config } from "dotenv";

const connection = () => {
  const conn: Connection = createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  conn.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${conn.threadId}`);
  });

  return conn;
};

export default connection;
