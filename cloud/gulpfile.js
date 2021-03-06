/*
 * @Author: your name
 * @Date: 2020-05-18 09:51:32
 * @LastEditTime: 2020-06-02 09:32:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/cloud/gulpfile.js
 */ 
var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩

/**
 * 压缩js(css压缩原理类同)
 * 解压文件路径： ['./src/index.js'] js多个文件进行压缩
 * 解出文件路径： ./js
 */

let pathList = ['./dist/*.js', './dist/*/*.js', './dist/index.d.ts']
gulp.task('copy', async function() {
  await gulp.src(pathList) //压缩多个文件
    // .pipe(uglify({
    //   mangle: true,  //是否代码混淆
    //   compress: true
    // }))  //压缩
    .pipe(gulp.dest('./lib')); //输出
});