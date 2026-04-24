const https = require('https');
const options = {
  hostname: 'en.wikipedia.org',
  path: '/w/api.php?action=query&prop=images&titles=Domino%27s&format=json',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
