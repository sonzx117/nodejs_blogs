const express = require('express');
const app = express();
const port = 3000;

app.get('/trang-chu', (req, res) => {
  res.send('Xin chao nodejs');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})