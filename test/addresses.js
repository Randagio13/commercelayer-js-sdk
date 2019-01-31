const commercelayer = require('../index')
const test = require('./test')

// test.config.access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOjEzNn0sImFwcGxpY2F0aW9uIjp7ImlkIjoxOTYsImtpbmQiOiJjaGFubmVsIiwicHVibGljIjp0cnVlfSwidGVzdCI6dHJ1ZSwiZXhwIjoxNTQ4NTgzMTE2LCJtYXJrZXQiOnsiaWQiOjE4NSwicHJpY2VfbGlzdF9pZCI6MTgxLCJzdG9ja19sb2NhdGlvbl9pZHMiOlsyOTEsMjg5XSwiZ2VvY29kZXJfaWQiOm51bGx9LCJyYW5kIjowLjk2NjQ1Mjg4NzkzNzUxMjV9.OGn8xGe9AKp26yZFrBvh9s12vnOfxnX206MOMI7gLZ0pacxCaut7yn_wA-mxANQtHVQC-5T7ZREeWwqnSftP_';

commercelayer.initialize(test.config);

test.separator('listAddresses()');
test.execute(commercelayer.listAddresses())
    .then(() => console.log(commercelayer.lastAccessToken()));
    