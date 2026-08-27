// let 123; //error
let abc123 = 10;  //run
console.log(abc123); //javascript is case-sensitive
// let 12abc = 10; //error
// let first wame = " sumit"

// Only two this can be run
let $ = 50;  //run
let _ = 70;  //run



// Primitive Datatype     [Number, string, boolean, null , undefined, symbol, bigint]
// Non-Primitive Datatype [Objects, array, functions ]
// let a = null;
// let b = 1243;
// let c = undefined;




// PRACTICE QUESTIONS


// Q1. HOW DO YO DECLARE A VARIABLE IN JAVASCRIPT?
let a = 4;
var b = 5;
const c = 6;
console.log(a);


// Q2. CAN YOU CHAGNE THE VALUE OF A CCONST VARIABLE?
// ANSWER: - no, BUT in object we can change 

// Q3. WHAT WILL HAPEN IF YOU USE A VARIBALE WITHOUT DECLARING IT?
// answer:- return Undefined because value is not defined
let d;
console.log(d);
console.log(typeof(d));


// Q3. WHAT IS THE DEFAULT VALUE OF AN UNINITIALIZED VARIABLE IN JAVASCRIPT?
// Answer:- undefined

// Q4. WHAT ARE THE PRIMITIVE DATA TYPE IN JAVASCRIPT?
// ANSWER:- Number, string, boolean, null, undefined, bigint,symbol

// Q5. WHAT IS THE DEFFERENCE BETWEEN NULL AND unDEFINED?
// Answer:- null means data baad me aayega but undefined means kcuhh bhi data defined nhi kri gyi hai

// Q6. IS JAVASCRIPT A STATICALLY TYPED OR DYNAMICALLY TYPE LANGUAGE?
// Answer:- dynamically types because 

// Q7. WHAT WILL BE THE OUTPUT OF TYPEOF NULL?
// Answer: - Objects
let k = null;
console.log(typeof(k));


// Q8. WHAT HAPPENS WHEN YOU ADD A NUMBER WITH A STRING IN JAVASCRIPT?
let l = 1 + "2"
let t = 7 - "4";
console.log(l); //print 12
console.log(t); //print 3






// For of looop
let num = [2,3,4,5,6,7,8];
let even = 0;
let odd = 0;
for(let val of num){
    if(val % 2 == 0){
        even++;
    }
    else{
        odd++;
    }
}
console.log("even",even);
console.log("odd",odd);


// Vowel and consonant
let name = "codingeo";
let vowel = 0;
let cons = 0;
for(let val of name){
    if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
        vowel++;
    }
    else{
        cons++;
    }
}
console.log(vowel);
console.log(cons);