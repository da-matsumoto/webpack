//output.pathに絶対パスを指定する必要があるため、pathモジュールを読みこんでおく
const path = require('path')

module.exports = {
    //モードの設定
    mode : 'development',
    //エントリーポイントの設定
    entry: './src/js/app.js',
    //出力の設定
    output: {
        //出力するファイル名
        filename: 'bundle.js',
        //出力先のパス
        path: path.join(__dirname, 'public/js')
    }
}