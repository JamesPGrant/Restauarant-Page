const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
       bundle: path.resolve(__dirname, 'src/index.js'),
    }, 
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Restauraunt-Page',
            filename:'index.html',
            template: 'src/template.html',
        }),
    ],
    module:
    {
        rules:
        [
            {
                test: /\.(glb|gltf)$/,
                use:
                [
                    {
                        loader: 'gltf-webpack-loader',
                        options:
                        {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },
            {
                test: /\.(glb|gltf)$/,
                use: [
                    {
                        loader:"file-loader",
                        options:{
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },
            {
                test:/\.(bin)$/,
                use:[
                    {
                        loader:'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test:/\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}

