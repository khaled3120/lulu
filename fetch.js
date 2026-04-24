const https = require('https');
https.get('https://www.aloyoga.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const svgs = data.match(/<svg.*?<\/svg>/g);
    if(svgs) {
       console.log(svgs.slice(0, 5).join('\n---\n'));
    } else { console.log('no svgs found'); }
  });
}).on('error', console.error);
