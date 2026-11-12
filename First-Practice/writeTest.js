// Import the promises-bases file system module
const fs = require('node:fs/promises');

async function createNewFile() {
    try {
        const content = 'Hello! This text was written using Node.js filesystem capabilities.\n';
        
        // Arguments: (fileName, dataToWrite)
        await fs.writeFile('./output.txt', content);

        console.log('Success! "output.txt" has been created.');
    } catch(error) {
        console.error('Error writing file:', error);
    }
}

createNewFile();