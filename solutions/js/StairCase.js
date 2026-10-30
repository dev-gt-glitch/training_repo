// 'use strict';
//
// // Hacker rank code
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
//  * Complete the 'staircase' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */
//
// function staircase(n) {
//     // Each row has leading spaces followed by an increasing number of hashes.
//     for( let i = 1 ; i <= n ; i++){
//         console.log(" ".repeat(n - i) + "#".repeat(i));
//     }
//
// }
//
// function main() {
//     // Read the staircase size from HackerRank's standard input.
//     const n = parseInt(readLine().trim(), 10);
//
//     staircase(n);
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { staircase };


function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}

const n = 4;
staircase(n);
