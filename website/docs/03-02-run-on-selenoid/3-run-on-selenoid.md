---
title: Selenoid
sub_title: Execute BDD Scenarios on Selenoid Grid
parents: ['Run On Selenoid']
keywords: ['Selenoid', 'Execute', 'WebDriver']
---

### ⚡️ Selenoid

Start Selenoid and Selenoid-UI locally. Pls follow the instructions [here](https://aerokube.com/selenoid/latest/)

### 🏃 Run Scenarios on Selenoid

Codeceptjs-BDD implements the quick way to run your tests on Selenoid Grid. It uses the module `codeceptjs-selenoid`.

Please note the `selenoid:` in the below command, which does the magic running your tests on Selenoid.

```bash
 $ yarn acceptance --profile selenoid:<browser>:<browser-version>
```

e.g. `yarn acceptance --profile selenoid:chrome:84`

If your Selenoid Grid renders the Tablet Size browser size then you can set the screen resolution by setting the env variable,

`SCREEN_RESOLUTION` - the default resolution is `1280x1024x24` (desktop size)
