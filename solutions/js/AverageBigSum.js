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
//  * Complete the 'aVeryBigSum' function below.
//  *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts LONG_INTEGER_ARRAY ar as parameter.
//  */
//
// function aVeryBigSum(ar) {
//     // BigInt prevents precision loss when the values exceed Number's safe range.
//     let ans = 0n;
//     for ( let i = 0 ; i < ar.length ; i ++ ){
//         ans+= BigInt(ar[i]);
//     }
//     return ans;
// }
//
// function main() {
//     // HackerRank supplies the output file path when it runs this program.
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const arCount = parseInt(readLine().trim(), 10);
//
//     const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
//
//     const result = aVeryBigSum(ar);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { aVeryBigSum };


function AverageBigSum(ar) {
    let sum = 0n;
    for (const value of ar) {
        sum += BigInt(value);
    }
    return sum;
}

const values = [1000000001, 1000000002, 1000000003];
console.log(AverageBigSum(values).toString());

