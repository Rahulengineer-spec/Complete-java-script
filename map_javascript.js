// const map=new Map()
// map.set('name','rahul')
// map.set('country','india');
// map.set('religion','hindu')
// map.set('Age',22)
//printing ther element in map
//console.log(map)

//using for loopp to accessing the element of map
// for (const [key,value] of map) {

//     console.log(key+' ->'+value) 
// }

// const object={
//     Username:{
//         name:'rahulardentian',password:'Ardentian@123'
//     },userdetails:{
//         FirstName:'Milestones',LastName:'Trio',class:'12th',Stream:"Science"
//     }
// }
//object is not iterable
// for (const [key,value] of object) {
//     console.log('data return from website is:'+(key,value))
    
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element)
        
//     }
// }


//aceessing arrayelement keys and values using for in 
const arr=[54262,221,64,328,567]
for (const key in arr) {
   console.log(arr[key])
}
