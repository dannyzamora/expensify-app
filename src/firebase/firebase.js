import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase,database as default};

// database.ref('expenses')
//     .on('value',snapshot=>{
//         const expenses = [];
//         snapshot.forEach(childSnapshot=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//    })
    

// database.ref('expenses').push({
//     description :"RENT",
//     note:"DDD",
//     amount: 1234,
//     createdAt: "@@@@@"


// })
// database.ref('notes/-M-vBod0u-q--Oza9nWW').remove();
// database.ref('notes').push({
//     title:'todo',
//     body: 'gofor a run'
// })
// const firebaseNotes={
//     notes:{
//         a:{
//             title:'Another One',
//             body:'booty'
//         },
//         B:{
//             title:'Another two',
//             body:'booty'
//         }
//     }
// }
// const database = firebase.database();
// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'This is my note'
// },
// {
//     id: '12we',
//     title: 'anotehr note',
//     body: 'This is my note'

// }
// ]

// database.ref('notes').set(notes)
// const onValueChange = database.ref().on('value',
// snapshot => {
//     const val = snapshot.val();
//     console.log(val.name, 'is a',val.job.title,'at',val.job.company);
// },e=>{
//     console.log("ERROR",e)
// })
// database.ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val.name, 'is a',val.job.title,'at',val.job.company);
//     })
//     .catch(e => {
//         console.log("ERROR", e)
//     }); 

// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log("ERROR with fetching",e)
// });
// setTimeout(()=>{
//     database.ref('age').set(1)
// },4000)

// setTimeout(()=>{
//     database.ref().off('value',onValueChange);
// },7000)

// setTimeout(()=>{
//     database.ref('age').set(2)
// },10000)

// database.ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => {
//         console.log("ERROR", e)
//     });



// database.ref().set({
//     name: "Danny Z",
//     age: 24,
//     stressLevel: 24,
//     job: {
//         title: 'Unemployed',
//         company: 'None'
//     },

//     isSingle: false,
//     location: {
//         city: 'Hayward',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log("set succeeded.")
// })
//     .catch((error) => {
//         console.log("set failed: " + error.message)
//     });;

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Seatle'

// })

// // })
// //database.ref('isSingle').set(false);
// // database.ref('isSingle').remove()
// //     .then( ()=> {
// //         console.log("Remove succeeded.")
// //     })
// //     .catch( (error) =>{
// //         console.log("Remove failed: " + error.message)
// //     });

// database.ref()