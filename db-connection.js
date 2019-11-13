var mysql = require('mysql');//import mysql library
var externalip = require('externalip');// see below

externalip(function (err, ip) {
  console.log(ip); // => 8.8.8.8
}); // It might be that the IP address of the Replit is blocked, if this is the case then they should get the IP and we can whitelist it.

const casperDb = {
  host: "35.189.121.127",
  user: "D0002",
  password: "password569206",
  database: "cards"
};

const tomDb = {
  host: "35.197.226.46",
  user: "usermcuserface",
  password: "faceface",
  database: "freepizza"
}
// the connection data

// var con = mysql.createConnection(casperDb);

  var con = mysql.createConnection(tomDb);

  var allCardsQuery = 'select pip, suit from cards';
  var pizzaQuery = 'select * from howmuchpizza;';


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

  });


function doQuery(query) {
  //comment out below to get all cards
  //  let x = parseInt(Math.ceil(Math.random()*52))
  //  let sql = 'select pip,suit from cards where id ='+x;
  //uncomment below to get all cards
    con.query(query, function (err, result) {
      if (err) throw err;
      if (result) {console.log(result)};
    });
  };

  function processData(data) {
    let i = 0;
    let cards = [];
    for (row of data) { //loops through data
     cards.push(row.pip+row.suit) //pushes cards to cards array
      // for (key of Object.keys(row)) {
      //   console.log(key+ " : "+row[key])
      // }
    i++;
    }
    callMe(cards) // calls function with cards array
  }


   function callMe(cards) {
     //uncomment out this to get all cards
      console.log(cards)
     //comment out the below for all cards
     let i=0
     //console.log(cards[i])
   }

   doQuery(pizzaQuery);

   module.exports = { doQuery }
