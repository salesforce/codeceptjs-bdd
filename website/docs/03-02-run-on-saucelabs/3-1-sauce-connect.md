---
title: Sauce Tunnel
sub_title: Start Sauce Tunnel programmatically
parents: ['Run On Saucelabs']
keywords: ['Saucelabs', 'sauce', 'sauce tunnel', 'tunnel', 'connect']
---

### ⚡️ Sauce Tunnel

##### Start Sauce Tunnel thru single command

```bash
 npx codeceptjs-sauce-connect -u <sauce-username> -k <sauce-accesskey>
```

Take a look at other options,

```bash
npx codeceptjs-sauce-connect -h
```

To start Sauce Tunnel with specific Tunnel Name pass `-n <tunnel-name>` (default: codeceptjs-sauce-tunnel)

```bash
npx codeceptjs-sauce-connect -u <saucelabs-username> -k <saucelabs-access-key> -n <saucelabs-tunnel-name>
```

##### Connect your Codecept tests with existing active tunnel,

To run your tests thru Sauce Tunnel, all you need is to pass the env variable `SAUCE_TUNNEL_NAME`,

```bash
SAUCE_TUNNEL_NAME=<your-tunnel-name> yarn acceptance --profile sauce:<options>
```

Take a look at (https://gkushang.github.io/03-02-run-on-saucelabs/3-run-on-saucelabs/)(how to run on sauce labs) for more info.
