import mysql from 'mysql';

const mysqlconnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'516euge94324590',
    database:'kayak'
});

mysqlconnection.connect( (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
       console.log('DB is conected'); 
    }
});

module.exports = mysqlconnection;