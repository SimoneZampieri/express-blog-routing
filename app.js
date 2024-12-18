const express = require('express');
const app = express();
const port = 3001;
const posts = require('./data/posts');
const postRouter = require('./routers/posts');

app.get('/', (req, res) =>{
    res.send('Server del mio blog')
});

app.use('/posts', postRouter);

app.listen(port, () =>{
    console.log('Funziona')
});