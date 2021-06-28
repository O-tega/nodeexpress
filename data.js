const person={
    firstname:"john",
    lasname:"Doe",
    hobbies:['coding', 'travelling', 'cooking'],
    walk: function(){
        console.log(person.firstname + ' is walking')
    },
};


let student =[
    {name: "Mike"},
    {name: "Nike"},
    {name: "Praise"},
    {name: "George"},
    {name: "unity"}
]


// for (index=0; index<student.length; index++){
//     console.log(student[index].name)
// }


// const stud = student.map((e)=>{
//     console.log(e.name)
// })
// console.log(person)


module.exports = {
    person,
    student
}