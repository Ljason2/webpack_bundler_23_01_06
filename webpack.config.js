
const path = require('path')
const HtmlPlugin= require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')

module.exports ={
    entry : './js/main.js',
    output :{
        path: path.resolve(__dirname,'dist'),
        filename:'main.js',
        clean:true
    },
    module:{
        rules:[
            {   
                // 어떤 파일을 검색해야 하는지 
                test:/\.s?css$/,
                // 사용할 loader -> 순서가 중요함.
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template : './index.html'
        }),

        new CopyPlugin({
            patterns:[{
                from:'static'
            }]
        })
    ]

}

