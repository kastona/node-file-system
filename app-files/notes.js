const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    const dub = notes.filter(note => {
        return note.title === title
    })

    if(dub <= 0) {
        notes.push({title, body})
        saveNotes(notes)

        console.log('note added!')
    }else {
        console.log('title already taken!')
    }
    
}

const saveNotes = (notes) => {
    fs.writeFileSync('./note.json', JSON.stringify(notes))
}

const loadNotes = () => {
    console.log('loadNotes...')
    try {
        const dataJson = fs.readFileSync('./note.json').toString()

        return JSON.parse(dataJson)

    }catch(err) {
        return []
    }
}

const removeNote = (title) => {
    let notes = loadNotes()
    notes = notes.filter((n) => {
        return (n.title !== title)
    })
    saveNotes(notes)

    console.log('note removed successfully!')
}

module.exports =  {
    addNote: addNote,
    removeNote: removeNote
}
