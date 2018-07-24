# yihome
开心易家
# npm install
#  运行时默认打开浏览器
在 config--index.js
修改autoOpenBrowser: true,

#  js和css路径加载错吴
修改config-->index.js   build里assetsPublicPath

#  背景图片路径错误
修改build-->utils.js    在use:loaders  fallback: 'vue-style-loader', 下加
publicPath:'../../'

#  有空格报错
在 build webpack.base.config里屏蔽
...(config.dev.useEslint ? [createLintingRule()] : []),


