require('express-async-errors')
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('uploads'))

const fileRoutes = require("./routes/files")

app.use('/api/v1/files', fileRoutes);

const port = (process.env.PORT || 3000);
app.listen(port, ()=> console.log(`Server now running on ${port}`));
    mongoose.connect('mongodb+srv://boluakins:%40Akinsola1@cluster0-wounk.mongodb.net/general?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log('Atlas Connected');
    
}).catch((err) => {
    console.log(err);
    
});