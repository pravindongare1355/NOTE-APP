const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // BODY :: RAW :: JSON
app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

const dbadduser = require("./db.add.user");

const addnote = require("./addnotes");

// http://localhost:3000/welcome
app.get("/a", (req, res) => {
  res.json({ title: "Welcome!!" });
});


app.post("/addnote", async (req, res) => {
  try {
    // input = {

    //   title:"abc",
    //   note:"xyzssjsk",
    // }
    const input = req.body; // before doing this

    await addnote.addNote(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});


// started teh server.
app.listen(3025);
