let sentence = "The quick brown fox jumps over the lazy dog.";
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
console.log(sentenceArray);
for (let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i];
    console.log(`There are ${countOccurences(sentence, word)}, iterations of the word ${word} in the above sentence`)
}