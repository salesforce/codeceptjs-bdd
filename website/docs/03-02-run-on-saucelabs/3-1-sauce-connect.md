---
title: Sauce Tunnel (Sauce Connect)
sub_title: Start Sauce Tunnel programmatically
parents: ['Run On Saucelabs']
keywords: ['Saucelabs', 'sauce', 'sauce tunnel', 'tunnel', 'connect']
---

### ⚡️ Sauce Tunnel

##### Clone & Install

```
git clone git@github.com:salesforce/codeceptjs-bdd.git
cd codeceptjs-bdd/packages/codeceptjs-saucelabs
yarn
```

##### Start Tunnel

Take a look at options,

```
yarn sauce:connect -h
```

To start Sauce Tunnel (default name: codecept-sauce-tunnel)

```
yarn sauce:connect -u <saucelabs-username> -k <saucelabs-access-key> -n <saucelabs-tunnel-name>
```

e.g.
`yarn sauce:connect -u $SAUCE_USERNAME -k $SAUCE_KEY`

##### Connect your Codecept tests with existing active tunnel,

To run your tests thru Sauce Tunnel, all you need is to pass the env variable `SAUCE_TUNNEL_NAME`,

```
SAUCE_TUNNEL_NAME=<your-tunnel-name> yarn acceptance --profile sauce:<options>
```

Take a look at (https://gkushang.github.io/03-02-run-on-saucelabs/3-run-on-saucelabs/)(how to run on sauce labs) for more info.
