// Array Methods Cheatsheet
// Source: https://javascript.info/array-methods
// Author: Ellie Nguyen github.com/ellienguyendev

// ******************************************
//    INSERT, DELETE, REPLACE ARRAY METHODS
// ******************************************

// Reference Array
var arr = [1,2,3,4,5]

// method       // expected output    ** what the method does

arr.push(6)     // => [1,2,3,4,5,6]   ** adds items to the end of an array
arr.pop()       // => [1,2,3,4]       ** extracts item from the end of an array
arr.shift()     // => [2,3,4,5]       ** extracts item from the beginning of an array
arr.unshift(0)  // => [0,1,2,3,4,5]   ** adds items to the beginning of an array

arr.splice(index,[deleteCount, elem1,...,elemN])
arr.splice(0,2,"1","2")   // => ["1","2",3,4,5]           ** replaces items in an array
arr.splice(2,0,33,333)    // => [1,2,33,333,3,4,5]        ** inserts items into an array
arr.splice(0,2)           // => [3,4,5]                   ** deletes items from an array
arr.splice(-1,0,55,555)   // => [1, 2, 3, 4, 55, 555, 5]  ** negative index arg: start from end

// you can always retrieve array of elements removed by doing:
var removed = arr.splice(0,2) // => [1,2] (get removed elements)

arr.slice(2,4) // => newArr [3,4] ** copies a new array from start index to end index

arr.concat([6,7],8,9) // => newArr [1,2,3,4,5,6,7] ==> finalResult [1,2,3,4,5,6,7,8,9]
// ** copies a new array from arr AND arguments that are arrays [6,7], then adds other args

var arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
arr.concat(arrayLike) // => newArr [1, 2, 3, 4, 5, "something", "else"]
// ** for array-like objects, setting the Symbol.isConcatSpreadable property to true will add elements rather than whole objects

arr.forEach(e => {
  console.log(e+1)
}) // => 2,3,4,5,6 ** iterates through each element in an array and runs the function

// ******************************************
//        SEARCHING IN ARRAY METHODS
// ******************************************

//arr.method(item,position)
arr.indexOf(1)      // => 0     ** finds index of item from position(optional param. if none, position = 0)
arr.lastIndexOf(2)  // => 1     ** same as indexOf but goes searches array from right to left

arr.includes(2)     // => true  ** returns true if item is found in array
arr.includes(2,3)   // => false ** searches from position index 3

var users = [
  {id:1, name:"Ellie"},
  {id:2, name:"Stacy"},
  {id:3, name:"Vanessa"}
]
var user = users.find(item => item.id == 1)
console.log(user.name)                // => "Ellie" ** finds an element in an array of objects. returns true if found, otherwise returns undefined

users.findIndex(item => item.id == 1) // => 0 ** returns index of where element was found, -1 otherwise

var results = users.filter((item => item.id > 1))
console.log(results) // => [{id:2, name:"Stacy"}, {id:3, name:"Vanessa"}] ** returns array of all matching elements. returns empty array if nothing found

// ******************************************
//      TRANSFORMING AN ARRAY METHODS
// ******************************************
var fruits = ["banana", "orange", "mango", "kiwi"]
var nums = [1,2,13,4,22]

fruits.map(item => item.length * 2) // => [12, 12, 10, 8] ** calls the function on each item in the array and returns an array of the results

fruits.sort() // => ["banana", "kiwi", "mango", "orange"] ** sorts an array as STRINGS by default
nums.sort()   // => [1,13,2,22,4]   ** beacuse .sort() uses strings to sort, need to pass in a compare function
nums.sort((a,b) => a-b) // => [1, 2, 4, 13, 22]  ** sorts number values
nums.sort((b,a) => a-b) // => [22, 13, 4, 2, 1]  ** sorts by descending order

fruits.reverse() // => ["kiwi", "mango", "orange", "banana"] ** reverses elements in an array

var flowers = 'Rose, Sunflower, Orchid'
flowers.split(',') // => ['Rose', 'Sunflower', 'Orchid']  ** splits a string into an array by the given dilimeter
flowers.split('')  // => ['R','o','s','e',','S'...etc.]   ** an empty delim will split into individual characters

var arrFlowers = ['Rose', 'Sunflower', 'Orchid']
arrFlowers.join('*') // => 'Rose*Sunflower*Orchid' ** turns an array into a string joined by glue between them

Array.reduce(function(accumulator, item, index, array){ ... }, [inititial])
nums.reduce((sum, current) => sum + current, 0) // => 42 ** calculates a single value based on the values of the array. applies the function to each element and "carries on" the result to the the next call. accumulator param is the result of the previous function call or equals to initial for the first call, if initial is provided
