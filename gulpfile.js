const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - to define tasks
    gulp.src - point to files to use
    gulp.dest - point to folder to output
    gulp.watch - watch files/folders for changes
*/

// Logs Message
gulp.task("message", async function () {
  return console.log("Gulp is running...");
});

// Copy All HTML Files
gulp.task("copyHtml", async function () {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// Optimize Images
gulp.task("imageMin", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"))
);

gulp.task("default", async function () {
  return console.log("Gulp is running...");
});
