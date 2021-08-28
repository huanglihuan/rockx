
/**
 * Created by 
 */
 var gulp = require('gulp');
 // var imagemin = require('gulp-imagemin');   图片压缩
 // var uglify = require("gulp-uglify");  js压缩
 // var less = require('gulp-less');      less
 // var cleanCSS = require('gulp-clean-css');  css压缩
var clean = require('gulp-clean');
 var fileinclude = require('gulp-file-include');
 var gulp = require('gulp');
 var connect = require('gulp-connect');


 gulp.task('copyhtml', function (done) {
     return gulp.src(['**/**.html','!node_modules/**/*'])
         .pipe(fileinclude({
             prefix: '@@',
             basepath: '@file'
         }))
         .pipe(gulp.dest('dist/'))
         .pipe(connect.reload());
  
 });

gulp.task('js', function (cb) {
    return gulp.src(['**/**.js', '!node_modules/**/*','!gulpfile*.js'])
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());

});

//js压缩
// gulp.task("uglify",function() {
//     gulp.src("src/js/*.js")
//         .pipe(uglify()) //压缩js代码
//         .pipe(gulp.dest("prew/js")) 
// })

gulp.task('style', function () {
    return gulp.src(['**/**.css', '!node_modules/**/*'])
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
 });

 gulp.task('img', function () {
    // return gulp.src(['**/*.jpg',
    //         '**/*.jpge',
    //         '**/*.png',
    //         '**/*.gif',
    //         '**/*.bmp', '!prew/**/*', '!node_modules/**/*']).pipe(gulp.dest('prew/'));
    return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        // .pipe(cache(imagemin({//压缩图片文件
        // interlaced: true,
        // })))
        .pipe(gulp.dest('dist/images'))
 });

 //删除dist文件
 gulp.task('clean:alldist', function (cb) {
    //return gulp.src('dist', {read: false})
    return gulp.src('dist', {allowEmpty: true})
        .pipe(clean());
});

//异步清理除dist目录图片以外的文件
gulp.task('clean:dist', function() {
    return del(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

gulp.task('webserver',function(){
    connect.server({
       port:8888,
       root: './', 
       livereload: true
    });
 })

gulp.task('connect:dist',function(cb){
    connect.server({
        livereload:true,
        port:9999
    })
    cb()
})

 gulp.task('watchs',function(){//监听变化执行任务
    //当匹配任务变化才执行相应任务
    gulp.watch('pages/*.html',gulp.series('copyhtml'));
    gulp.watch('css/*.css',gulp.series('style'));
    // gulp.watch('app/scss/**/*.scss',gulp.series('css'));
    gulp.watch('js/*.js',gulp.series('js'));
    // gulp.watch('app/fonts/**/*',gulp.series('fonts'));
    gulp.watch('images/**/*',gulp.series('img'));
})


//初始生成app/dist目录
gulp.task('init',gulp.series('clean:alldist',gulp.parallel(['copyhtml','js','style','img']),function(done){
     done();
}));

gulp.task('build', 
  gulp.series('clean:alldist',gulp.parallel('init'), function (done) {
  done();
 }));


//启动任务webserver服务，并监控变化
gulp.task('run', 
  gulp.series('init',gulp.parallel(['webserver', 'watchs']), function (done) {
    done();
 }));

//启动任务connect:dist服务，生成打包文件后，监控其变化
gulp.task('serve',gulp.series('connect:dist','build','watchs'));