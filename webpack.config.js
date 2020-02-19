//entry->output 
const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}  

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
            }),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID':JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
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




