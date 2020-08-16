const router = require('express').Router();
const NotesFile = require('../db/notes');

router.get('/notes', async (req, res) => {
    const notes = await NotesFile.getNotes() 
    console.log(notes);
   res.json(notes);
})


module.exports = router;