var AWS = require("aws-sdk");

var Config = require('../../config/config');

var GenerateId = require('./GenerateId');

AWS.config.update({
  region: Config.LAMBDA_AWS_REGION
});

var docClient = new AWS.DynamoDB.DocumentClient();

function batchWrite (params,callBack)  {
  //console.log(params);
  docClient.batchWrite (params, function(err,data){
      callBack(err,data);
    });
}

module.exports = {batchWrite};
