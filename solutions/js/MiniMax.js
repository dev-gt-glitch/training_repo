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
//  * Complete the 'miniMaxSum' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */
//
// function miniMaxSum(arr) {
//     // The minimum sum excludes the largest value; the maximum sum excludes
//     // the smallest value.
//     let min = Infinity;
//     let max = -Infinity;
//     let sum = 0;
//     for ( let i of arr){
//         sum+=i;
//         min = Math.min(i,min);
//         max = Math.max(i,max);
//     }
//     console.log(sum - max, sum - min);
// }
//
// function main() {
//     // HackerRank supplies all five values on one line.
//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//
//     miniMaxSum(arr);
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { miniMaxSum };


function miniMaxSum(arr) {
    let sum = 0;
    let smallest = Infinity;
    let largest = -Infinity;
    for (const value of arr) {
        sum += value;
        smallest = Math.min(smallest, value);
        largest = Math.max(largest, value);
    }
    return [sum - largest, sum - smallest];
}

const arr = [1, 3, 5, 7, 9];
console.log(miniMaxSum(arr).join(' '));
