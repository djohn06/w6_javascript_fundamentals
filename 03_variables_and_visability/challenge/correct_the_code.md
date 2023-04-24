# Correct the code:

Can you find the problem in the following program? Make the fix, so the code prints "Hello Makers" when run into `node`.

```javascript
const greeting = 'Hello ';
const name = 'Makers';

console.log greeting + name;
```

## Answer:
The issue is the lack of brackets over 'greeting + name'. The input to the console should be, instead:

```javascript
console.log(greeting + name);
```
