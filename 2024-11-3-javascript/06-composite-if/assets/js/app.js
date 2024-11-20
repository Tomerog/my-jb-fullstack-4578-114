let grade = +prompt(`please enter grade`);

// the following is the same lady in another dress
// if (grade>= 0 && grade<= 100){
//      document.write(`ציון חוקי`);
// } else {
//     document.write(`ציון לא חוקי`);
// }


// if (grade< 0 || grade> 100){
//     document.write(`ציון לא חוקי`);
// } else {
//     if (grade === 100){
//    document.write(`מושלם`);
//     }
//     else {
//         if (grade >= 60){
//             document.write(`עובר`)
//         }else {
//         document.write (`נכשל`)
//         }
//     }
// }



// if (grade< 0 || grade> 100) {
//     document.write(`ציון לא חוקי`)
// } else if (grade === 100) {
//    document.write(`מושלם`)
// } else if (grade >= 60) {
//     document.write(`עובר`)
// } else { 
//     document.write (`נכשל`)
// }

// same code shortened to the maximum
if (grade< 0 || grade> 100) document.write(`ציון לא חוקי`)
else if (grade === 100) document.write(`מושלם`)
else if (grade >= 60) document.write(`עובר`)
else document.write (`נכשל`)
