import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("💩💩💩");
};

const handleLogin = (req, res) => {
  return res.send("LOGIN !");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, handleListening);

const handleListening = () =>
   console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);