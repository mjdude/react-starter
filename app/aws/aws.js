var AWS = require('aws-sdk');

try {
  AWS.config.update({
        accessKeyId:  process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
  });

  var bucketName = process.env.AWS_BUCKET;

} catch (e) {
    console.log('failed to load AWS config');
}


export var uploadFile = (data) => {
  var s3obj = new AWS.S3({params: {Bucket: bucketName , Key: data.name}});
  s3obj.upload({Body: data})
    .on('httpUploadProgress', function(evt) {
      console.log('Logging Http Progress');
    })
    .send(function(err, data) {
      console.log(data);
      console.log(data.Location);
    });
};


export var uploadFilePromise = (data , fileName, uploadType ='' ) => {
  return new Promise((resolve, reject) => {
    var bucketLocation = uploadType === '' ? bucketName :  bucketName + '/' + uploadType;
    var s3obj = new AWS.S3({params: {Bucket: bucketLocation  , Key: fileName}});
    s3obj.upload({Body: data})
      .on('httpUploadProgress', function(evt) {
        console.log('Logging Http Progress');
      })
      .send(function(err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
      });
  });
};



export default AWS;
