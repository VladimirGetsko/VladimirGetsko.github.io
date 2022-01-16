const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


// Обработка Video
const video = () => {
    return src(path.video.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Video",
            message: error.message
        }))
    }))
    .pipe(dest(path.video.dest));
};

module.exports = video;