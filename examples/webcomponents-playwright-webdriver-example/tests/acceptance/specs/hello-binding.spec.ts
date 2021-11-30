const expect = require('expect');

Feature('LWC Hello!').tag('@hello');

Scenario('Verify the Hello Binding Component', async ({ I, lwcRecipeHelloPage }) => {
    const helloBinding = lwcRecipeHelloPage.helloBinding;

    I.amOnPage('/#hello');

    helloBinding.enterName('John Doe');

    /**
     * Enable this line to test Applitools. You must provide the APPLITOOLS key thru env variable to run this check,
     *
     * APPLITOOLS_API_KEY = <your-key>
     */

    await (I as any).eyeCheck('helloBinding');

    expect(await helloBinding.grabTitle()).toEqual('Hello, John Doe!');
}).tag('@@hello_binding');
