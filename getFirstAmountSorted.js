function getFirstAmountSorted(arrayIn, numIn){

    arrayIn.sort();
    console.log(arrayIn);    

    return arrayIn.slice(0, numIn);
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);