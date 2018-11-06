const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target:'web',
    entry: path.join(__dirname,'src/index.js'), //输入：项目主文件（文件入口）
    output:{
        filename:'build.[hash:8]js',//输出的文件名
        path: path.join(__dirname,'dist') //输出路径
    },
    module:{    //配置加载资源
        rules: [    //规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
    
            
            {
                test:/\.(gif|jpg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024, //文件小于1024字节，转换成base64编码，写入文件里面
                            name:'[name]-output.[ext]'//文件输出名字 ext：文件后缀
                        }
                    }
                ]
            }
        ]
    }，
      // webpack插件配置
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev){
        // 开发坏境的配置
    config.module.rules.push({
        test:/\.styl$/,
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'postcss-loader',
                options:{
                    sourceMap:true,
                }
                
            },
            'stylus-loader'
        ]
    })
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer ={
        port:8080,
        host:'0.0.0.0',
        overlay: {      // webpack编译出现错误，则显示到网页上
            errors:true,
        },
        // open: true,

        // 不刷新热加载数据
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {   // 将所用到的类库单独打包
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    };    
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test:/\.styl/,
        use:ExtractPlugin.extract({
            fallback:'style-loader',
            use:[
            
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true,
                    }
                    
                },
                'stylus-loader'
            ]
        })
    },
    )
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        // 将类库文件单独打包出来
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
         }),
        // webpack相关的代码单独打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    )
}

module.exports = config
