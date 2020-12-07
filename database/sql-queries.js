//SQL queries
const createUserQuery = 
  (firstName, lastName, gender, email, cellphone, height, weight, recentlySick) => 
    `INSERT INTO users (firstName, lastName, gender, email, cellphone, height, weight, recentlySick) 
        VALUES ('${firstName}', '${lastName}', '${gender}', '${email}', '${cellphone}', '${height}', '${weight}', ${recentlySick})`

const getUsersQuery = `SELECT * FROM users`

const deleteUserQuery = (id) => `DELETE FROM users WHERE id = ${id}`

module.exports = {
  createUserQuery,
  getUsersQuery,
  deleteUserQuery
}