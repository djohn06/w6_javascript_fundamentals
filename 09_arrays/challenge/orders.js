const addToBatch = (array, num) => {
    if (array.length >= 5) {
        console.log(array);
    } else {
        console.log(array.concat(num));
    }
}

addToBatch([1], 3);
// Expected output: [1, 3 ]
addToBatch([1, 2, 3], 4);
// Expected output: [1, 2, 3, 4 ]
addToBatch([1,2,3,4,5], 7);
// Expected output: [1, 2, 3, 4 ,5 ]
addToBatch([1,2,3,4,5,6], 7);
// Expected output: [1, 2, 3, 4 ,5 ]
