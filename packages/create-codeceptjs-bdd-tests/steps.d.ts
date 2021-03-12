/// <reference types='codeceptjs' />
type ghHomePage = typeof import('./acceptance/pages/github/gh-home.page');
type ghSearchPage = typeof import('./acceptance/pages/github/gh-search.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');
type Driver_commands = import('/Users/kgajjar/dev/b2c/codeceptjs-bdd/packages/codeceptjs-configure/lib/helpers/driver-commands.helper.js');
type custom_methods = import('/Users/kgajjar/dev/b2c/codeceptjs-bdd/packages/codeceptjs-configure/lib/helpers/custom-methods.helper.js');
type driver_helper = import('./acceptance/helpers/driver.helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, ghHomePage: ghHomePage, ghSearchPage: ghSearchPage, page: page }
  interface Methods extends Driver_commands, custom_methods, REST, Playwright, driver_helper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
