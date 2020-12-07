const router = require("express").Router();
const sqlite3 = require('sqlite3').verbose();
const queries = require("../database/sql-queries")

//SQLite connection
let db = new sqlite3.Database('./database/users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
})

//create user
router.post("/user", (req, res, next) => {

  var user = req.body
  let sql = queries.createUserQuery(user.firstName, user.lastName, user.gender, user.email, user.cellphone, user.height, user.weight, user.recentlySick)

  db.run(sql, err => {
    if (err) {
      return res.status(500).send({ error: err })
    }
    return res.status(204).send('Success')
  });
});

//get all users
router.get('/users', (req, res, next) => {

  var users = [];
  let sql = queries.getUsersQuery

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).send({ error: err })
    }
    rows.forEach((row) => {
      users.push(row)
    });
    res.status(200).json(users)
  });
});

 //delete a user
router.delete("/user/:id", (req, res, next) => {
  
  var id = req.params.id
  let sql = queries.deleteUserQuery(id)

  db.run(sql, function (err) {
    if (err) {
      return res.status(500).send({ error: err })
    }
    return res.status(204).send('Success')
  });
})

module.exports = router;