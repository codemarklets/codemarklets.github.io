var gulp = require("gulp");
var LiveServer = require("gulp-live-server");
var browserSync = require("browser-sync");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("live-server", function() {
	browserSync.init({
        server: {
            baseDir: "."
        },
        port: 8080
    });
});

gulp.task('copyIndex', function() {
	//gulp.src('./app/index.html').pipe(gulp.dest('./dist'));
	//console.log("Copied index.html");
});

gulp.task('copyHtml', function() { /*['copyIndex'], */
	gulp.src('./app/**/*.html').pipe(gulp.dest('./dist'));
	console.log("Copied all html files");
});


gulp.task("copyCSS", function() {
    gulp.src("./app/**/*.css").pipe(gulp.dest("./dist"));
	gulp.src("./node_modules/bootstrap/dist/css/bootstrap.min.css").pipe(gulp.dest("./dist/css"));
	console.log("Copied all css files");
});

gulp.task("copyImages", function() {
    gulp.src("./app/img/*").pipe(gulp.dest("./dist/img"));
	console.log("Copied all images files");
});

gulp.task('copy', ['copyHtml', 'copyCSS', 'copyImages'], function() {
	console.log("Coping files is completed...");
});


gulp.task("bundle", ["copy"], function() {
    return browserify({
        entries: "./app/app.js",
        debug: true
    })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./dist"))
})

gulp.task("serve", ["bundle","live-server"], function() {
	console.log("Server is running...");
});

gulp.task("watch", ["bundle"], browserSync.reload);
gulp.watch("./app/**/*.jsx", ["watch"]);
gulp.watch("./app/**/*.js", ["watch"]);

gulp.watch("./app/**/*.html", ["copyHtml"]);
gulp.watch("./app/**/*.css", ["copyCSS"]);