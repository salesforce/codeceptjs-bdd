const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'git@github.com:gkushang/gkushang.github.io.git',
    },
    () => {
        console.log('\n>>>> Successfully Published to https://gkushang.github.io.');
    }
);
