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
//  * Complete the 'timeConversion' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */
//
// function timeConversion(s) {
//     // Convert the two-digit hour while preserving the minutes and seconds.
//     let hour = Number(s.substring(0,2));
//     if(s.includes("AM")){
//         if(hour == 12) return "00"+s.slice(2,8);
//         else return s.slice(0,8);
//     }
//     else{
//         if(hour == 12) return s.slice(0,8);
//         else return (12 + hour) + s.slice(2,8);
//     }
//
// }
//
// function main() {
//     // HackerRank supplies the output file path when it runs this program.
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const s = readLine();
//
//     const result = timeConversion(s);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { timeConversion };


function timeConversion(time) {
    let hour = Number(time.slice(0, 2));
    const period = time.slice(-2);
    if (period === 'AM') {
        if (hour === 12) hour = 0;
    } else if (hour !== 12) {
        hour += 12;
    }
    return String(hour).padStart(2, '0') + time.slice(2, 8);
}

const time = '07:05:45PM';
console.log(timeConversion(time));
