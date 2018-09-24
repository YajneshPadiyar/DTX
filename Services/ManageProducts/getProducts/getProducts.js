var express = require('express');
var router = express.Router();

var DynamoDBUtils = require('../../AWSUtils/DynamoDB/getItems');
var DynamoDBUtilsBatch = require('../../AWSUtils/DynamoDB/batchWrite');
var DynamoDBUtilsUpdate = require('../../AWSUtils/DynamoDB/updateItems');
var Config = require('../../config/config');
//console.log(DynamoDB);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Get Products V1.0');
});

router.post('/updateItem', function(req, res, next){
  var response = {};

  var internalRequest = {};

  internalRequest = req.body;

  DynamoDBUtilsBatch.updateItems(internalRequest, function(err, data){

  if(err){
    response = {
      status: false,
      err
    }
  }else{
    response = {
      status: true,
      data
    }
  }

  res.send(  response  );
  });

});

router.post('/batchWriteItem', function(req, res, next){
  var response = {};

  var internalRequest = {};

  internalRequest = req.body;

  DynamoDBUtilsBatch.batchWrite(internalRequest, function(err, data){

  if(err){
    response = {
      status: false,
      err
    }
  }else{
    response = {
      status: true,
      data
    }
  }

  res.send(  response  );
  });

});

router.post('/', function(req, res, next) {
  //console.log("addCustomer : Post Method");
var response = {};
//console.log(req);

/*var internalRequest = {
  TableName: Config.TEST_TABLE,
  IndexName: Config.ORG_NAME,
  KeyConditionExpression: Config.SEARCH_STRING_GET_PRODUCT,
  ExpressionAttributeValues: {
    ":PRODUCTTYPE": req.body.PRODUCT_TYPE
  }
}//*/
var internalRequest=req.body;
console.log("InternalRequest");
console.log((internalRequest));
DynamoDBUtils.getItems(internalRequest, function(err,data){
  //console.log("Inside Callback");
  //console.log(err);
  if(err){
    response = {
      status: false,
      err
    }
  }else{
    response = {
      status: true,
      data
    }
  }
  //req.body="NoValue";
  res.send(  response  );
});
//await x
//console.log("Result");

});

module.exports = router;
