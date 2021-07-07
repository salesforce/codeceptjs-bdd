const expect = require('expect');

Feature('LWC Hello!').tag('@hello');

Scenario('Verify the Hello Binding Component', async ({ I, lwcRecipeHelloPage }) => {
    const helloBinding = lwcRecipeHelloPage.helloBinding;

    I.amOnPage('/#hello');

    helloBinding.enterName('John Doe');

    expect(await helloBinding.grabTitle()).toEqual('Hello, John Doe!');
}).tag('@@hello_binding');
