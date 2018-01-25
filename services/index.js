/**
 * Gets authorization keys to subscribe to IoT Topic
 * @summary some lambda
 * @param {string} key - event.Records[0].s3.object.key
 * @callback  cb(null, body:{ host, accessKeyId, secretKey, sessionToken  })
 */

const {ElasticTranscoder} = require('aws-sdk')
const et = new ElasticTranscoder({region: 'us-east-1'})

exports.getKeys = ({ Records:[{ s3: {object: { key }}}] }, _, cb) => {
  cb(key)

}
