const merge = require('webpack-merge');
const common = require('./common');
const sourceMap = require('./source-map');
const lint = require('./lint');

let config = common;
switch (process.env.npm_lifecycle_event) {
	case 's':
		config = merge(config, sourceMap);
		break;
	case 'l':
		config = merge(config, lint);
		break;
}
module.exports = config;