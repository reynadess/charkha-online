import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const reactBuildPath = path.join(__dirname, "../../frontend/build");
console.log(reactBuildPath);

app.get("/api", (req, res) => {
  res.send("Hello World!");
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
    res.sendFile(path.join(__dirname, "build", "index.html"));
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
