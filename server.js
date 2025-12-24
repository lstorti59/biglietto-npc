import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// utilità per path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// servi i file statici
app.use(express.static(path.join(__dirname, "public")));

// endpoint di test (serve solo a capire se il server gira)
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

// fallback: index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// porta Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server avviato sulla porta", PORT);
});
