//first method to call function is 
function iifi(){
    console.log('Now you are successfully! connected to database 1')
}
console.log(iifi());

//now second method is using arrow function 
const iifii=()=>console.log('Now you are successfully! connected to database 2')
console.log(iifii());


//another way to accessing function or we can say that calling function


(function iife(){
    console.log('Now you are successfully! connected to database 3')
})();

//using arrow function with iifi
(()=>console.log('succesfully! connected to new data base that is Google database'))();


