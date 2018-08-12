var express = require('express');
// config做一个配置
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

// router异步接口，从build->dev-srver拷贝的

var router = express.Router();

// 定义路由
router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

// 通过下面use使用router
app.use(router);

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
