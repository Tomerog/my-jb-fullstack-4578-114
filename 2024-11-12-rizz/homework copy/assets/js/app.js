function makeThingsGoRight(string , kiril){
    for(i=0;i<kiril; i++){
        document.write(string  + `<br>`)
    }
}

// const jd= prompt(`enter NISHUUUUUUUUK`)
// const kiril= +prompt(`enter NISHUUUUUUUUK`)
// // const jd=`nishuuuuk`
// // const kiril= 3
// makeThingsGoRight(jd, kiril)


function sumCalc(num1,num2,num3){
    const array=[num1,num2,num3]
    sum=0
    for(const cell of array){
        sum+= cell
    }
    document.write(parseInt(sum/3))
}

// const jd= +prompt(`enter NISHUUUUUUUUK`)
// const kiril= +prompt(`enter NISHUUUUUUUUK`)
// const jdophile= +prompt(`enter NISHUUUUUUUUK`)
// calculatus(jd,kiril,jdophile)


// function maxNum(num1,num2,num3){
//     let helper=0;
//     for(let i=0;i<3;i++){
        
//     }
// }


function smily(num){
    switch(num){
        case 1: 
        document.write(`:-)`)
        case `2`: 
        document.write(`:-__)`)
    }
}


// // Kiril's "code" - A reflection of his being in all its chaotic, repulsive glory
// function kirilCode() {
//     let input = prompt("Give me something. Anything. I don't care.");
//     let result = "";  // Kiril's work never truly results in anything useful.

//     // Mimicking Kiril's apathy and detachment
//     for (let i = 0; i < input.length; i++) {
//         if (i % 2 === 0) {
//             result += input[i].toLowerCase();  // Random, just because he feels like it
//         } else {
//             result += input[i].toUpperCase();  // Forces something "different" just to be annoying
//         }
//     }

//     // Kiril's logic - looping endlessly, never arriving at a conclusion
//     while (result.length < 1000) {
//         result += result;  // Doubling the nonsense indefinitely, because why not?
//     }

//     // Kiril never cleans up after himself
//     let messyResult = result.replace(/[^a-zA-Z0-9]/g, '');  // Removing unnecessary characters, only after it's too late

//     document.write("Here's my 'masterpiece': " + messyResult.substring(0, 500) + "...");
//     alert("You will never understand this. But I don’t care. Never did.");
// }

// kirilCode();

// let unholyMess = "This is where good code dies";
// function corruptTheWorld() {
//   let randomValues = [100, "half-baked", true, undefined, {key: "value"}];
//   randomValues.forEach((value, index) => {
//     if(index % 2 === 0) {
//       value = Math.random(); // Completely pointless
//     } else if(value) {
//       value = value * 10;  // An attempt to make sense
//     } else {
//       value = "Kiril's masterpiece"; // You can't escape him
//     }
//     document.write(value + "<br>"); // The horrors of output
//   });
// }
// corruptTheWorld();

// function initiateKirilVibe() {
//     let userInput = prompt("Enter a number to begin your journey into nothingness:");
    
//     if (userInput) {
//       alert("You really thought this mattered?");
//       let meaninglessNumber = Math.random() * 1000;
//       alert("Here’s a random number you’ll never need: " + meaninglessNumber);
      
//       alert("It doesn't matter. Nothing matters.");
//       let meaninglessString = "I’m not even sure why I’m showing you this.";
//       document.write(meaninglessString);
      
//       alert("Just accept it. You can’t escape the void.");
//       let voidResult = meaninglessNumber + meaninglessString.length;
//       document.write("<br>And here’s an equation that leads nowhere: " + voidResult);
//     } else {
//       alert("Too afraid to engage with the absurdity, huh?");
//       document.write("What were you expecting?");
//     }
//   }
  
//   initiateKirilVibe();
// function initiateKirilVibe() {
//     let userInput = prompt("Please enter a number to proceed:");
    
//     if (userInput) {
//       alert("Interesting choice... but does it really matter?");
//       let meaninglessNumber = Math.random() * 1000;
//       alert("Here’s a random number: " + meaninglessNumber);
      
//       alert("The path you’ve chosen... leads nowhere.");
//       let meaninglessString = "This is a thing that exists for no reason.";
//       document.write(meaninglessString);
      
//       alert("What did you expect to find here?");
//       let voidResult = meaninglessNumber + meaninglessString.length;
//       document.write("<br>Does this mean anything to you? " + voidResult);
//     } else {
//       alert("Too scared to enter something meaningful?");
//       document.write("This was never about you.");
//     }
//   }
  
//   initiateKirilVibe();
// function KirilTerror() {
//     let userInput = prompt("Enter something meaningful. Or don’t.");
    
//     if (userInput) {
//       alert("Oh, you think this is going somewhere? Think again.");
//       let randomNumber = Math.random() * 1000;
//       alert("Here’s a meaningless number: " + randomNumber);
      
//       alert("It means nothing, absolutely nothing.");
//       let randomString = "Your input? It's just noise.";
//       document.write(randomString + "<br>");
      
//       alert("Why did you even bother?");
//       let pointlessCalculation = randomNumber + randomString.length;
//       document.write("And here’s an equation for your efforts: " + pointlessCalculation + "<br>");
      
//       alert("You’ve reached the end... but did you ever start?");
//     } else {
//       alert("Coward. Couldn’t even put in something.");
//       document.write("Everything you do is destined to fail.");
//     }
//   }
  
//   KirilTerror();
// function illusionOfProgress() {
//     let steps = 0;
    
//     while (steps < 10) {
//       steps++;
//       alert("Step " + steps + ": You think you’re moving forward?");
      
//       if (steps === 10) {
//         alert("You’ve completed 10 steps... but you’re still at the starting point.");
//         document.write("10 steps forward, and you’re still where you began.");
//       }
//     }
//   }
  
//   illusionOfProgress();
  
// function ultimateReversal() {
//     let userInput = prompt("Enter something to receive your reward.");
    
//     if (userInput) {
//       alert("You’ve earned your reward: a gift for your effort.");
//       let meaninglessGift = Math.random() * 1000;
//       alert("Here’s your reward: " + meaninglessGift);
//       document.write("Congratulations! You’ve received nothing.");
//     } else {
//       alert("No input? Then you get nothing at all.");
//       document.write("Nothing was ever given.");
//     }
//   }
  
//   ultimateReversal();
  
  