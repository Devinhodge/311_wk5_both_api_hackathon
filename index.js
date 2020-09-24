const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require("./routes/employees");


const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Getting Employees');
})

app.get('/firstname/:first_name', (req, res) => {
  res.send('Getting Employees by first name');
})


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

