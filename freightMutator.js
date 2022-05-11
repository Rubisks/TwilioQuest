function mutate(arrayStrings){
    let mutatedArray = [];

    mutatedArray = arrayStrings.map( words => {
        return words.toUpperCase();
    });

    return mutatedArray;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']