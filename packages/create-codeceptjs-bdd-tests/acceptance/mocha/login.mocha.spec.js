Feature('Login Tests (mocha)');

Scenario('Fred logs in successfully', (I) => {
        I.amOnPage('/gkushang/codeceptjs-bdd');
    })
    .tag('@login_mocha')
    .tag('smoke');