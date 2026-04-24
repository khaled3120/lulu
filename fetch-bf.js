const https = require('https');
const options = {
  hostname: 'brandfetch.com',
  path: '/rhodeskin.com',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Found brandfetch page:', data.length));
});
