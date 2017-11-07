const AWS = require('aws-sdk')
const s3 = require('s3')
const fs = require("fs"); // from node.js
const path = require("path"); // from node.js

let bucket = process.argv[2]
let cloudfrontDist = process.argv[3]

// configuration
const config = {
    s3BucketName: bucket,
    folderPath: '../build/client' // path relative script's location
}

// initialize S3 client
const s3Client = s3.createClient({
    s3Client: new AWS.S3()
    // more options available. See API docs below.
})
// resolve full folder path
const distFolderPath = path.join(__dirname, config.folderPath);

function invalidateCloudFront(cloudFrontId) {
    const CloudFront = new AWS.CloudFront()
    let params = {
        DistributionId: cloudFrontId,
        InvalidationBatch: {
            CallerReference: (new Date()).toString(),
            Paths: {
                Quantity: 2,
                Items: [
                    '/index.html',
                    '/'
                ]
            }
        }
    }

    CloudFront.createInvalidation(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log(`Successfully invalidated index.html and /`)
        }
    })
}

// get of list of files from 'dist' directory
fs.readdir(distFolderPath, (err, files) => {
    if(!files || files.length === 0) {
        console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
        console.log('Make sure your project was compiled!');
        return;
    }

    // for each file in the directory
    for (const fileName of files) {

        // get the full path of the file
        const filePath = path.join(distFolderPath, fileName);

        // ignore if directory
        if (fs.lstatSync(filePath).isDirectory()) {
            continue;
        }

        var params = {
            localFile: filePath,

            s3Params: {
                Bucket: config.s3BucketName,
                Key: fileName,
                ACL: "public-read"
                // other options supported by putObject, except Body and ContentLength.
                // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
            },
        };

        var uploader = s3Client.uploadFile(params);
        uploader.on('error', function(err) {
            console.error("unable to upload:", err.stack);
        });
        uploader.on('progress', function() {
            console.log("progress", uploader.progressMd5Amount,
                uploader.progressAmount, uploader.progressTotal);
        });
        uploader.on('end', function() {
            console.log(`Successfully uploaded '${fileName}'!`);
            if (fileName == 'index.html') {
                invalidateCloudFront(cloudfrontDist)
            }
        });
    }
});


