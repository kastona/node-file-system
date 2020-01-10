const fs = require('fs');

// fs.writeFileSync('note.txt', 'anything to appear');

fs.appendFileSync('note.txt', '. An appended text')
