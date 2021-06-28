const fs = require('fs');
const path = require('path')


const readFilePromise = (pathToFile)=>
    new Promise((resolve, reject)=>{
        return fs.readFile(pathToFile, 'utf-8', (err, data)=>{
            if (err) {
                reject (err);
            }
            resolve(data)
        });
    });

    let fileOne = path.join(__dirname, 'text.txt');

    readFilePromise(fileOne)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => console.log(err));


//=======================CONVERT WRITE FILE TO PROMISE============================

const writeFilePromise = (pathToFile) =>
        new Promise((resolve, reject) => {
            return fs.writeFile(pathToFile, 'this is a book', (err) =>{
                if (err) {
                    reject (err);
                }
                resolve()
            })
        })

let fileTwo = path.join(__dirname, './new2.txt');

    writeFilePromise(fileTwo)
        .then((result)=>{
            console.log(result)
        })
        .catch((err) => console.log(err))


// readFilePromise(fileTwo)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => console.log(err));


//================================CORRECTION=====================================

// const writeFilePromise = (pathToFile , dataToWrite)=>
//     new Promise((resolve, reject)=>{
//         return fs.writeFile(pathToFile, dataToWrite, (err)=>{
//             if (err) {
//                 reject(err);
//             }
//             resolve("FILE WRITE SUCCESSFUL")
//         });
//     });



//     let fileTwoA = path.join(__dirname, 'new3');

    // writeFilePromise(fileTwoA, 'This is the correct method')
    // .then(()=>{
    //     return readFilePromise(fileTwoA).then((result)=>console.log(result))
    // })
    // .catch((err)=> 
    // console.log(err))

//========================== USING THE ASYNC AWAIT METHOD =======================

async function myFile() {
    try{
        let newFile = await readFilePromise('./new2.txt');
        console.log(newFile);
        let newFile2 = await writeFilePromise('/newFile3.txt', newFile);
        console.log(newFile2);
        let newFile3 = await readFilePromise('./newFIle2.txt');
        console.log(newFile3);
    } catch (error) {
        console.error(error);
    }
}

myFile();