// 'use strict';
//
// // Hacker rank code
// const fs = require('fs');
//
// let inputString = '';
// let currentLine = 0;
//
// if (require.main === module) {
//     process.stdin.resume();
//     process.stdin.setEncoding('utf-8');
//     process.stdin.on('data', function(inputStdin) {
//         inputString += inputStdin;
//     });
//     process.stdin.on('end', function() {
//         inputString = inputString.split('\n');
//         main();
//     });
// }
//
// function readLine() {
//     return inputString[currentLine++];
// }
//
// /*
//  * Complete the 'simpleArraySum' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY ar as parameter.
//  */
//
// function simpleArraySum(ar) {
//     // Add each array value to a running total.
//     var sum = 0;
//     for ( let i = 0 ; i < ar.length;i++){
//         sum += ar[i];
//     }
//     return sum;
//
// }
//
// function main() {
//     // HackerRank supplies the array length followed by the array values.
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const arCount = parseInt(readLine().trim(), 10);
//
//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
//
//     const result = simpleArraySum(ar);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { simpleArraySum };

function simpleArraySum(arr) {
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    return sum;
}

const arr = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(arr));
