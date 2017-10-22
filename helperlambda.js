'use strict';
// Lambda helper function, CloudFormation custom resource
// Copy an object from an Amazon S3 bucket to another bucket
// https://aws.amazon.com/blogs/compute/build-a-serverless-private-url-shortener/
const AWS = require('aws-sdk');
const url = require('url');
const response = require('cfn-response');

exports.handler = (event, context, cb) => {
  const resource_type = event.ResourceType;
  if (resource_type === "Custom::LambdaS3Copy") {
    const s3 = new AWS.S3();
    const src = event.ResourceProperties.Source;
    const bucket = event.ResourceProperties.Bucket;
    const key = event.ResourceProperties.Key;
    if (event.RequestType == 'Delete') {
      s3.deleteObject({Bucket: bucket, Key: key}, (err, data) => {
        if (err) {
          response.send(event, context, response.FAILED, err);
        } else {
          response.send(event, context, response.SUCCESS);
        }
      });
    } else {
      s3.copyObject({CopySource: src, Bucket: bucket, Key: key}, (err, data) => {
        if (err) {
          response.send(event, context, response.FAILED, err);
        } else {
          response.send(event, context, response.SUCCESS);
        }
      });
    }
  } else if (resource_type === "Custom::LambdaURLtoDomain") {
    const url_check = url.parse(event.ResourceProperties.APIUrl);
    const APIUrl = url_check.hostname || url_check.href;
    const responseData = { Domain: APIUrl };
    response.send(event, context, response.SUCCESS, responseData);
  } else {
    response.send(event, context, response.FAILED, "Unsupported resource type: " + resource_type);
  }
};
