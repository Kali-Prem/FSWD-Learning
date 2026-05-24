// // For loop============

// // by default javascript me -- let datatype leta hai 

// //---------------- For-Of Loop========
// // const arr = [1,2,3,4,5]
// // const arr1 = ["apple", "ball", "cat"]

// // for(let i of arr1){
// //     console.log(arr1[i]) //sirf value nikal krke deta hai 
// // }


// // -------===========For In Loop==========
// const arr = [1,2,3,4,5]
// for(let i in arr){
//     // console.log("Hi, My index is"+ i + " " + "my value is "+arr[i])
//     console.log('Hi, my index is ${i} and my value is ${arr[i]}')
// }

// // Note:- for in loop me index aur value dondo deta hai leta hai aur for of loop me value leta hai  

// // ---------=======For each Loop==================

// arr.forEach((a,i) => {
//     console.log(i)
// })


// // ---==============

// const arr2 = [1,2,3,4,5]
// const obj = {
//     name:"kali",
//     age:28
// }
// // for(int i = 0; i < arr2.length; i++)
// for(let i in obj){
//     console.log(typeof(i))
//     console.log(obj[i])
// }
// // for(let i of obj){
// //     console.log(obj[i])
// // }
// // arr.forEach((a,i) => {
// //     console.log(i)
// // })
// // NOTE:- By default forinloops me it takes string like
// console.log("0" + 1 +1+1) //0111