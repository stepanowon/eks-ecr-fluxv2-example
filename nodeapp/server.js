'use strict';

const express = require('express');
const os = require('os');
// 
const PORT = 80;
const HOST = '0.0.0.0';

// 
const app = express();
app.get('/', (req, res) => {
  return res.status(200).send(`
  <div>
    <h2> Version: 1.0.0 </h2>
    <h2> 호스트명 : ${os.hostname()} </h2>
  </div>
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
