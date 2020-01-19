const {I, ghHomePage, ghSearchPage} = inject();
const verify = require('soft-assert');

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

        /**
         *
         ***********************************
         // EXAMPLE 1: USE CODECEPTJS ASSERTIONS
         ************************************/

         I.see('CodeceptJS BDD Framework with Cucumber, SauceLabs');

        I.see('MIT license\n');

        /**
         * code is commented to have CI pass, uncomment below code to test
         ***********************************
         // EXAMPLE 2: USING SHOULD.JS LIBRARY - http://shouldjs.github.io/
         ************************************/

        // ==>>>> TWO ASSERTIONS USING SHOULD.JS LIBRARY

        // (await ghSearchPage.grabDescription()).trim().should.equal('CodeceptJS E2E Framework with Cucumber, SauceLabs');
        // (await ghSearchPage.grabLicenseInfo())[0].should.containEql('MIT');

        /**
         * code is commented to have CI pass, uncomment below code to test
         ***********************************
            // USE OF SOFT ASSERTIONS
         ***********************************

            let licenseInfo = (await ghSearchPage.grabLicenseInfo())[0];
            let description = await ghSearchPage.grabDescription();

            // verify and if fails, do not fail test but grab all the errors

            // uncomment below code to test - code is commented to have CI pass
            verify.softAssert(licenseInfo, 'INVALID-STRING-SHOULD-FAIL', 'license info is not right');
            verify.softAssert(description, 'INVALID-STRING-SHOULD-FAIL', 'description info is not right');

            // throw all the errors at once, can be in after hooks
            verify.softAssertAll();
         **/
    });
