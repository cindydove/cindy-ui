module.exports = {
    // 修改入口文件地址为examples下的main.js
    pages:{
        index:{
            entry:"examples/main.js",
            template:"public/index.html",
            filename:"index.html"
        }
    },
    // 扩展webpack配置，使packages加入编译
    chainWebpack:config=>{
        config.module
            .rule("js")
            .include
                .add("/packages")
                .end()
            .use("babel")
            .loader("babel-loader")

    }

}