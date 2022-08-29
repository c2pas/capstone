const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/frontend'));


// app.get('/', (req, res) => {
// res.sendFile(__dirname + '/frontend/index.html');
// });

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/frontend/signin.html');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

  
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})