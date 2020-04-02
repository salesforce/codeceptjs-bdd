Feature('HelloBinding from Salesforce LWC Recipes (mocha)');

Scenario('Fred successfully types in and verifies the title in Hello Binding LWC Component', async (I, helloBinding) => {
    const name = 'Salesforce LWC';
    I.amOnPage('/#hello/');
    helloBinding.enterName(name);
    (await helloBinding.grabTitle()).should.equal(`Hello, ${name}!`);
}).tag('@hello-binding-mocha').tag('smoke');