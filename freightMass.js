function calculateMass(arrayStrings){
    let mass =arrayStrings.reduce(function(charCount, item) {
        return charCount + item.length;
      }, 0)
    return mass

    ;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12