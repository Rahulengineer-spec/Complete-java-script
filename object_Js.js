// const dataElement={
//     Name:'rahul',Uid:'19bcs1677',Fee:1234567,hobby:'playing cricket'};
//     console.log(dataElement);
//     console.log(dataElement.Uid);
//     Object.create({Name:'rahul',Uid:'19bcs1677',Fee:1234567});
//     Object.freeze(dataElement);
//     dataElement.Name="asus laptop";
//     console.log(dataElement);
//     Object.freeze(dataElement);


// dataElement.greeting=function(){
//     console.log("Good Morning"+dataElement.Name);
// console.log('hello welcome to delhi,${this.Fee}');
// }
// console.log(dataElement.greeting);
const myObj123={name:'rahul',Uid:'19bcs1677'
,username:{
    firstname:{
    fullName:'amamzon',lastName:'inc'
}

} 
    }
    // console.log(Object.keys(myObj123))
    // console.log(myObj123.username.firstname.lastName);

    //objecvt handling using function in java acsruip0t
    function handleObject(anyObject){
        console.log(Object.keys(anyObject));
        console.log(Object.values(anyObject));
        console.log(`the username is ${anyObject.name} and their password is ${anyObject.username.firstname.fullName}`);
        console.log(Object.getOwnPropertyNames(anyObject));
    }
    handleObject(myObj123);

    //array handling in java script using function
    const arr1=[453,342,567,'rahul','ardentian',85765];
    function handleArray(getArray){
       return getArray[5];
    }
    console.log(handleArray(arr1));
    console.log(handleArray([12,34,23,13,'god','great leader']));
