const {src, dest, watch, series, parallel, task} = require("gulp");
const connect = require("gulp-connect");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const svgSprite = require("gulp-svg-sprite");
const webpack = require("webpack-stream");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const fs = require("fs");
const fileInclude = require("gulp-file-include");

let sourceDir = "./src/";
let buildDir = "./dest/";

const path = {
    src: {
        html: sourceDir + "index.html",
        scss: sourceDir + "scss/**/*.scss",
        js: sourceDir + "js/**/*.js",
        img: sourceDir + "img/**/*.*",
        svg: sourceDir + "img/svg/*.svg",
        fonts: sourceDir + "fonts/*.ttf",
    }, build: {
        html: buildDir,
        css: buildDir + "css/",
        img: buildDir + "img/",
        fonts: buildDir + "fonts/",
        js: buildDir + "js/",
    }, watch: {
        scss: sourceDir + "scss/**/*.scss",
        html: sourceDir + "**/*.html",
        js: sourceDir + "js/**/*.js",
        img: sourceDir + "img/**/*.*",
        fonts: sourceDir + "fonts/**/*.*",
    },
};

function buildHtml() {
    return (src(path.src.html)
            .pipe(fileInclude({
                prefix: "@@", basepath: "./src/components",
            }))
            .pipe(htmlmin({
                collapseWhitespace: true, removeComments: true,
            }))
            .pipe(dest(path.build.html))
            .pipe(connect.reload()));
}

function buildStyles() {
    return (src(path.src.scss)
            .pipe(sass({
                outputStyle: "expanded",
            }))
            .pipe(autoprefixer({
                overrideBrowserslist: ["last 5 versions"], cascade: true,
            }))
            .pipe(rename("style.css"))
            .pipe(dest(path.build.css))
            .pipe(connect.reload()));
}

function buildJs() {
    return src(path.src.js)
        .pipe(webpack({
            mode: "development", entry: {
                app: "./src/js/index.js",
            }, output: {
                filename: "script.js",
            }, devtool: "source-map",
        }))
        .pipe(dest(path.build.js))
        .pipe(connect.reload());
}

function buildImg() {
    return (src(path.src.img)
            .pipe(imagemin({
                progressive: true, svgoPlugins: [{removeViewBox: false}], interlaced: true, optimizationLeve: 1,
            }))
            .pipe(dest(path.build.img))
            .pipe(connect.reload()));
}

task("svgSprite", function () {
    return src([path.src.svg])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg", example: true,
                },
            },
        }))
        .pipe(dest(path.build.img));
});

function buildFonts() {
    src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
        .pipe(connect.reload());
}

async function fontsStyle() {
    let file_content = fs.readFileSync(sourceDir + "scss/_fonts.scss");
    if (file_content == "") {
        fs.writeFile(sourceDir + "scss/_fonts.scss", "", cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split(".");
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(sourceDir + "scss/_fonts.scss", '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        });
    }
}

function cb() {
}

function startLocalServer() {
    connect.server({
        root: "dest", port: 8888, livereload: true,
    });
}

function watchCode() {
    watch(path.watch.scss, buildStyles);
    watch(path.watch.html, buildHtml);
    watch(path.watch.js, buildJs);
    watch(path.watch.img, buildImg);
}

exports.build = series(buildFonts, fontsStyle, buildStyles, buildHtml, buildJs, buildImg);

exports.default = series(buildStyles, buildHtml, buildFonts, fontsStyle, buildJs, buildImg, parallel(startLocalServer, watchCode));
