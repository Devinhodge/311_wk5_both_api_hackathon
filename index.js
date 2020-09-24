const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000


app.listen('3000', () => {
  console.log ('Server started on port 3000');