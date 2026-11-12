const fs = require('node:fs/promises');

async function handleFiles() {
    try {
        // 1. Write the initial file
        await fs.writeFile('./fullCycleTest.txt', 'Line 1: File created!\n');
        
        // 2. Append a new line to the file
        await fs.appendFile('./fullCycleTest.txt', 'Line 2: Appending a new line!\n');

        // 3. Read the entire file to see both lines together
        const fileContents = await fs.readFile('./fullCycleTest.txt', 'utf8');
        console.log('Full life Contents:\n' + fileContents);

    } catch (error) {
        console.error('Error handling files:', error);
    }
}

handleFiles();