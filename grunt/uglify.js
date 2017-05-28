module.exports = {
    options: {
        compress: true,
        mangle: true,
        beautify: false,
        sourceMap: false
    },
    theme: {
        files: {
            'js/min/merged-min.js': ['js/min/jquery.min.js','js/app.js']
        }
    }
};
