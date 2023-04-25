notifyByEmail = (email) => {
    return `Email sent to: ${email}`;   // Better to use string interpolation. Use backtick (`) for this.
}

notifyByText = (text) => { 
    return `Text sent to: ${text}`;
}

notify = (input, notifyUser) => {
    return notifyUser(input);
}

// Call 'notify' function to return both strings. Inputs and outputs being:
//      notify("hello@makers.tech.test, notifyByEmail") => Email sent to: hello@makers.tech.test
//      notify("+10000000000", notifyByText) => Text sent to: +10000000000
