// Better answer given by Leo:

const getParity = (number) => {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
for (let i = 1 ; i <= 20 ; i++) {
    const parity = getParity(i);
    console.log(`${i} is ${parity}`);
}

// Answer created in pair with Kj:

// for (let i = 1 ; i <= 20 ; i++) {
//    if (i % 2 === 0) {
//     console.log(i + ' is even');
//    } else {
//     // console.log(i + ' is odd');
//     console.log(`${i} is odd`);
//    }
// }