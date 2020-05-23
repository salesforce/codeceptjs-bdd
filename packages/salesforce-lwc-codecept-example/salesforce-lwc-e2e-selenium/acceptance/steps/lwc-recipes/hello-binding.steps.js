const { I, helloBindingPage } = inject();

When('Fred types {string} into the Hello Binding Component', (name) => {
    this.name = name;
    helloBindingPage.enterName(name);
});

Then('he sees the title is updated accordingly', async () => {
    (await helloBindingPage.grabTitle()).should.equal(`Hello, ${this.name}!`);
});
