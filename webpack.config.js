const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'transpiled', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};

/* 
now run "yarn build" and then "yarn webpack"
Then open index.html at browser and voilà!
*/ 