import connection from "./connection-setter";

const queryPerformanceChecker = () => {
  const conn = connection();

  return conn;
};

export default queryPerformanceChecker;
