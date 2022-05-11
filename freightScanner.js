function scan(arrayIn){
    let controbandCount = 0;

    arrayIn.forEach(element => {
           if(element === "contraband"){

        controbandCount ++ ; 
    }
    });
    return controbandCount; 
}

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); 