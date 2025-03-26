//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
let last = arr1.slice([-1]);
console.log({last});

let arr2 = [true, "green", "where",12,56];
let lastarray = arr2.pop();
console.log({lastarray});

//Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let strmyPets = myPets.join();
console.log(strmyPets);

//Write a JS script to sort the following array items. var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortarr3 = arr3.sort();
console.log(sortarr3);


//Write a program to remove duplicates from the following array. Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
function removeDuplicates(text){
    return text.filter((value,index) => text.indexOf(value)===index);
}
console.log(removeDuplicates(arr));



function getDuplicates(text){
    return text.filter((value,index) => text.indexOf(value)!== index);
}
console.log(getDuplicates(arr));

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];

let findfood = arr5.includes("food");
console.log(findfood)
// let result = arr5.map(item = findfood ==arr5);




//Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
let d = word.split("") .sort().join("");
console.log(d);


//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
const fruits = ["mango","guava","pineapple","banana","apple","orange","lemon","grape" ,"strawberry","blueberry"]
let length = fruits.length;
console.log(length);
fruits[5] = "Tomato";
console.log(fruits);


