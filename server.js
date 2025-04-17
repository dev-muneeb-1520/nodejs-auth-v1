require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/database/db");
const authRoutes = require("./src/routes/auth-routes");
const homeRoutes = require("./src/routes/home-routes");
const adminRoutes = require("./src/routes/admin-routes");
const imageRoutes = require("./src/routes/image-routes");

const app = express();
const PORT = process.env.PORT || 3000;

//connect to DB funtion invoked
connectToDB();

//Middleware
app.use(express.json());

//auth router used
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
