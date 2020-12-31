const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

module.exports = function (app) {    
    // API to send the db.json file on GET request from notes.html   
    app.get('/api/notes', function (req, res) {
        fs.readFile('../db/db.json', 'utf8', function (err, log) {
            const noteList = JSON.parse(log)|| [];
            res.json(noteList);
        });
    });
    
    // API to post to db.json file on POST request from notes.html
    app.post('/api/notes', function (req, res) {
        fs.readFile('../db/db.json', 'utf8', function (err, log) {
            const addNote = JSON.parse(log) || [];
            const newNote = req.body;
            
            newNote.id = uuid();
            addNote.push(newNote);
            
            fs.writeFile('../db/db.json', JSON.stringify(db2), function (err) {
                if (err) throw err;
                res.json(addNote);
            });
        });
    });
    
    // API to delete from db.json on DELETE request from notes.html
    app.delete('/api/notes/:id', function (req, res) {
        const id = req.params.id;
        
        fs.readFile('../db/db.json', 'utf8', function (err, log) {
            const noteList = JSON.parse(log);
            const filteredNotes = noteList.filter((note) => note.id !== id);
            
            fs.writeFile('db/db.json', JSON.stringify(filteredNotes), function (err) {
                if (err) throw err;
                
                res.json(filteredNotes);
            });
        });
    });
};
