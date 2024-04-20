const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../html/home.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// testing for learning API, nothing matters
// app.get('/home',(req, res) => {
//     res.status(200).send({
//        post: 'Lord of the Ring',
//        author: 'Tolkien'
//     })
// });

// app.post('/home/:id',(req, res) =>{

//     const { id } = req.params;
//     const { author } = req.body;

//     if(!author){
//         res.status(418).send({Message: 'need an author !!!'})
//     }

//     res.send({
//         post: `${id} was made by ${author}`,
//     })

// })

// return loss  5/100