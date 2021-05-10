//import
const express = require('express')
const app = express()
const port = 3000

//static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/image', express.static(__dirname + 'public/image'))


app.get('', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})




//listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))





// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.sendFile('index.html')
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });
