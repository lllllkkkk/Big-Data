module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    publicPath:'./',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "./src/assets/scss/style.scss";`,
            },
        },
    }
}