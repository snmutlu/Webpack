/* Öncelikle proje dosyamızı açtıktan sonra npm init
diyerek package.json'ımızı oluşturuyoruz.

Sonrasında projemize öncelikle babel'i eklememiz gerekiyor.
Bunun için npm install @babel/core @babel/polyfill @babel/preset-env babel-loader
modüllerini --save-dev olarak indiriyoruz.

Sonrasında webpack'i i indirmek için ve command line'da kullanabilmek için

npm install webpack-cli webpack --save-dev olarak indiriyoruz.

Sonrasında src dosyamızı oluşturuyoruz ve proje içerisinde kullanacağımız
bütün js sayfalarımızı burada yazıyoruz. Ve bu yazdığımız kodları export
ediyoruz. Ardından index.js sayfamızda bu export ettiğimiz kodlarımızı
import ediyoruz.
Daha sonrasında export edilen dosyalarımızı tek bir dosya haline
getirmek için bir webpack.config.js dosyası oluşturmamız gerekiyor. Ve içerisine
config kodlarını yapıştırıyoruz.

---------------------------------------------------
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    },
    mode: "development",
    
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ["@babel/preset-env"]
                }
              }
            }
          ]
    }
};
----------------------------------------------------

Ardından webpack'i kullanmak ve local olarak çalıtırabilmek için
package.json içerisinde bir "build" : "webpack --watch" şeklinde bir
script oluşturuyoruz. Buradaki --watch komutu ise bizim projemizde
değişebilecek olan app1.js index.js gibi sayfalarımızı sürekli takip
edip bir bundle haline getirmesi için kullanılıyor.

Sonrasında npm run build diyerek webpack'imizi çalıştırıyoruz. Sonrasında
src klasörü altındaki bütün klasörlerimiz bundle'lanacak ve bundles klasörü
altındaki bundle.js sayfasında toplanmış ve tek dosya haline gelmiş olacak.

Ardından biz projemizde sadece bu bundle.js dosyasını kullanabiliriz.

Biz bu dosyayı herhangi bir index.html içerisinde kullanabiliriz:
    <script src="/bundles/bundle.js"></script>

*/