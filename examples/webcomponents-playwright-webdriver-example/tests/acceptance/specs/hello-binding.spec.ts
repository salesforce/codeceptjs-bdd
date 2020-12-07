const expect = require('expect');

Feature('LWC Hello!').tag('@hello');

Scenario('Verify the Hello Binding Component', async ({ I, lwcRecipeHelloPage }) => {
    const helloBinding = lwcRecipeHelloPage.helloBinding;

    I.amOnPage('/#hello');

    helloBinding.enterName('Kushang Gajjar');

    expect(await helloBinding.grabTitle()).toEqual('Hello, Kushang Gajjar!');
}).tag('@@hello_binding');
