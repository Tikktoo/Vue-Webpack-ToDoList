# Vue+Webpack打造todo应用

原视频：<https://www.imooc.com/video/16404>
刚开始接触webpack，就感觉到很复杂的样子，但整个课程学习下来，感觉到新手感到难也是主要各个版本兼容的问题吧，如果webpack配置能走通了，跟着课程走一遍，就可以通过webpack大概了解到搭建vue工程workflow。在此我也将这个项目所使用到了模块的作用及版本做个记录。
webpack
Vue
vue-loader css-loader-------处理css文件中的url()等	
style-loader-------自动将css代码放到生成的style标签中插入到head标签里	
url-loader-------解决图片较多，会发很多http请求，会降低页面性能等问题	
file-loader-------解决图片引入问题	
stylus
stylus-loader-------将stylus语言转化为原生css
cross-env-------运行跨平台设置和使用环境变量的脚本
html-webpack-plugin-------生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）
webpack-dev-server-------提供了开发环境调试工具 

postcss-loader-------补全css代码的兼容性前缀
autoprefixer-------自动添加css前缀的功能
babel-plugin-syntax-jsx
babel-helper-vue-jsx-merge-props
extract-text-webpack-plugin-------将样式文件单独打包
babel-preset-env-------根据当前的运行环境来自动配置源码到当前环境可正常运行的代码的编译转换
babel-plugin-transform-vue-jsx-------Vue官方提供了一个叫做babel-plugin-transform-vue-jsx的插件来编译JSX
babel-core-------babel-core是作为babel的核心存在,babel的核心api都在这个模块里面
babel-loader-------调用babel-core的API来完成转译过程	

使用各个模块的版本号也一并记录下来：

npm install webpack@3.10.0 vue@2.5.13 vue-loader@13.3.0
npm install css-loader@0.28.7 vue-template-compiler@2.5.13
npm run build
npm install style-loader@0.19.1 url-loader@0.6.2 file-loader@1.1.6
npm install stylus-loader@3.0.1 stylus@0.54.5
npm install webpack-dev-server@2.9.7
npm install cross-env@5.1.3

npm install html-webpack-plugin@2.30.1