const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5501",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const connectDB = require("./db/connectDB");
const postRoutes = require("./routes/postRoutes");

const port = 3000;

app.use(express.json());

app.use("/api/post", postRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Connection is Live at port no. ${port}`);
});
