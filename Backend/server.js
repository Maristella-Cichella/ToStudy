const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./api/Users"); // Assicurati di avere il modello User

const app = express();
app.use(cors()); // Aggiungi questa riga per abilitare CORS
app.use(express.json());

require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;
// Connessione a MongoDB
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Endpoint di registrazione
app.post("/register", async (req, res) => {
  try {
    const { nome, cognome, email, username, password } = req.body;

    // Controlla se l'utente esiste già
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash della password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuovo utente
    const newUser = new User({
      nome,
      cognome,
      email,
      username,
      password: hashedPassword,
    });

    // Salva l'utente nel database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trova l'utente per username
    let user = await User.findOne({ username: email });
    if (!user) {
      user = await User.findOne({ email });
    }
    if (!user) {
      return res.status(400).json({ message: email });
    }

    // Confronta la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Avvio del server
app.listen(3000, () => console.log("Server started on port 3000"));
