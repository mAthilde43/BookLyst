const express = require("express");
const app = express();
const sequelize = require("./config/db");
const models = require("./models");
const authRoutes = require("./routes/authRoutes");
const livreRoutes = require("./routes/livreRoutes");
const empruntRoutes = require("./routes/empruntRoutes");
const favorisRoutes = require("./routes/favorisRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use((req, res, next) => {
  console.log("🔹 Requête reçue :", req.method, req.url);
  next();
});

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/livres", livreRoutes);
app.use("/api/emprunts", empruntRoutes);
app.use("/api/favoris", favorisRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend en marche !");
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie !");

    await sequelize.sync({ alter: true });

    app.listen(3000, () => {
      console.log("Serveur démarré");
    });
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
};

startServer();
