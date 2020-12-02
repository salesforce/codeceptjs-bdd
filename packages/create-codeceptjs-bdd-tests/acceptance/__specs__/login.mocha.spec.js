Feature('Login Tests (mocha)');

Scenario('Fred logs in successfully', async ({I}) => {

//     I.amOnPage("https://recipes.lwc.dev/");
//     I.wait(3);
//   await I.fill('ui-input input.input', "abcdefg")
//   I.wait(5);
// I.wait(1);
  I.amOnPage('https://nwk00drm000000hua7.stmfa.stm.force.com/AlpineDemo/s/login');
  I.wait(2);
// await I.fill('input[lightning-input_input', "abcdefg")
// await I.fill('input[lightning-input_input][type="password"]', "abcdefg")
    I.fillField('input[lightning-input_inputa]', 'kushang');
    I.fillField('input[lightning-input_input][type="password"]', 'kushang');
  I.wait(1);

    })
    .tag('@login_mocha')
    .tag('smoke');