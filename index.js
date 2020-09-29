const express = require("express");
const bodyParser = require("body-parser");
const employeesRouter = require("./routes/employees");
const managerRouter = require("./routes/manager");
const salariesRouter = require("./routes/salaries");
const employeeCountRouter = require("./routes/employeeCount");

const intro = require('./intro.js')

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use('/employees', employeesRouter);//NEEDED FOR ROUTER JEFF
;
app.use('/manager', managerRouter);
app.use('/salaries', salariesRouter);
app.use('/employeeCount', employeeCountRouter);

app.get('/', (req, res) => {
  res.send(intro.intro)
})



app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});