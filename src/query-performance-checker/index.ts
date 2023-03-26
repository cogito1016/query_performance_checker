import { Connection, createConnection } from "mysql";

const queryPerformanceChecker = async () => {
  const connection: Connection = createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  connection.query("", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log(rows);
    }

    connection.end();
  });
};

export default queryPerformanceChecker;
