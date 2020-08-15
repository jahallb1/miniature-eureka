const router = require('express').Router();
const NotesFile = require('../db/notes');

router.get('/notes', (req, res) => {
    NotesFile.getNotes().then((notes) => {
        res.json(notes);
    }).catch((err) => {
    console.log(err)})
})

module.exports = router;