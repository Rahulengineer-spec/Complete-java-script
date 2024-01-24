// const user = {
//     username: 'rahul',
//     password: '<PASSWORD>',
//     welcomeMessage: function() {
//         console.log(this.username + ' welcome again');
//     }
//     //this keyword is used to refferring current value
// }
// console.log(user.welcomeMessage());
// user.username='virat';

// console.log(user.welcomeMessage());
// console.log(Object.entries(user));

// function morning(){
//     const userDetails = {
//         username: 'ardentian',
//         password: 'password'
//     };
//     console.log(this);
// }

// console.log(morning());


//best method to declaration of arrow function
// const newmethod=()=>{
//     console.log('hello');
// console.log(this)
// }

// newmethod();

//calculator using arrow function
// const calculator=(a,b)=>{
// return a+b;
// }
// console.log(calculator(5,6))


//new way to declarising arrow fuction as a implicit return
const newway1=(num1,num2)=> num1+num2
//if we would use curly braces than we have to use return keyword alsways
//but if we want to use small braces than we cant use return keyword
const newway2=(num1,num2)=>(num1*num2)
console.log(newway1(5,6)) 
console.log(newway2(5,6)) 



