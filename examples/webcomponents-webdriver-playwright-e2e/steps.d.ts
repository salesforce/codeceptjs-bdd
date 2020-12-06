/// <reference types='codeceptjs' />
type homePage = typeof import('./tests/pages/home.page');
type searchResultsPage = typeof import('./tests/pages/search-results.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');
type Driver_commands = import('codeceptjs-configure/lib/helpers/driver-commands.helper.js');
type custom_methods = import('codeceptjs-configure/lib/helpers/custom-methods.helper.js');

declare namespace CodeceptJS {
    interface SupportObject {
        I: I;
        current: any;
        homePage: homePage;
        searchResultsPage: searchResultsPage;
    }
    interface Methods extends Driver_commands, custom_methods, REST, Playwright {}
    interface I extends WithTranslation<Methods> {}
    namespace Translation {
        interface Actions {}
    }
}
