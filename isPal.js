function isPal(word) {
    check = word.split('')
    //    //check to see if word is split into object array
    console.log(check)

    //checks to see the length of the array
    console.log(check.length)

    //     //starts a loop to check each letter in array 
    //because the string must have an even number of letters, you only need to run the loop as times as half the numbers in the word
    for (let i = 0; i < check.length / 2; i++) {

        //i starts at the first letter in the array 'check' and checks if it is equal to last letter
        //check.length = length of check array - 1 - number that i is itirated at
        if (check[i] != check[check.length - 1 - i]) {
            
            //if not equal it returns false
            return false;
        }
        //if is equal return true
        return true
    }

}
isPal("hannah")
