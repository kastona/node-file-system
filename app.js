
const yargs = require('yargs')

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
        console.log(`Adding note with title ${argv.title}`);
        console.log(`Body: ${argv.body}`)
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
    handler: function() {
        console.log('reading notes')
    }
})


yargs.parse()