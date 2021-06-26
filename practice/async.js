//======================READING AND WRITING TO A FILE  =======================
// To read to file synchronically, we use the readFilesync, and readFile for async
// To write to a file synchronically, we use the writeFileSync and writeFile async

const path = require('path');
const fs = require('fs');

//================================READING A FILE==============================
// const filePath = path.join(__dirname, 'text.txt')
// const readFile = fs.readFileSync(filePath, 'utf-8');

// console.log(readFile);


//============================WRITING TO A FILE==============================

// const filePath1 = path.join(__dirname, 'newtext.txt');
// const writeFile = fs.writeFileSync(filePath1, 'This is the new file that was written')

// console.log(fs.readFileSync(path.join(__dirname, 'newtext.txt'), 'utf-8'))


//================READING AND WRITING TO A FILE ASYNCHRONOUSLY================

// const newFilePath = path.join(__dirname, 'text.txt')

// fs.readFile(newFilePath, 'utf-8', (err, data)=> {
//     if (err){
//         console.log(err)
//     }console.log(data)

//     fs.writeFile('./newtext1.txt', 'This is the written file',(err)=>{
//         if (err){
//             console.log(err)
//         }console.log('Write successful')

//         fs.readFile(path.join(__dirname, './newtext1.txt'), 'utf-8', (err, data2)=>{
//             if (err){
//                 console.log(err)
//             }console.log(data2)
//         })
//     })
// })


// ================USING PROMISE TO READ AND WRITE DATA======================
// To use the promise, we have to write a function that will call the promise.


//promise function to read file
//======================================
const readFilePromise = (pathToFile)=>{
   return  new Promise((resolve, reject)=>{
        return fs.readFile(pathToFile, 'utf-8', (err,data)=>{
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

// Promise function to write file
//============================================

const writeFilePromise = (pathToFile, dataToWrite)=>{
    return new Promise((resolve, reject)=>{
        return fs.writeFile(pathToFile, dataToWrite, (err)=>{
            if (err){
                reject(err)
            }
            resolve('WRITE SUCCESSFUL')
        })
    })
}


// USING BOTH READ AND WRITE PROMISE TO READ AND WRITE TO A FILE

const newFilePath = path.join(__dirname, 'text.txt');
const anotherPath = path.join(__dirname, 'new3.txt');

readFilePromise(newFilePath)
    .then((response)=>{
        console.log(response)
        writeFilePromise(anotherPath, 'I am using the write promise to work')
            .then(()=>{
                readFilePromise(anotherPath)
                    .then((response)=>{
                        console.log(response)
                    })
            })
    })
    .catch((err)=>{
        console.log(err)
    })