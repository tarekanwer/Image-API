import express from "express";
import routes from "./routes/index";

const app = express();
app.use(express.static(`${__dirname}/../public`));

const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
