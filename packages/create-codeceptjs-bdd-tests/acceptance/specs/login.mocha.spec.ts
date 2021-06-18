Feature('Login Tests (mocha)');

Before(({ I }) => {
    I.amOnPage('/#/');
});

Scenario('Fred logs in successfully', ({ I }) => {
    I.amOnPage('https://github.com');
})
    .tag('@login_mocha')
    .tag('smoke');
