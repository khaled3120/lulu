const https = require('https');

https.get('https://www.rhodeskin.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    console.log("Length:", data.length);
    const rhode = data.match(/rhode/gi);
    console.log("Rhode mentions:", rhode ? rhode.length : 0);
    const svgs = data.match(/<svg[^>]*>.*?<\/svg>/gs);
    if(svgs) {
       for(const s of svgs) {
         if (s.includes('rhode')) {
           console.log(s);
         }
       }
    }
  });
});
