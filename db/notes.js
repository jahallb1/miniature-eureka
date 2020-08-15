const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAysnc = util.promisify(fs.writeFile);
const { json } = require('express');

class NotesFile {
    read() {
        return readFileAsync('db/db.json', "utf8"); 
    }
    write() {
         return writeFileAysnc('db/db.json').json.toString(notes);
     }
    getNotes() {
        return this.read().then((notes) => {
        let notesArr = [];  
        notesArr = [].concat(JSON.parse(notes));
        return notesArr;  
        })
    }
}

module.exports = new NotesFile();