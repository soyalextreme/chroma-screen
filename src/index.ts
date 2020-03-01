import express from "express";
import path from "path";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname + "/public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
  console.log(path.join(__dirname + "/public"));
});
