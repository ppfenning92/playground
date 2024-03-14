import { Roarr as roarrlogger } from "roarr";
import bunyan from "bunyan";
import pino from "pino";
import winston from "winston";
const pinoLogger = pino();
const bunyanLogger = bunyan.createLogger({ name: "bunyan" });
const winstonlogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

roarrlogger.debug("(roarr) [DEBUG] Hello, world!");
pinoLogger.debug("(pino) [DEBUG] Hello, world!");
bunyanLogger.debug("(bunyan) [DEBUG] Hello, world!");
winstonlogger.debug("(winston) [DEBUG] Hello, world!");
console.log("------------------- ");

roarrlogger.info("(roarr) [INFO] Hello, world!");
pinoLogger.info("(pino) [INFO] Hello, world!");
bunyanLogger.info("(bunyan) [INFO] Hello, world!");
winstonlogger.info("(winston) [INFO] Hello, world!");
console.log("------------------- ");

roarrlogger.warn("(roarr) [WARN] Hello, world!");
pinoLogger.warn("(pino) [WARN] Hello, world!");
bunyanLogger.warn("(bunyan) [WARN] Hello, world!");
winstonlogger.warn("(winston) [WARN] Hello, world!");
console.log("------------------- ");

roarrlogger.error("(roarr) [ERROR] Hello, world!");
pinoLogger.error("(pino) [ERROR] Hello, world!");
bunyanLogger.error("(bunyan) [ERROR] Hello, world!");
winstonlogger.error("(winston) [ERROR] Hello, world!");

console.log("------------------- ");
roarrlogger.fatal("(roarr) [FATAL] Hello, world!");
pinoLogger.fatal("(pino) [FATAL] Hello, world!");
bunyanLogger.fatal("(bunyan) [FATAL] Hello, world!");
winstonlogger.error("(winston) [FATAL] Hello, world!");
