const fs = require('node:fs/promises');
const path = require('node:path');

async function moveSelectedFiles() {
    const newFolder = './First-Practice';

    // List all the files you want to move inside this array
    const filesToMove = ['server.js', 'fs_test.js', 'fullCycleTest.js', 'readTest.js', 'append_test.js', 'writeTest.js', 'tornado.js'];

    try {
        // 1. Create the new folder (recursive: true avoids errors if it already exists)
        await fs.mkdir(newFolder, { recursive: true });

        // 2. Loop through each file and move it
        for (const fileName of filesToMove) {
            const currentPath = path.join('./', fileName);
            const destinationPath = path.join(newFolder, fileName);

            await fs.rename(currentPath, destinationPath);
            console.log(`Successfully moved ${fileName}`);
            }

        } catch (error) {
            console.error('Error moving files:', error.message);
    }
}

moveSelectedFiles();