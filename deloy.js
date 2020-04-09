var ghpages = require('gh-pages');

ghpages.publish('dist/angular-learn', {
  branch: 'master',
  repo: 'https://github.com/at-dieunguyen/ng-angular-staging.git'
}, function(e) {
  console.log('deloyed');
});
