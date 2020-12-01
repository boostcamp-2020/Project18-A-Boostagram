import express from 'express';
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.post('/', (req, res) => {
  const {
    accessKey = '',
    secretKey = '',
    ncloud = '',
    region = '',
  } = process.env;
  const bucketName = 'boostagram';
  const endpoint = new AWS.Endpoint(ncloud);
  const localFilePath = path.join(__dirname, '../../uploads/');

  const S3 = new AWS.S3({
    endpoint,
    region,
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
  });
  fs.readdir(localFilePath, (err, fileList) => {
    const promiseArr = fileList.map(async (file) => {
      return S3.putObject({
        Bucket: bucketName,
        Key: file,
        ACL: 'public-read',
        Body: fs.createReadStream(localFilePath + file),
      })
        .promise()
        .then(() => fs.unlink(localFilePath + file, () => undefined));
    });
    Promise.all(promiseArr).then(async () => {
      const resArr = fileList.map((file) => {
        return `${process.env.ncloud}/${bucketName}/${file}`;
      });
      res.status(200).json(resArr);
    });
  });
});

export default router;
