// Input each function into the terminal.

const lowercaseMessage = (message) => {
    return message.toLowerCase();   // always include brackets!
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

// Then call the transform function with the parameters below:
transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

// This returns the string:
//      "why are you shouting?"
// All lower case characters.
