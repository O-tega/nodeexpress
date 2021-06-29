const fs = require('fs');
const path = require('path');

const readFilePromise = (pathToFile) =>
  new Promise((resolve, reject) => {
    return fs.readFile(pathToFile, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });

const writeFilePromise = (pathToFile, dataToWrite) =>
  new Promise((resolve, reject) => {
    return fs.writeFile(pathToFile, dataToWrite, (err) => {
      if (err) {
        reject(err);
      }
      resolve('FILE WRITE SUCCESSFULL');
    });
  });

let fileOne = path.join(__dirname, 'text.txt');

readFilePromise(fileOne)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

let fileTwo = path.join(__dirname, 'new3');

writeFilePromise(fileTwo, 'This is a new file')
  .then(() => {
    return readFilePromise(fileTwo);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

// const myFile = async () => {};
async function myFile() {
  try {
    let fileOne = await readFilePromise('./new2.txt');
    console.log(fileOne);
    let fileTwo = await writeFilePromise('./last.txt', fileOne);
    console.log(fileTwo);
    let fileThree = await readFilePromise('./last.txt');
    console.log(fileThree);
  } catch (error) {
    console.error(error);
  }
}

myFile();
