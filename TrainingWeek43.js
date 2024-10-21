/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/

console.log("");
console.log("Task: A");
console.log("");

function customizeXmasTree(height) {
    let leafs = "*";
    let trunk = "X";
    if (Number.isInteger(height)) {
        for ( i = 0; i < height; i++) {

        }
    } else {
        console.log("ERROR: Please enter a whole number")
    }
}

let drawTree = customizeXmasTree();

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/

console.log("");
console.log("Task: B");

function customizeArrow(size) {
    let dot = "* ";
    if (Number.isInteger(size)) {
        for ( i = 0; i <= size; i++) {
            console.log(dot.repeat(i));
        }
        for ( i = size - 1; i >= 1; i--) {
            console.log(dot.repeat(i));
        }
    } else {
        console.log("ERROR: Please enter a whole number");
    }
}

let drawArrow = customizeArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into account the difference in aspect ratio.

    Example: This is a approximately a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/

console.log("");
console.log("Task: C");
console.log("");

function customizeBox(n, m) {
    if (Number.isInteger(n, m)) {
        
    } else {
        console.log("ERROR: Please enter whole numbers")
    }
}

let drawBox = customizeBox();

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/

console.log("");
console.log("Task: D");
console.log("");

function checkIfHeterogram(input) {
    let isHeterogram = true;
    let charRepository = [];
    for (char of input) {
        if (charRepository.includes(char)) {
            isHeterogram = false;
        } else {
            charRepository.push(char);
        }
    }
    if(isHeterogram){
        console.log(input + " is a heterogram!");
    } else {
        console.log(input + " is not a heterogram!");
    }
}

let hetCheck = checkIfHeterogram("Background");

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/

console.log("");
console.log("Task: E");
console.log("");

function checkIfAnagrams(word1, word2) {
    let isAnagram = true;
    let charRepository1 = [...word1.toLowerCase()];
    let charRepository2 = [...word2.toLowerCase()];
    for (char of charRepository2) {
        if (!charRepository1.includes(char)) {
            isAnagram = false;
        }
    }
    for (char of charRepository1) {
        if (!charRepository2.includes(char)) {
            isAnagram = false;
        }
    }
    if(isAnagram){
        console.log(word1 + " and " + word2 + " are anagrams!");
    } else {
        console.log(word1 + " and " + word2 + " are not anagrams!");
    }
}

let anaCheck = checkIfAnagrams("The Eyes", "They See");

console.log("");