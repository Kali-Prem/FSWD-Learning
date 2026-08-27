// Var vs let vs const

// Redeclaration -- var can be redclared

// Hoisting --> Variables and functions will get their memory before the actual code execution

console.log(a);
var a = 10;
console.log(a);
one();
function one(){
    console.log("Nice to see u");
}
one();