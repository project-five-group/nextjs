const ngrok = require('ngrok');

ngrok.connect(3000).then(ngrokUrl => console.log(`ngrok start on ${ngrokUrl}`));
