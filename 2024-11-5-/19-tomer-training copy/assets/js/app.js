let num = 5;

for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = num; j >= 1; j--) {
        row += j; // Build the row as a string
    }
    document.write(row + "<br>"); // Write the row to the document with a line break
}