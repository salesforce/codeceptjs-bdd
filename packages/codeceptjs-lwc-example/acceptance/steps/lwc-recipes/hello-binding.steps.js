const {I, helloBinding} = inject();

When('Fred types {string} into the Hello Binding Component' , (name) => {
    this.name = name;
    helloBinding.enterName(name);
});

Then('he sees the title is updated accordingly' , async () => {
    (await helloBinding.grabTitle()).should.equal(`Hello, ${this.name}!`);
});
