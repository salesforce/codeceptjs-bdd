Feature('Login Tests (mocha)');

Before(({ I }) => {
    I.amOnPage('/#/');
});

Scenario('Fred logs in successfully', ({ I }) => {
    I.amOnPage('/gkushang/codeceptjs-bdd');
})
    .tag('@login_mocha')
    .tag('smoke');

Scenario('Fred logs in successfully', ({ I }) => {
    I.amOnPage('/gkushang/codeceptjs-bdd');
})
    .tag('@login_one')
    .tag('smoke');

Scenario('Fred intercept request for playwright @intercept', async ({ I }) => {
    if (await I.checkIfRunningOnPlaywright()) {
        // Set Mock Data
        const mockResponseObject = [
            {
                id: 1,
                title: 'How to Intercept a Response in Playwright',
                author: 'CodeceptBDD',
                genre: 'business',
                price: '100.00',
                rating: '★★★★★',
                stock: 65535,
            },
        ];

        // Intercept Request
        I.usePlaywrightTo('do intercept', async ({ page }) => {
            await page.route('https://danube-webshop.herokuapp.com/api/books', (route) =>
                route.fulfill({
                    contentType: 'application/json',
                    body: JSON.stringify(mockResponseObject),
                })
            );
        });

        // Validate
        I.amOnPage('https://danube-webshop.herokuapp.com/');
        I.seeTextEquals('How to Intercept a Response in Playwright', { css: '.preview-title' });
        I.seeTextEquals('CodeceptBDD', { css: '.preview-author' });
    }
});
