function scan(arrayIn){
    let out = []
    let index = 0

    arrayIn.forEach(element => {
        if(element === "contraband"){

            out.push(index)
        }
        index ++;
    });

    return out;

}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]