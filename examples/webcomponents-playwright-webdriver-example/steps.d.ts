/// <reference types='codeceptjs' />
type lwcRecipeHelloPage = typeof import('./tests/acceptance/pages/lwc-recipe.hello.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, lwcRecipeHelloPage: lwcRecipeHelloPage, page: page }
  interface Methods extends REST, Playwright {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
