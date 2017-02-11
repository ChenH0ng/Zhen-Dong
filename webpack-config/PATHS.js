const Path = require('path');
module.exports = {
    ENTRY: Path.resolve(__dirname, '../client/index.js'),
    OUTPUT: Path.resolve(__dirname, '../public'),
    TEMPLATE: Path.resolve(__dirname, '../client/template.html'),
};