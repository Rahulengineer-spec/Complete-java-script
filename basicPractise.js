//taking input prompt user in vs code in java script
// Get the age and salary inputs
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (age) => {
  rl.question("Enter your salary: ", (salary) => {
    // Check eligibility
    if (parseInt(age) >= 18 && parseInt(salary) >= 30000) {
      console.log("Congratulations! You are eligible for the promotion.");
    } else {
      console.log("Sorry, you are not eligible for the promotion.");
    }

    rl.close();
  });
});



//data types
// let name='chris hemsworth'
// const degree_Diploma='computer science'
// var Age=20;
// const class_10_marks={
//     shyam:{
//      class:'10th',
//      uid:'19bcs1677',
//      age:'16'
//     },
//     Ravi:{
//         class:'10th',
//         uid:'19bcs1679',
//         age:'16'
//        },
//        Rahul:{
//         class:'10th',
//         uid:'19bcs1678',
//         age:'17'
//        }};

////some basic operation on object data types in java script


//    //printing  the statement
//       console.log(degree_Diploma);
//       console.log(Age);
//       console.log(class_10_marks.shyam.class);
//       console.log(class_10_marks.shyam.uid);
//       console.log(class_10_marks.shyam.age);
//       console.log(student_data[2]);
//       console.log(student_data.includes(class_10_marks))
//       console.log(student_data.includes());
    

//        //conversion of object into array in java script using 'Object.entries()' keywords
//        const student_data=Object.entries(class_10_marks); //using Object.entries method
//        console.log(student_data);
//        console.log({...class_10_marks});


////conversion of string data types into an array using 'from' keywords
// console.log(Array.from('Rahul'));

////let we have given a complex array than we can simply convert into a simple array
////using 'flat(infinity)' keywords
// const newMark=[12,34,56,[23,45],[34,56,78,[34,56,87]]]
// console.log(newMark.flat(Infinity));
// console.log(newMark[3])



      ////function using java script
    //   function fibonacci(n){
    //     var a=0;
    //     var b=1;
    //     var c=0;
    //     for(var i=0;i<n;i++){
    //         c=a+b;
    //         a=b;
    //         b=c;
    //         console.log(c);
    //     }

    //   }
    //   console.log(fibonacci(15));


    ////taking two or more input in java script function using '...num1'
    // function fav_Movie_Collection(...movie){
    //     return movie;

    // }
    // console.log(fav_Movie_Collection('star wars','batman','spiderman',"thor",'infinity war','doctor strange','iron man','matrix'));
 

////using get Array method we can get data from any array using java script function
// const movieName=['star wars','batman','spiderman',"thor",'infinity war','doctor strange','iron man','matrix']
// function returnIndexValue(getArray){
// return getArray[2];

// }
// console.log(returnIndexValue(movieName));

////using 'concat' method we can concatenate two or more arrays using java script function
// updated_marks1=[30,24,56];
// updated_marks2=[30,24,56];
// updated_marks3=[30,24,56];
// final_Array=[];
// console.log(final_Array.concat(updated_marks1, updated_marks2, updated_marks3));

////using 'join' method we can join two or more arrays using java script function

// console.log(final_Array.join('MY_New_CART'));

