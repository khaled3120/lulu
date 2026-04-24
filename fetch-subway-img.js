const https = require('https');
const options = {
  hostname: 'commons.wikimedia.org',
  path: '/w/api.php?action=query&titles=File:Subway_2016_logo.svg&prop=imageinfo&iiprop=url&format=json',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
