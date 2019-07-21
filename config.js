/*
 * @Author: Nokey 
 * @Date: 2018-03-16 10:40:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-03-16 10:45:37
 */
'use strict'; 

module.exports = {
    // Deploy
    public_path: '/home'
    ,port: 9000
    ,plugin_url: ''
    ,ga_id: ''
    ,fb_id: ''
    ,analyse_bundle: true

    // multi-pages
    ,pages: [
        { // Page 1
            title: ''
            ,desc: ''
            ,image: ''
            ,thumb: 'https://url/media/wechat-thumb.jpg'
            ,url: 'https://url/article/new-era-for-china.html'

            // htmlWebpackPlugin parameters
            ,filename: 'index.html'
            ,entry: 'home/index'
        }
        ,{ // Page 2
            title: ''
            ,desc: ''
            ,image: ''
            ,thumb: 'https://url/article/media/thumb.jpg'
            ,url: 'https://url/article/moments-on-world-stage.html'

            // htmlWebpackPlugin parameters
            ,filename: 'about/index.html'
            ,entry: 'about/index'
        }
    ]
}