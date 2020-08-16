const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid');

let notesArr;

const readFileAsync = util.promisify(fs.readFile);
const writeFileAysnc = util.promisify(fs.writeFile);
const { json } = require('express');

class NotesFile {
    read() {
        return readFileAsync('db/db.json', "utf8"); 
    }
    async write(note) {
        const newNote = {
            ...note,
            id: uuidv1()
        }
        const existingNotes =  await this.read();
            const newArr = JSON.stringify([...JSON.parse(existingNotes), newNote])
         return writeFileAysnc('db/db.json', newArr, 'utf8', function() {
             return
         });
     }
    async getNotes() {
       const notes = await this.read();
        return JSON.parse(notes);  
    }
    
}

module.exports = new NotesFile();