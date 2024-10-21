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
console.log("");

function customizeArrow(size) {
    if (Number.isInteger(size)) {
        for ( i = 0; i < size + size - 1; i++) {

        }
    } else {
        console.log("ERROR: Please enter a whole number")
    }
}

let drawArrow = customizeArrow();

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
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



/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/

console.log("");
console.log("Task: E");
console.log("");



console.log("");