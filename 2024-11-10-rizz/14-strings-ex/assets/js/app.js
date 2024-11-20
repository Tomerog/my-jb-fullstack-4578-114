const sentence = prompt(`please enter message`).trim()

const firstword = sentence.substring(0, sentence.indexOf(` `))

console.log(firstword)

const lastwordstart = (sentence.lastIndexOf(` `) + 1)
const lastword = sentence.substring(lastwordstart)

console.log(lastword)
console.log(firstword + ` ` + lastword)