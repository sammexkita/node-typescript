import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({"message": "Hello Worlds!"});
});

app.listen(3333, () => {
  console.log("App is running on port 3333 🚀");
});