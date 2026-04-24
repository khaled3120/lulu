const https = require('https');

https.get('https://upload.wikimedia.org/wikipedia/commons/2/22/Lululemon_Athletica_logo.svg', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
