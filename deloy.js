var ghpages = require('gh-pages');

ghpages.publish('dist/angular-learn', {
  branch: 'gh-pages',
  repo: 'https://github.com/at-dieunguyen/test.git'
}, function(e) {
  console.log('deloyed');
});
