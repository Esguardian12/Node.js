const fs = require('node:fs/promises');

async function readMyFile() {
    try {
        // Arguments: (filePath, characterEncoding)
        const rawData = await fs.readFile('./output.txt', 'utf8');

        console.log('--- File Content Successfully Read ---');
        console.log(rawData);
    } catch (error) {
        console.error('Could not read file. Make sure output.txt exists first!', error);
    }
}

readMyFile();