const app = require("express")(); 
const bodyParser =require('body-parser');

//connection to start express server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", function (res, req, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});

app.use("/api", require("./api/users-routes"));
app.listen(8000, () => {
  console.log("Server running on port 8000")
});






