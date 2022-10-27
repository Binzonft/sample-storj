const { S3Client , PutObjectCommand , GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const accessKeyId = "jwo344tshppj7tkqfc4rjlp2th7a";
const secretAccessKey = "j3ug7po2nixvzwy3cidy2iivk7auxfxju3yfw7hjzi57vfk6fh4zk";
const endpoint = "https://gateway.storjshare.io";

const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const multer = require('multer')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 8003
const _S3Client = new S3Client({ credentials :{ accessKeyId, secretAccessKey }, region : 'us-1', endpoint })
// 17SkHPGKyrqbLaVsDt7Fnwp28tWqXjUEAm7Fpz638CqJ7JVsdjfoK2NN21qopTwczj8fdkjx9gPEmsuHAFUBr92JK8cTKHQsmkAzy1wYN7tM5XU4DKgSm4ht3GzKQZySX9fhEMUngADTobsGKT5JuhnUEyxy3zAJu96rP76zJ9r3EKbC7hV5w9nA3Bo3NcPFfNJoKPx2rMUxWx7E9XPDzFiMJU5xn9z2N1AMPa9p9aBDgv7yTV18ieZczaBZqsbWRYEa2C3mjP8i5DKu9zxBqDmXvVaPkunxaN3TS

// https://link.storjshare.io/s/jwsazgcslys3c33dwbvarbdcsqfa/demo/
// https://link.storjshare.io/raw/jwsazgcslys3c33dwbvarbdcsqfa/demo/tree-736885__480.jpeg?wrap=1
// https://link.storjshare.io/raw/jwsazgcslys3c33dwbvarbdcsqfa/demo/tree-736885__480.jpeg
app.post('/upload', multer().single('logo'), async (req, res) => {

  let params = {
    Bucket : 'demo',
    Key    : req.file.originalname,
    Body   : req.file.buffer,
    ContentType : req.file.mimetype,
  }
  let command = new PutObjectCommand(params);
  _S3Client.send(command)
    .then(response =>{
        console.log(response)
        res.json({ "signedUrl" : response })
    })
    .catch(error =>{
        console.log(error)
    })

})

app.get('/',async (req,res) =>{
    let params = {
        Bucket : 'demo',
        Key  : req.query['image'] 
      }
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(_S3Client, command, { expiresIn: 3600 });
    res.json({ url })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
