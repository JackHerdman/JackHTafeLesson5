let sentence = "The quick brown fox jumps over the lazy dog.";

//1. Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
function searchString (stringToSearch, SearchTerm){
    return stringToSearch.includes(SearchTerm);
}
let findWord = searchString(sentence, "fox");
console.log(`Contains word: ${findWord}`);

//2. Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.
function searchStringIndex (stringToSearch, SearchTerm){
    return stringToSearch.indexOf(SearchTerm) ; 
}
let findWordIndex = searchStringIndex(sentence, "fox");
console.log(`Word starts at index : ${findWordIndex}`);

//3. Write a function that takes a string and returns the first three characters of that string.
function firstThree (stringToSearch){
    return stringToSearch.substring(0, 3) ; 
}
let theFirstThree = firstThree(sentence); 
console.log(`the first three characters of the sentence are: ${theFirstThree}`);

//4. Write a function that takes a string and returns the last two characters of that string.
function lastTwo (stringToSearch){
    return stringToSearch.substring(stringToSearch.length-2) ; 
}
let theLastTwo = lastTwo(sentence); 
console.log(`the last two characters of the sentence are: ${theLastTwo}`);

//5. Write a function that converts a string into an array of words where a word is any string separated by a space.
function splitString (stringToSearch){
    return stringToSearch.split(" ");
}
let myWords = splitString(sentence);
console.log(myWords);

//6. Write a function that counts the number of times a string appears inside the sentence string above.
let sentenceArray = sentence.split(" ");
function countOccurences(stringToSearch, searchTerm){ 
    let count = 0;          
    let startIndex = 0;    
    while (true){
        let indexOfSearchTerm = stringToSearch.indexOf(searchTerm, startIndex); 
        if (indexOfSearchTerm == -1){ 
            break;
        }
        count++;                       
        startIndex = indexOfSearchTerm + 1; 
    }
    return count;
}
for (let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i];
    console.log(`There are ${countOccurences(sentence, word)}, iterations of the word ${word} in the above sentence`)
}


function counting(searchTerm){
    let count = 0
    let startIndex = 0
    while(true){
        let index = sentence.indexOf(searchTerm, startIndex);
        if (index == -1){
            break;
        }
        count++
        startIndex = index+1;
    }
    return count;
}
console.log(counting("e"));

