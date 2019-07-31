const { 
    override, 
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');
const path = require("path");

module.exports = override(
    
    //按需加载antd
    fixBabelImports('import', {        
        libraryName: 'antd',        
        libraryDirectory: 'es',       
        style: 'css',
    }),

    //别名配置
    addWebpackAlias({        
        "@": path.resolve(__dirname, "./src"),             
        "@views": path.resolve(__dirname, "./src/views"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@route": path.resolve(__dirname, "./src/route"),
        "@layout": path.resolve(__dirname, "./src/layout"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@common": path.resolve(__dirname, "./src/common"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@actions": path.resolve(__dirname, "./src/actions"),
        "@assets": path.resolve(__dirname, "./src/assets")
    })
);