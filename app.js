import express from "express";
import env from "dotenv";
import { router } from "./routes/taskRoutes.js";
env.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/tasks", router);

app.get("/", (req, res) => {
  res.send("home");
});
app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
