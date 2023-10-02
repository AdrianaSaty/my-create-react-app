const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

/* 
if we run "yarn webpack" it will throw an error, 
we need to run it at the output file from babel
*/ 