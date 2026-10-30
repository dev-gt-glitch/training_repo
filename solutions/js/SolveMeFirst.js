// // Hacker rank code
// // Read two integers from standard input and print their sum.
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
//
// if (require.main === module) {
//     process.stdin.resume();
//     process.stdin.setEncoding('ascii');
//     process.stdin.on('data', function (data) {
//         input_stdin += data;
//     });
//     process.stdin.on('end', function () {
//         input_stdin_array = input_stdin.split("\n");
//         main();
//     });
// }
//
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }
//
// function solveMeFirst(a, b) {
//     // Return the sum so the function is easy to reuse and test.
//     return a + b;
// }
//
//
// function main() {
//     // HackerRank provides one integer on each input line.
//     var a = parseInt(readLine());
//     var b = parseInt(readLine());
//
//     var res = solveMeFirst(a, b);
//     console.log(res);
// }
//
// // Export the solution so it can also be exercised by a local test script.
// module.exports = { solveMeFirst };


function solveMeFirst(a, b) {
    return a + b;
}

const a = 2;
const b = 3;
console.log(solveMeFirst(a, b));
