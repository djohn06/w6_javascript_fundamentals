// let counter = 0;
// // let count = 100;

// const increment = (num) => {
//   console.log(num++); 
// }

// setInterval(increment(counter), 1000);

let counter = 0;

const increment = () => {
  console.log(counter++);
}

// set interval is a global function in JavaScript that repeatedly calls a function with a fixed time delay between each call
setInterval(increment, 1000);  