import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reactBuildPath = path.join(__dirname, "../../frontend/build");

var jsonParser = bodyParser.json();

app.get("/api", (req, res) => {
  res.send("Hello Vinita!");
});

app.post("/api/user", jsonParser, (req, res) => {
  console.log(req.body);
  res.send("Got Data");
});

app.use(express.static(reactBuildPath));

// This code makes sure that any request that does not matches a static file
// in the build folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
    next();
  } else {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    res.sendFile(reactBuildPath);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
