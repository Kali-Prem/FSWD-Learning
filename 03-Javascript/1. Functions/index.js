// Syntax:- Function function_name(parameter){}

// function definition
function sayMyName(){
    console.log("Kali linux")
}
// function call
sayMyName();

// --------------------------------------------
// function which print the counting
function printCounting(){
    for(let i = 1; i <= 100; i++){
        console.log(i)
    }
}
// function call
// printCounting()

// -----------------------------------------
function printNumber(num){       //num is called the parameter of the functions
    console.log("printing number:", num);
}
printNumber(5);  // 5 is called the arguments for that function which is going to pass



// ---------------------print Average-----------------------
function printAverage(num1, num2){
    let avg = (num1+num2)/2;
    console.log("Average:",avg)
}
printAverage(5,60);



// ==============Return Functions->which return something================
// ------------------------
function getSum(a,b,c){
    let sum = a + b + c;
    return sum;
}
let ans = getSum(2,3,4);
// console.log("Sum:",getSum(2,3,4));
console.log("Sum: ", ans);


// -----------------------
function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
    // unreachable statements due to return statement above
    let a = 4;
    let b = 5;
    let sum = a + b;
    console.log(sum);
}
let ans1 = getMyName("Kali", "Linux");
console.log("FullName: ", ans1);




// ===================Functions write different types==================
// --------first way-------------
// function squareNumber(num){
//     let ans = num ** 2;
//     return ans;
// }


// -----------second way-----------
// let squareNumber = function(num){      //function ko maine variable me store kr liya 
//     let ans = num ** 2;
//     return ans;
// }

// ---------Arrow Function => -Third way------------More Priority for this type-------
let squareNumber = (num) => {
    let ans = num ** 2;
    return ans;
}
let ans2 = squareNumber(5);
console.log(ans2);