# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **Lerna monorepo** (Yarn workspaces, independent versioning) publishing a CodeceptJS-based UI/API test automation framework. The headline feature is **WebdriverIO ↔ Playwright parity**: the same Gherkin/Mocha test runs on either driver, including Shadow DOM support for LWC/WebComponents. Packages are published independently to npm; `create-codeceptjs-bdd-tests` is the user-facing scaffolder (`npx create-codeceptjs-bdd-tests`).

## Packages (`packages/*`)

- **`create-codeceptjs-bdd-tests`** — the published CLI + the reference `acceptance/` test project. `cli/create.js` is the interactive scaffolder that copies `acceptance/`, wires env files, and installs deps. Its `codecept.conf.js` + `acceptance/` are the template users get.
- **`codeceptjs-configure`** — the core engine. Merges a shared master config with driver configs and integrations. This is where driver switching, page-object/step auto-discovery, reports, and the Shadow DOM plugin live. Most framework behavior changes happen here.
- **`codeceptjs-saucelabs`** — Sauce Labs browser matrix + config, merged in by `configure`.
- **`codeceptjs-selenoid`** — Selenoid integration, merged in by `configure`.
- **`codeceptjs-sauce-connect`** — launches the Sauce Connect tunnel.

Per `CONTRIBUTING.md`: SauceLabs changes go in `codeceptjs-saucelabs`, config changes in `codeceptjs-configure`.

## Config architecture (read before touching test config)

Config is assembled at runtime by driver, not hardcoded. The chain:

1. **`profile` env var** (e.g. `playwright:chrome`, `sauce:chrome`, `device:'iPhone 11':safari`) is matched by `set.driver.js`, which sets `process.env.DRIVER` to `Playwright`, `Webdriver`, or `Appium`.
2. **`codecept.master.conf.js`** builds the shared config (plugins: allure, screenshotOnFail, retryFailedStep, shadowDom, stepByStepReport; gherkin steps; page objects) and applies the matching driver config from `drivers/drivers.conf.js`.
3. **`configure.create(conf)`** (`lib/config/configure.js`) deep-merges master config ← user's `codecept.conf.js` ← saucelabs config ← selenoid config, and drops the WebDriver helper when running a non-webdriver driver.

**Auto-discovery** (`lib/config/bdd/`): page objects are globbed from `<CODECEPT_RELATIVE_PATH>/pages/**/*.page.{js,ts}` (registered as camelCased names), and step definitions from `steps/**/*.steps.*` + `specs/hooks/**/*.hooks.*`. You generally do not register these manually — just add files matching the glob.

Key env vars: `DRIVER`, `profile`, `HOST` (required — target under test; see `lib/host/host.js`), `CODECEPT_RELATIVE_PATH` (root of the acceptance project, e.g. `./acceptance/`), `HEADLESS`, `ENABLE_SHADOW_DOM_SUPPORT`, `PAUSE_ON_FAIL`. Env files: `acceptance/config/codecept.env` (defaults) + `codecept.dev.env` (overrides), loaded via `dotenv-extended`.

## Reference test project layout (`packages/create-codeceptjs-bdd-tests/acceptance/`)

- `features/*.feature` — Gherkin scenarios
- `steps/*.steps.ts` — step definitions
- `specs/*.mocha.spec.ts` — Mocha-style tests
- `pages/**/*.page.ts` — page objects (auto-registered)
- `helpers/*.helper.ts` — custom helpers
- `config/` — env files
- `report/` — allure output + videos/screenshots

## Commands

Run test scripts from the **`create-codeceptjs-bdd-tests` package** (root scripts delegate to it via `lerna run --scope`).

```bash
# Setup (from repo root)
lerna bootstrap                    # or: yarn bootstrap — install all workspace deps

# Run acceptance tests by driver/profile
yarn acceptance --profile playwright:chrome
yarn acceptance --profile webdriver:chrome
yarn acceptance --profile sauce:chrome
yarn acceptance --profile device:'iPhone 11':safari

# Parallel + headless
yarn acceptance:parallel --profile playwright:chrome
HEADLESS=true yarn acceptance:parallel --profile playwright:chrome

# Run a single scenario/spec by Gherkin tag
./node_modules/.bin/codeceptjs run --config=<path/to/codecept.conf.js> --grep=@search_results

# CI targets (mirror .circleci/config.yml)
yarn circleci:test:playwright
yarn circleci:test:webdriver

# Reports (allure)
yarn acceptance:report            # from create-codeceptjs-bdd-tests

# Lint / format (Prettier is the formatter of record)
yarn lerna:lint:prettier
yarn lerna:polish                 # prettier + sort-package-json
```

Under the hood `acceptance` = `codeceptjs def && codeceptjs run --verbose`; `acceptance:parallel` uses `codeceptjs run-workers`; the washer target is `codeceptjs run-rerun`.

## Conventions

- **Prettier** (`.prettierrc`): 4-space tabs, `printWidth` 120, single quotes, ES5 trailing commas. ESLint uses `eslint:recommended` only. Prettier runs on staged files via husky/lint-staged.
- Tests/page-objects/helpers are TypeScript (`ts-node/register`); framework packages are CommonJS JS.
- Node 14+ engine (README recommends Node 16 for the CLI).
- The `I` actor object is CodeceptJS's global — driver differences are abstracted so `I.fillField(...)` etc. work on both Webdriver and Playwright.
