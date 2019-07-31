
const proxy = require("http-proxy-middleware")

module.exports=(app)=>{
    app.use(proxy("/api",{
        target:"www.baidu.com",
        changeOrigin:true
    }))
}