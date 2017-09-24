require("dotenv").config();

const config = require("./config");
const { Server } = require("http");
const path = require("path");
const express = require("express");
const html5History = require("connect-history-api-fallback");
const compression = require("compression");
const socketService = require("./services/socket");
const actionHandler = require("./services/actionHandler");
const realtimeHandler = require("./services/realtimeHandler");
const log = require("./log");

const app = express();
const server = Server(app);
const staticAssetsPath = path.resolve(__dirname, "..", "..", "dist");

app.use(html5History());
app.use(compression());
app.use(express.static(staticAssetsPath));

// Init app
socketService
  .start(server)
  .then(() => actionHandler.start())
  .then(() => realtimeHandler.start())
  .then(() => {
    server.listen(config.port, "localhost", () =>
      log.info("Server started on port", config.port)
    );
  });
