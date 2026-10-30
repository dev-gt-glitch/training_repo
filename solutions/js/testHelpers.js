'use strict';

// Capture console output from solutions whose HackerRank contract is to print.
function captureOutput(callback) {
    const lines = [];
    const originalLog = console.log;
    console.log = (...values) => lines.push(values.join(' '));

    try {
        callback();
    } finally {
        console.log = originalLog;
    }

    return lines;
}

module.exports = { captureOutput };
