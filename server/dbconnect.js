const sql = require("mysql");
const sqlconnnection = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"medical",
    multipleStatements:true
});

sqlconnnection.connect((err)=>{
if(!err){
console.log("database connected");
}
else{
    console.log("database not connected")
}
})

module.exports = sqlconnnection;
