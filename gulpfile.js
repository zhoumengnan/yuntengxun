var gulp = require('gulp'); //本地安装gulp所用到的地方
var minifyHtml = require("gulp-minify-html");//加入相应依赖
var minifycss = require('gulp-clean-css');

var minifyjs= require("gulp-uglify");


//html压缩
	gulp.task('htmltask', function () {  //htmltask为自定义的任务名称
    		gulp.src('*.html') // 要压缩的html文件
   		.pipe(minifyHtml())  //压缩，和上面定义的依赖名相同
   		.pipe(gulp.dest('dist'))//压缩到哪，注意先新建dist文件夹
	});

gulp.task('csstask',function(){
  gulp.src('./css/*.css')
  .pipe(minifycss ())
  .pipe(gulp.dest('./dist/css'));//dist下新建css文件夹
});
gulp.task('jstask',function(){
		gulp.src('./js/*.js')  // 要压缩的js文件
		.pipe(minifyjs())
		.pipe(gulp.dest('./dist/js')) //dist下新建js文件夹
	});
