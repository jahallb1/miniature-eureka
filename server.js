const fs = require('fs');
const path = require('path');
const express = require('express');

const apiRoutes = require('./routes/apiroutes');
const notesClass = require('./db/notes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
})

app.post('/api/notes', (req, res) => {
    const note = notesClass.write(req.body);
    console.log(req.body);
    res.json(note);  
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});