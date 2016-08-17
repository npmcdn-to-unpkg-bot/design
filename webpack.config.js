var path = require("path");
module.exports = {
	entry: {
		app: ["./src/app.js"]
	},
	module: {
	    loaders: [{
	        test: /\.jsx?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	    }]
	},
	output: {
		path: path.resolve(__dirname, "bin"),
		publicPath: "/",
		filename: "app.bundle.js"
	}
};
