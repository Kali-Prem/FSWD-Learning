// Loops:-  while do while, for loop, for Of, for In, for Each

// for of
// const arr = [1,2,3,4,5];

// for(const value of arr){
//     console.log(value);
// }



// Map = ye bhi ek Object ke jesa hota hai jo order ke insertin ko yaad rkhta hai aur unique value stroe krta hai but object order ko yaad nhi rkhta hai 
const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'United states of america');
map.set('IN', 'INDIA');

// console.log(map);

for (const [key, value] of map){
    console.log(key, ':-', value);
}

 