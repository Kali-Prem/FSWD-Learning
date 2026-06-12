// key value pair me object

let Obj = {
  name: "kali linux",
  // "full name": "Kali Llinux",
  age: 20,
  weight: 60,
  height: "6ft lin",
  // functions
  // ye funciton ess object ki property hai
  greet: function () {
    console.log("hello kali linux");
  },
};
console.log(Obj);
// function calling
Obj.greet();

// Typeof
console.log(typeof Obj);

// ObJECT COPY
let Obj2 = Obj; //this is called the shallow copy
// this is stroe in stack and the obj2 is also the pointer of obj so not extra space is taken

// ====================Arrays=============================

// it the collection of items(items may be list of elements, functions)
// Syntax: - [], array constrator

// creation of array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// creation using array constructor
let brr = new Array("love", 1, true);
console.log(brr);
console.log(typeof arr, typeof brr);

// Array accessing
console.log(brr[0]); //index at 0;
console.log(arr[1]);

// --------Arrays Built-in Methods/ Functions-------

// push,pop,shift,unshift, slice, splice,map, filter, reduce, sort, indexof,find
let krr = new Array("love", 1, true);
krr.push("Kali"); // push - to add from right most side
krr.pop("Kali"); //pop -  to remove
krr.shift(); // remove first element from left most side
krr.unshift("Kali linux"); // add element from left most side
krr.push(20);
krr.push(40);
krr.push(90);

console.log(krr.slice(2, 4)); //index 2 is the startign and 4 index is last but exclude the 4 index element then make a slice

// splice-> content change-->insert,remove,replace
krr.splice(1, 2, "Hacker"); //esme 1 se 2 ke bich me sare ko hata krke hacker insert ko do
krr.splice(1, 0, "Mr Hacker"); //esme bss 1 index pr ye aa jayega kuchh remove nhi krega
console.log(krr);

// ---=======map functions==========----

// print the square
let arr1 = [10, 20, 30];

let ansArray = arr1.map((number) => {
  // arr1 se ek ek element map function mejayega fir map me jo logic likha hoga usspr operation hoga fir wo return krega arr.map() funciton ko then uska value st.ore ho rha hai ansArray me
  return number * number;
});

console.log(ansArray);

// print all the number
arr1.map((num) => {
  console.log(num);
});
// print number and index
arr1.map((num, index) => {
  console.log(num);
  console.log(index);
});

// -===========---Filter Method=========

// same map ka logic esme bhi lgega kyunki filter ek function hai esko kcuhh input denge then ye hame return rega
let arr4 = [10, 23, 30, 41, 50, 61, 70];

// filter even numbers from arr4
let evenArray = arr4.filter((num) => {
  return num % 2 === 0;
  // if(num % 2 == 0){
  //     return num;
  // }
  // else{
  //     return false;
  // }
});
console.log(evenArray);

// ---------filter string-=-----------
let arr5 = [1, 2, "Kali", "linux", null];

let strArray = arr5.filter((value) => {
  if (typeof value == "string") return value;
  else return false;
});
console.log(strArray);




// ================Reduce=======================

// reduce function me ek hota hai accumulator and ek hota hai current. accu ko hum jahan se start krte hen toh first me curr usspr hota hai aur uska sum nikal krke ye accu me store kr leta hai fir curr next pr jat ahai aur fir uska sum nikal kkre accu me add kr dega . yaahn pr reduce functions me sum logic likha gya hai esliye sum bol rha hun
let arr7 = [10, 20, 30, 40];

let ans = arr7.reduce((acc, curr) => {
  return acc + curr;
}, 0); // 0 se accumulator start hoga

console.log(ans);



// ===================================

let arr8 = [4,5,5,9,6,5,3,5]
arr8.sort()  //sort in ascending order
arr8.reverse()  //sort in descending order
console.log(arr8)

console.log(arr8.indexOf(5))

console.log(arr8.find())


// ==================find() stops searching once it finds the first matching element.========>
    
const numbers = [5, 10, 15, 20];

const result = numbers.find(num => num > 10);

console.log(result);       //print = 15., find function jb find kr leta hai tb wo wahin return kr deta hai 
  


