const {I, ghHomePage, ghSearchPage} = inject();

Given(/Fred is on Github Homepage/, () => {
    // navigate - genarally this should be part of Before hook.
    // But to explain Background in feature file, we have it in stepdef
});

When(/he searches for the \"([^\"]*)\"/, searchFor => {
    ghHomePage.search(searchFor);
});

Then(/he is able to see the \"([^\\"]*)\" in search results/, async (result) => {
    // verify Element Attribute
    (await ghSearchPage.grabHrefForResult())[0].should.containEql(result);
});

Then(/he sees all the detailed highlighted results including description or license info and many more/,
    async () => {
        // verify Complete Text
        (await ghSearchPage.grabDescription()).trim().should.equal('CodeceptJS E2E Framework with Cucumber, SauceLabs');

        // verify Partial Text
        // because there are two results for the same element, the result is in Array
        (await ghSearchPage.grabLicenseInfo())[0].should.containEql('MIT');
    });
