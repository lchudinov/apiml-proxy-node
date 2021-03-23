const httpProxy = require('http-proxy');
const fs = require('fs');

httpProxy.createServer({
  ssl: {
    pfx: [fs.readFileSync('../api-layer/keystore/client_cert/client-certs.p12')],
    passphrase: 'password',
  },
  secure: false,
  target: {
    protocol: 'https:',
    host: 'localhost',
    port: 10010,
    cert: fs.readFileSync('../api-layer/keystore/client_cert/USER-cert.cer'),
    key: fs.readFileSync('../api-layer/keystore/client_cert/USER-PRIVATEKEY.key'),
    rejectUnauthorized: false,
    changeOrigin: true,
  }
}).listen(20010);