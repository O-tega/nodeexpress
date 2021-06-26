 // ============================ DATA BANK =================================
 const persons = [{
     firstName: "John",
     lastName: "Doe",
     occupation: "Business man",
     gender: 'Male'
    },
    {
    firstName: "Jane",
    lastName: "Doe",
    occupation: "Manager",
    gender: 'Female'
    }];

const students = [{
        Name: "Tega Igho",
        Dept: "Information Technology",
        Level: 400
    },
    {
        Name: "Deolu Emmanuel",
        Dept: "Computer Science",
        Level: 400
    }]


// ==================LOOPING THROUGH THE DATA USING THE FOR LOOP=================
// console.log('=============FOR LOOP==============');
// for (index=0; index<persons.length; index++ ){
//     const person = persons[index];
//     console.log(person.firstName);
//     console.log(person.lastName);
//     console.log(person.occupation);
//     console.log(person.gender, '\n');
// }

//==========================USING THE MAP FUNCTION===============================
// console.log('=============MAP================');
// persons.map(({firstName, lastName, occupation, gender})=>{
//     return(
//         console.log(firstName),
//         console.log(lastName),
//         console.log(occupation),
//         console.log(gender, '\n')
//     )
// })


module.exports= {
    persons,
    students
}