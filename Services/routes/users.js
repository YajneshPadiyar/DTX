var express = require('express');
var router = express.Router();
//var config = require('../config/loadConfig.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var response = {
    reqbody : req.body,
    //Id_Table : config.ID_TABLE
  }
  res.send(  response  );
});

module.exports = router;
