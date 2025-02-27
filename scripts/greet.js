const fs = require('fs');
const path = require('path');

function renameFilesInDirectory(directory, renameFunction) {
  const entries = fs.readdirSync(directory);

  entries.forEach(entry => {
    const fullPath = path.join(directory, entry);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // Recursively process subdirectories
      renameFilesInDirectory(fullPath, renameFunction);
    } else if (stats.isFile()) {
      try {
        const newName = renameFunction(entry); // Get the new name
        if (newName && newName !== entry) { // Check if renaming is needed and successful
          const newPath = path.join(directory, newName);
          fs.renameSync(fullPath, newPath);
          console.log(`Renamed: ${fullPath} to ${newPath}`);
        }
      } catch (err) {
        console.error(`Error renaming ${fullPath}:`, err);
      }
    }
  });
}


// Example usage:

const directoryToProcess = './xsjs'; // Replace with your directory
const renameFunction = (oldName) => {

    if (oldName	=== 'index.js'){
        return 'index.xsjs';
    }
    if (oldName.endsWith('.js')) {
        return oldName.replace('.js', '.xsjslib');
    }
 
    return oldName;
};


renameFilesInDirectory(directoryToProcess, renameFunction);

 