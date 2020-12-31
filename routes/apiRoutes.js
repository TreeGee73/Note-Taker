const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

module.exports = function (app) {
    let notes = require('../db/db.json');
    
    // API to send the db.json file on GET request from notes.html   
    app.get('/api/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
    
    // API to post to db.json file on POST request from notes.html
    app.post('/api/notes', function (req, res) {
    const newNote = JSON.parse(fs.readFileSync('../db/db.json'));

    data = req.body;
    data.id = uuid.v4();
    newNote.push(data);
    fs.writeFileSync('../db/db.json', JSON.stringify(newNote));
    
    res.json(true);
    });
    
    // API to delete from db.json on DELETE request from notes.html
    app.delete('/api/notes/:id', function (req, res) {
        const oldNote = JSON.parse(fs.readFileSync('../db/db.json'));
        const deleteNote = oldNote.filter((noteDelete) => noteDelete.id !== req.params.id);

        fs.writeFileSync('../db/db.json', JSON.stringify(deleteNote));
        res.json(deleteNote);
    });
}
