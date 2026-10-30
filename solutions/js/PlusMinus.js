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
//  * Complete the 'plusMinus' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */
//
// function plusMinus(arr) {
//     // Count each sign, then print its proportion of the complete array.
//     let positives = 0 ;
//     let negitives = 0;
//     let zeroes = 0;
//     let n = arr.length;
//     for (let i of arr){
//         if ( i > 0) positives++;
//         else if( i < 0) negitives++;
//         else zeroes++;
//     }
//     console.log(positives/n);
//     console.log(negitives/n);
//     console.log(zeroes/n);
//
// }
//
// function main() {
//     // HackerRank supplies the array length followed by the array values.
//     const n = parseInt(readLine().trim(), 10);
//
//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//
//     plusMinus(arr);
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { plusMinus };


function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (const value of arr) {
        if (value > 0) positive++;
        else if (value < 0) negative++;
        else zero++;
    }
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
