const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require("./routes/employees");


const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use('/employees', employeesRouter);//NEEDED FOR ROUTER JEFF

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})



//THIS IS NOT NEEDED**********************************************************
// app.get('/:emp_no', (req, res) => {
//   res.send('Getting Employee by emp #');
// })


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});