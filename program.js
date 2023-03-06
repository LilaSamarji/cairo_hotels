






const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())


app.get('/', function (req, res) {
 

  var XLSX = require("xlsx");
  var workbook = XLSX.readFile("hotel.xlsx");
  var sheet_name_list = workbook.SheetNames;
  console.log(sheet_name_list); // getting as Sheet1
  
  sheet_name_list.forEach(function (y) {
    var worksheet = workbook.Sheets[y];
    //getting the complete sheet
    // console.log(worksheet);
  
    var headers = {}; //object
    var data = []; //array
    for (z in worksheet) {
      //if (z[0] === "!") continue;
      //parse out the column, row, and value
      var col = z.substring(0, 1);
       console.log(col);
  
      var row = parseInt(z.substring(1));
       console.log(row);
  
      var value = worksheet[z].v;
       console.log(value);
  
      //store header names
      if (row == 1) {
        headers[col] = value;
        // storing the header names
        continue;
      }
  
      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;
    }
    //drop those first two rows which are empty
  
    //console.log(data);
    data.shift();
    data.shift();
    res.send(data);
  });

})

app.listen(3000)

