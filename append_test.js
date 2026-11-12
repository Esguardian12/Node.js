const fs = require('node:fs/promises');

async function updateFile() {
    try {
        // This adds a new line directly to the bottom of your text document
        await fs.appendFile('./output.txt', 'Adding a new secondary line to the bottom!\n');
        console.log('Line appended successfully.');
    } catch (error) {
        console.error(error);
    }
}
updateFile();