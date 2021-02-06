---
title: Sauce Tunnel
sub_title: Start Sauce Tunnel programmatically
parents: ['Run On Saucelabs']
keywords: ['Saucelabs', 'sauce', 'sauce tunnel', 'tunnel', 'connect']
---

### ⚡️ Sauce Tunnel

##### Start Sauce Tunnel thru Codeceptjs-Sauce-Connect Tool

```bash
 npx codeceptjs-sauce-connect -u <sauce-username> -k <sauce-accesskey>
```

To look for more options,

```bash
npx codeceptjs-sauce-connect --help
```

To start Sauce Tunnel with specific Tunnel Name pass `-n <tunnel-name>` (default: codeceptjs-sauce-tunnel)

```bash
npx codeceptjs-sauce-connect -u <saucelabs-username> -k <saucelabs-access-key> -n <saucelabs-tunnel-name>
```

#### Connect your Codecept tests with existing active tunnel,

To connect to exiting **Parent Tunnel**, pass the env variable `SAUCE_PARENT_TUNNEL=<owner_value_from_sauce_tunnels_page>`

```bash
SAUCE_PARENT_TUNNEL=<owner_value_from_sauce_tunnels_page> yarn acceptance --profile sauce:<options>
```

To connect to existing **Tunnel** (running from the same account), pass the env variable `SAUCE_TUNNEL_NAME=<tunnel-name>`

```bash
SAUCE_TUNNEL_NAME=<your-tunnel-name> yarn acceptance --profile sauce:<options>
```

For more info, take a look at https://gkushang.github.io/03-02-run-on-saucelabs/3-run-on-saucelabs/
