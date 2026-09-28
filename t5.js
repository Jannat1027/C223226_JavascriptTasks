function removeDuplicates(arr) {
    return arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicates([1,2,2,3,4,4,6,7,8,8]));