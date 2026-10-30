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
//  * Complete the 'compareTriplets' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY a
//  *  2. INTEGER_ARRAY b
//  */
//
// function compareTriplets(a, b) {
//     // Count the points earned by Alice and Bob independently.
//     let ap = 0;
//     let bp = 0;
//     let n = a.length;
//     for ( let i = 0 ; i < n; i++){
//         if (a[i] > b[i]) ap++;
//         if (a[i] < b[i]) bp++;
//     }
//     return [ap,bp];
// }
//
// function main() {
//     // HackerRank supplies the output file path when it runs this program.
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
//
//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));
//
//     const result = compareTriplets(a, b);
//
//     ws.write(result.join(' ') + '\n');
//
//     ws.end();
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { compareTriplets };


function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) alice++;
        if (a[i] < b[i]) bob++;
    }
    return [alice, bob];
}

const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTriplets(a, b).join(' '));
