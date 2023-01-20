require("dotenv").config();
const http = require("http");
const socketIo = require("socket.io");

const app = require("./src/app");

const Server = http.createServer(app);

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const io = socketIo(Server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  socket.on("sendNotification", (payload) => {
    socket.broadcast.emit("newNotification", payload);
  });
});
Server.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
