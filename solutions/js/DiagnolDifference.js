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
//  * Complete the 'diagonalDifference' function below.
//  *
//  * The function accepts a square INTEGER_2D_ARRAY as parameter.
//  */
// function diagonalDifference(arr) {
//     // Add the primary and secondary diagonals, then return their absolute gap.
//     let primary = 0;
//     let secondary = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         primary += arr[i][i];
//         secondary += arr[i][arr.length - 1 - i];
//     }
//
//     return Math.abs(primary - secondary);
// }
//
// function main() {
//     // HackerRank supplies the matrix size followed by one row per line.
//     const n = parseInt(readLine().trim(), 10);
//     const arr = [];
//
//     for (let i = 0; i < n; i++) {
//         arr.push(readLine().trim().split(/\s+/).map(Number));
//     }
//
//     console.log(diagonalDifference(arr));
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { diagonalDifference };

function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][arr.length - 1 - i];
    }
    return Math.abs(primary - secondary);
}

const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(matrix));
