const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browsersync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const purify = require('gulp-purifycss');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webphtml = require('gulp-webp-html');
const webpcss = require('gulp-webpcss');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const Fs = require('fs');
const dataFromFile = JSON.parse(Fs.readFileSync('src/assets/data.json'));

gulp.task('scss', function () {
   return gulp.src('src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(plumber({
         errorHandler: function (err) {
            // Сообщение об ошибке
            console.log(err);
            // Сообщение об ошибке
            this.emit('end')
         }
      }))
      .pipe(sass({
         outputStyle: 'expand'
      }))
      .pipe(autoprefixer({
         browsers: ['last 5 versions'],
      }))
      .pipe(cssmin())
      .pipe(rename({
         suffix: '.min',
         prefix: ''
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/assets'))
      .pipe(browsersync.reload({
         stream: true
      }))
});



gulp.task('webpStyle', function () {
   return gulp.src(['dist/assets/**/*.css'])
      .pipe(webpcss({}))
      .pipe(gulp.dest('dist/assets')),
      gulp.src(['dist/includes/'])
      .pipe(clean()),
      gulp.src(['dist/layout/'])
      .pipe(clean())
});


gulp.task('html', function () {
   return gulp.src(['src/**/*.pug'])
      .pipe(plumber())
      .pipe(pug({
         doctype: 'html',
         pretty: true,
         locals: dataFromFile || {}
      }))
      .pipe(webphtml())
      .pipe(gulp.dest('dist'))
      .pipe(browsersync.reload({
         stream: true
      }))
});


gulp.task('browser-sync', function () {
   browsersync({
      server: {
         baseDir: 'dist'
      },
   })
});



gulp.task('js', function () {
   return gulp
      .src([
         'node_modules/jquery/dist/jquery.js',
         'node_modules/swiper/js/swiper.min.js',
         'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
         'node_modules/inputmask/dist/jquery.inputmask.min.js',
         'node_modules/mmenu-js/dist/mmenu.js',
         'src/js/scripts/*.js'
      ])
      .pipe(sourcemaps.init())
      .pipe(plumber({
         errorHandler: function (err) {
            // Сообщение об ошибке
            console.log(err);
            // Сообщение об ошибке
            this.emit('end')
         }
      }))
      .pipe(concat('scripts.min.js'))
      .pipe(babel({
         compact: false,
         presets: [
            ['env', {
               loose: true,
               modules: false,
               exclude: ['transform-es2015-typeof-symbol']
            }]
         ],
         plugins: ['transform-object-rest-spread']
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/assets'))
      .pipe(browsersync.reload({
         stream: true
      }))
});

gulp.task('images', function () {
   return gulp.src('./src/assets/img/**/*')
      .pipe(webp({
         quality: 70
      }))
      .pipe(gulp.dest('./dist/assets/img')),
      gulp.src('./src/assets/img/**/*')
      .pipe(imagemin({
         progressive: true,
         interlaced: true,
         optimizationLevel: 3,
         svgoPlugins: [{
            removeViewBox: false
         }]
      }))
      .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('fonts', function () {
   return gulp.src('./src/assets/fonts/**/*.ttf')
      .pipe(ttf2woff())
      .pipe(gulp.dest('./dist/assets/fonts/')),
      gulp.src('./src/assets/fonts/**/*.ttf')
      .pipe(ttf2woff2())
      .pipe(gulp.dest('./dist/assets/fonts/'));
});

gulp.task('otf2ttf', function () {
   return gulp.src('./src/assets/fonts/**/*.otf')
      .pipe(fonter({
         formats: ['ttf']
      }))
      .pipe(gulp.dest('./src/assets/fonts/'));
});


gulp.task('clean', function () {
   return gulp.src('dist', {
         read: false
      })
      .pipe(clean());
});

gulp.task('assets', function () {
   return gulp.src('./src/assets/**/*.*')
      .pipe(gulp.dest('./dist/assets/'));
});


gulp.task('purify', function () {
   return gulp.src('dist/assets/**/*.css')
      .pipe(purify(['dist/**/*.js', 'dist/**/*.html']))
      .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('watch', function () {
   gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
   gulp.watch('src/assets/**/*.*', gulp.parallel('assets'));
   gulp.watch('src/assets/img/**/*', gulp.parallel('images'));
   gulp.watch('src/js/**/*.js', gulp.parallel('js'));
   gulp.watch('src/assets/**/*.json');
   gulp.watch('src/**/*.pug', gulp.parallel('html'))
   // gulp.watch('dist/assets/**/*.html', gulp.parallel('purify'))
});

gulp.task('build', gulp.series('clean', 'scss', 'html', 'js', 'images', 'fonts', 'webpStyle', 'assets', 'purify'));

gulp.task('default', gulp.parallel('watch', 'scss', 'browser-sync', 'html', 'js', 'assets', 'images'));