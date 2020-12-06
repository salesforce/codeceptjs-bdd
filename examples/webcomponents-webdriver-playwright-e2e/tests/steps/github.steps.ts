const { I, homePage, searchResultsPage } = inject();

Given(/Fred is on Github Homepage/, () => {
    // navigate - genarally this should be part of Before hook.
    // But to explain Background in feature file, we have it in stepdef
});

When(/he searches for the \"([^\"]*)\"/, (searchFor) => {
    homePage.search(searchFor);
});

Then(/he is able to see the \"([^\\"]*)\" in search results/, async (result) => {
    // verify Element Attribute
    // (await searchResultsPage.grabHrefForResult())[0].should.containEql(result);
});

Then(/he sees all the detailed highlighted results including description or license info and many more/, () => {
    I.see('Javascript BDD UI Automation Framework');

    I.see('MIT license\n');
});
