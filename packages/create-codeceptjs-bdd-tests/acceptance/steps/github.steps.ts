export {};
const { I, ghHomePage } = inject();

Before(() => {
    I.amOnPage('/#/');
});

Given(/Fred is on Github Homepage/, () => {
    // navigate - generally this should be part of Before hook.
    // But to explain Background in feature file, we have it in steps
});

When(/he searches for the \"([^\"]*)\"/, (searchFor) => {
    ghHomePage.search(searchFor);
});

Then(/he sees all the detailed highlighted results including description or license info and many more/, async () => {
    I.see('Javascript BDD UI Automation Framework');
    I.see('MIT license\n');
});
