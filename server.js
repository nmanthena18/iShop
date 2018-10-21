// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static('./dist/iShop'));
// app.get('/*', function(req, res) {
//   res.sendFile(path.join('./dist/iShop/index.html'));
// });
// app.listen(process.env.PORT || 8080);

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname, './dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Your node js server is running');
});