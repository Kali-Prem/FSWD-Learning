let user = {
    name : "Hello"
}
let user2 = user;     //user ka adress copy hua hai yahan pr user2 me
user2.name = "Ankit";
console.log(user.name); //print ankit
// non-primitive me address copy hua jiske karan address copy hua hai esiliye user2 me change krne pr user me change hua 
