function one(){
    const username='rahul'
    console.log(username);
    function two(){
        const website='google'
        console.log(username,website)
    }
    //console.log(website);
    console.log(two())
}
console.log(one())

//we can acceess outer variable within scopes but not ineer
