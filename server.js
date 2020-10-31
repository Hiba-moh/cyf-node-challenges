const express = require ('express');
const app = express ();

// let message ={
// "/pharmacies":	"returns pharmacies list for stratford"
// "/colleges"	returns colleges list for stratford
// /doctors	returns doctors list for stratford
// /hospitals	returns hospitals list for stratford
// }


app.get ('/', (req, res) => {
  res.send ('Welcome to our new server');
});

app.listen (process.env.PORT);
