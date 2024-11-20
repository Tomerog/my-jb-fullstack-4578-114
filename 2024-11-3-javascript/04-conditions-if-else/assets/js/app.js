const age = prompt(`Please enter your age`);
// document.write(`your age is ${age}`);

if (age >= 13) {
    alert(`welcome`);
    alert(`today we have sale on artiks`)
} else {
    alert(`go home minor`);
    alert(`and next time bring mama with you`)
}

// this is better
if (age >= 13) {
    alert(`welcome`);
} else {
    alert(`go home minor`);
}

// than this
if (age >= 13) alert(`welcome`);
else alert(`go home minor`);