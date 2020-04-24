---
title: Running Tests
sub_title: Running your acceptance tests
parents: ["Configure and Run Tests"]
keywords: ["test config"]
---

## Quick Start

1. Install

```bash
    cd app_root_directory
    yarn
```

2. Update BM ENV secrets
   In `app_root_directory/tests/acceptance/config/`,
    1. Rename `dev.codecept.secrets.example` to `dev.codecept.secrets`
    2. Configure your ENVIRONMENT and secrets (including BM Passwords, Client ID's etc)
    3. NEVER commit the `dev.codecept.secrets` file, which contains your secrets.

## Run All tests

```bash
    yarn acceptance
```

## Run Single test (Filtering)

Filter tests with the `grep` flag

```bash
    yarn acceptance --grep <@tag>
```

## Launch Report

```bash
    yarn acceptance:report
```
