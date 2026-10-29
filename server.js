import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

// Do not change code above this line

app.get("/api{/:date}", (req, res) => {
  const dateString = req.params.date;
  let date;

  if (!dateString) {
    date = new Date();
  } else if (/^\d+$/.test(dateString)) {
    date = new Date(parseInt(dateString, 10));
  } else {
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});