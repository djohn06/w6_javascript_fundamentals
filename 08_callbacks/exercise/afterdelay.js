const printHello = () => {
    console.log('Hello!');
}

const executeAfterDelay = (seconds, usedFunction) => {
    setTimeout(usedFunction, seconds * 1000);   // setTimeout has the function as the first argument and milliseconds as the second argument.
}

executeAfterDelay(5, printHello);