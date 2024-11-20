// naming conventions
// lets say i need a variable to hold value for a "family name"
// family_name (all lower case, _ between words, used in Python, PHP, SQL)
// FamilyName (each word starts with a capital letter)
// JavaScript uses this for variable names:
// familyName (each word except the first starts with a capital letter)

// historic way of using variables
var companyName= 'KSP';

// starting 2015, usage of var is wrong
// don't use var

// we can use let to decalre a variable
let aVariableThatIMayWantToChange
// and then assign
aVariableThatIMayWantToChange=1;

// or, we can declare and assign in the same command
let anotherVariable = 3;

// however we declare the "let" variable, we can always change it:
aVariableThatIMayWantToChange += 3;

// sometimes i want to protect a variable from modifications. const from the word constant
// assigment to const can only happen on declaration
const aVariableThatNeverChanges = 10;



document.write(companyName);
// using \n in document.write won't work for us
// document.write("\n");
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName)
console.log(companyName + "\n" + companyName)

// KSP is a great company, everybody likes KSP, KSP has the best products
document.write("KSP is a great company, everybody likes KSP, KSP has the best products")
document.write("<br>" + companyName + " is a great company, everybody likes " + companyName +", "+ companyName + " has the best products")
document.write('i can also use גרש to specify strings')
alert(`i can also 
    use back tick`)
document.write("<br>" + companyName + " is a great company, everybody likes " + companyName +", "+ companyName + " has the best products")
document.write(`<br>${companyName} is a great company, everybody likes ${companyName}, ${companyName} has the best products`)

