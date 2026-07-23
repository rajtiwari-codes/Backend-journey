//1)to generte fake information
const { faker } = require('@faker-js/faker');//faker is package so accesin our system
const mysql = require('mysql2');//2)acess mysql 2 package

//2) Create the connection to database i.e server(backnd/node) conect with database(mysql)
const connection = mysql.createConnection({
  host: 'localhost',//we have to define host,user,databse ALSO make one datbase using sql workbench
  user: 'root',
  database: 'delta_app',//write(database and password) from my sql workbench which we can create 
  password:'R#@TiM96'
});




//1)to generate random function for that here is a function
let  getRandomUser=()=> {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
console.log(getRandomUser());