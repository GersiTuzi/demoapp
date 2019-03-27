//Install express server

const appExpress = require('./server/app_express')
const http = require('http')
const apiPort = process.env.PORT || 8080
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
appExpress.set('port', apiPort)

const server = http.createServer(appExpress)

server.listen(apiPort)

console.log('Server listening on port ' + apiPort)