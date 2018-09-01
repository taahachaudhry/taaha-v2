var src = './src';
var dist = '../taahachaudhry.github.io';

module.exports = {
  connect: {
    devRoot: src,
    distRoot: dist,
    devPort: '3000',
    distPort: '3001',
    livereload: true
  },
  html: {
    src: src + '/*.html',
    dest: dist
  },
  scss: {
    src: src + '/scss/**/*.scss',
    dest: dist + '/css',
    lint: '.scss-lint.yml',
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  browserify: {
    src: src + '/js/main.js',
    dest: dist + '/js/',
    bundle: 'main.js'
  },
  dist: {
    src: src,
    dest: dist
  }
}
