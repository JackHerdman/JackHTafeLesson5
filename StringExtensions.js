let sentence = "the quick brown fox jumps over the lazy dog";

// String.includes
// searches a string for a specific parameter
let hasDog = sentence.includes("dog");                 //search sentence of the word dog
console.log(hasDog);
console.log(sentence.toLowerCase().includes("dog"));    //converts sentence to lower case and then searches

// String.indexOf
// finds the first character of the specific parameter and returns its position
let dogIndex = sentence.indexOf("dog"); //will find the position of d of dog
console.log(`the word 'dog' starts at index: ${dogIndex}`);
let invalidIndex = sentence.indexOf("Luke"); // because this doesnt exist it will return -1
console.log(`if the search term doesnt exist it will return ${invalidIndex}`);

let theIndexPosition = sentence.toLowerCase().indexOf("the", 15);  //this will skip the first 15 indexes
console.log(`the word the in the second half of the sentence starts at index ${theIndexPosition}`);

let theFirstOccurence = sentence.toLowerCase().indexOf("the");
let theSecondOccurence = sentence.toLowerCase().indexOf("the", theFirstOccurence + 1);
//this will find the first position and then find the second 
console.log(`The first 'dog' is found at index ${theFirstOccurence}`);
console.log(`The second 'dog' is found at index ${theSecondOccurence}`);

//pattern to count the number of occurences
let patternsentence = "the dog jumped off a dog and landed on another dog";

function countOccurences(stringToSearch, searchTerm){  //patternsentence, "dog"
    let count = 0;          //start counting from 0
    let startIndex = 0;     //start at the first position
    while (true){
        let indexOfSearchTerm = stringToSearch.indexOf(searchTerm, startIndex); //patternsentence.indexOf("dog", 0)
        if (indexOfSearchTerm == -1){ //if it doesnt find the term break
            break;
        }
        count++;                        //otherwise add 1 to count
        startIndex = indexOfSearchTerm + 1; //increase the start index by after the value found 
    }
    return count;
}
let dogCount = countOccurences(patternsentence, "dog"); //run the function with 2 arguments
console.log(`There are ${dogCount} 'dogs' in the sentence`);

// String.substring
// Creates a new string based on part of the previous string
let sentence2 = "the quick brown fox jumps over the lazy dog";

let mySmallerString = sentence2.substring(35, 39); //creates new string starting at index 35 and ending at 39
console.log(mySmallerString);

let input = "Name: Luke";
let pre = "Name: ";
let name = input.substring(pre.length);
console.log(name)

// String.split
// splits a string into an array
let myWords = sentence2.split(" "); //creates an array using a character as a break
console.log(myWords);
let myNums = "12,19,2,51,75,164,197".split(",");
console.log(myNums);
