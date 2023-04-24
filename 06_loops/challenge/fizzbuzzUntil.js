const fizzBuzz = (number) => {

    if (number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else {
        return number;
    }
}

const fizzbuzzUntil = (n) => {
    for (let i = 1 ; i <= n ; i++) {
        const until = fizzBuzz(i);
        console.log(until);    
    }   
}

module.exports = fizzbuzzUntil;