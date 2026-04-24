const https = require('https');
https.get('https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/rhode.svg', (res) => {
  console.log(res.statusCode);
});
