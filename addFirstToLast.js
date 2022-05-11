function addFirstToLast(strings){
    let firstTolast = "";
    
    if(strings.length > 0){
        firstTolast = strings[0] + strings[(strings.length - 1)];
    }
    return firstTolast;
}


console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));