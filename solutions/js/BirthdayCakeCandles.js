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
//  * Complete the 'birthdayCakeCandles' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY candles as parameter.
//  */
//
// function birthdayCakeCandles(candles) {
//     // Find the tallest candle first, then count how many have that height.
//     let cnt = 0;
//     let max = -Infinity;
//     for ( let i of candles){
//         max = Math.max(max,i);
//     }
//     for ( let i of candles){
//         if ( i == max) cnt++;
//     }
//     return cnt;
//
// }
//
// function main() {
//     // HackerRank supplies the candle count followed by the candle heights.
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const candlesCount = parseInt(readLine().trim(), 10);
//
//     const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));
//
//     const result = birthdayCakeCandles(candles);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { birthdayCakeCandles };


function birthdayCakeCandles(candles) {
    let tallest = -Infinity;
    let count = 0;
    for (const candle of candles) {
        if (candle > tallest) {
            tallest = candle;
            count = 1;
        } else if (candle === tallest) {
            count++;
        }
    }
    return count;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
