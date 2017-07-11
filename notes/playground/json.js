// object to JSON
var obj =
{
    name: 'Justin'
};

var stringObj  = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// JSON to object
var personString = '{"name": "Justin", "age": 37}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);


// write JSON object to file as a string, and read it back into an object
const fs = require('fs');

var originalNote =
{
    title: 'Some title',
    body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));
var note = JSON.parse(fs.readFileSync('notes.json'));
console.log(note.title);
