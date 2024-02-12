const express = require("express");
const PORT = 3000;
const app = express();

const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);


app.listen(PORT, async () => {
  console.log(`Server started running successfully on PORT:${PORT}`);
});
