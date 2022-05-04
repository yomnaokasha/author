const express = require("express");
const cors = require("cors");
const app = express();

require("./config/author.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyAuthorRoutes = require("./routes/author.routes");
AllMyAuthorRoutes(app);

app.listen(8002, () => console.log("The server is all fired up on port 8000"));
