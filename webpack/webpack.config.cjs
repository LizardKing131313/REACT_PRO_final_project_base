const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.cjs');

module.exports = (envVars) => {
	const { env } = envVars;
	const envConfig = require(`./webpack.${env}.cjs`);
	return merge(commonConfig, envConfig)
};
