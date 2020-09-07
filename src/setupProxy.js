const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/getClass', {
            target: 'http://10.228.38.175:9812',
            changeOrigin: true
        })
    )

    app.use(
        createProxyMiddleware('/generateClass', {
            target: 'http://10.228.38.175:9812',
            changeOrigin: true
        })
    )
}