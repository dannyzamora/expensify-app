//entry->output 
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,

                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options:{
                            publicPath:(resourcePath,context)=> {
                                return path.relative(path.dirname(resourcePath),context)+ '/'
                            }
                        }
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]

            }

            ]
        },
        plugins: [
            new MiniCSSExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        mode: 'development',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }


    }
};




