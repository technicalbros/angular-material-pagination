const path = require("path");

module.exports = (env = {}) => {

    const {mode = "development"} = env;
    return {
        mode: mode,
        entry: [
            path.resolve(__dirname, "src/index.js"),
            `file-loader?name=index.css!extract-loader!css-loader!sass-loader!${path.resolve(__dirname, "src/index.scss")}`
        ],
        output: {
            filename: mode === 'development' ? 'angular-material-pagination.min.js' : 'angular-material-pagination.js'
        }
    }
}