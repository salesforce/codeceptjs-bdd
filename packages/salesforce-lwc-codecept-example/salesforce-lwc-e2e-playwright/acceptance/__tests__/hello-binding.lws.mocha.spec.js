Feature('HelloBinding from Salesforce LWC Recipes (mocha)');

Scenario('Fred successfully types in and verifies the title in Hello Binding LWC Component', async (I, helloBindingPage) => {
    const name = 'Salesforce LWC';
    I.amOnPage('/#hello/');
    helloBindingPage.enterName(name);
    (await helloBindingPage.grabTitle()).should.equal(`Hello, ${name}!`);
}).tag('@smoke');
