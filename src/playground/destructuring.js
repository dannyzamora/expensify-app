
// // const person = {
// //     name: 'Danny',
// //     age: 23,
// //     location: {
// //         city:'Hayward',
// //         temp: 92
// //     }
// // };

// // const {name = 'Ano',age}= person; //name has a default value
// // const {city,temp:temperature}=person.location;
// // console.log(name, 'is', age);
// // console.log(city,'is',temperature)

// const book ={
//     title : "EGO",
//     author: 'DZ ME',
//     publisher:{
//         name:'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName)

//object ^
//array \/ 

// const address = ['address','city','state','zip'];

// const [, city,state]=address // first index is skipped "\nothing is here\,city...." stops after index 2 so does not include the rest

// console.log( city,state)

const item = ['coffee ', '2','2.5','2.75'];

const[coffe,,medium] = item;

console.log('a medium',coffe,'is',medium)