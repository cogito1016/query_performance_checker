import { config } from "dotenv";
import queryPerformanceChecker from "./src/query-performance-checker";

config({ path: "./src/config/.connection-config.env" });

queryPerformanceChecker();
