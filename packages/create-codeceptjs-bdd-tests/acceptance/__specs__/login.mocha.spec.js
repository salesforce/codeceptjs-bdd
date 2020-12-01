Feature('Login Tests (mocha)');

Scenario('Fred logs in successfully', async ({I}) => {

    I.amOnPage("https://recipes.lwc.dev/");
    I.wait(3);
  await I.fill('ui-input input.input', "abcdefg")
  I.wait(5);

    })
    .tag('@login_mocha')
    .tag('smoke');