
function removeDuplicates(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    document.write(uniqueArr);
}

const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// calling the function
// passing array argument
removeDuplicates(array);

