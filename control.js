//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function newArray(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * item);
    const lastTwo = arr.slice(-2).map(item => item + 10);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
    return newArr
   }
   newArray([30, 45, 77, 46, 26, 4]);

   //Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    let numbers = (arrNum) => {
        while(numbers.length<5){
    console.log('move next');
    arrNum.pop();
    if(arrNum.length===5){
        console.log('number is equal to the fourth index');
        break;
    }

        }
    }
    numbers([1,2,3,4,5,6,7,8,9]);
   





//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

const fruitsContinue = (arr) => {
    for (let i=0; i <arr.length; i++){
        if (i === 2){
            continue;
        }
        console.log(arr[i]);
    }
};
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruitsContinue(fruits);
    
    


//Write a function that accepts an array of strings and console.logs each element using a for loop.

function arrayOfStrings(arr){
    for (let i=0; i <arr.length; i++){
        console.log(arr[i]);
    }
 }
 let arr = ["Hello", "Make", "Take", "Enjoy"]
 arrayOfStrings(arr);





//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

function reverseString(str){
    let reversedStr = '';
    let i = str.length-1;
    while (i >= 0){
        reversedStr += str[i];
        i--;
    }
    return reversedStr;
};
  let string = "Christine";
  let reverse = reverseString(string);
  console.log(reverse);