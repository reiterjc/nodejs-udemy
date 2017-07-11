const yargs = require('yargs');

const notes = require('./notes.js');

// configure yargs
var titleOptions = {
            describe: 'Title of note',
            demand: true,
            alias: 't'
};
var bodyOptions = {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body : bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

// process command
switch (argv._[0]) {
    case 'add':
        var newNote = notes.addNote(argv.title, argv.body);
        console.log(newNote ? 'Note created' : 'Note title already exists');
        break;
    case 'list':
        var noteList = notes.getAll();
        console.log('List of notes', noteList);
        break;
    case 'read':
        var note = notes.getNote(argv.title);
        console.log(note ? `Found note: ${note.body}` : 'Note not found');
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        console.log(noteRemoved ? 'Note removed' : 'Note not found');
        break;
    default:
        console.log('Command not recognized');
}