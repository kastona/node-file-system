const fs = require('fs')
const yargs = require('yargs')
const notes = require('./app-files/notes')


yargs.command({
    command: 'add',
    describe: 'adds a note',
    builder: {
        title: {
            describe: 'null title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'holds body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function () {
        console.log('removing a note')
    }
})

yargs.command({
    command: 'edit',
    describe: 'edits a note',
    handler: function() {
        console.log('editing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'shows a list of notes',
    handler: function() {
        console.log('listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'reads notes out loud',
    builder: {
        n: {
            describe: 'number of notes to read',
            type: 'int',
            demandOption: false
        }
    },
    handler: function(argv) {
        
        if(argv.n) {
            console.log(`Reading first ${argv.n} notes`)
        } else {
            console.log('Reading all notes')
        }

        const dataString = fs.readFileSync('note.json').toString();

        const dataObject = JSON.parse(dataString);

        console.log(dataObject.title);
        console.log(dataObject.body);
    }
})


yargs.parse()