---
title: Overview
lang: en-US
---

## Overview

[Costflow](https://www.costflow.io/) is a productivity tool for plain text accounting. By connecting messaging apps with cloud storage services, it can be much easier to create new postings, especially on mobile devices. You can get more details in this post.

Costflow Syntax is the rule for parsing plain text to the accounting tools formats, such as Beancount, Ledger and hledger, etc. It’s the core part of Costflow.

Costflow Syntax can be used with:
- [Costflow Hub](https://hub.costflow.io/), our main product, currently in beta. Keep a plain text accounting in your messaging apps, no matter it's on desktop or mobile.Try it here.
- [Costflow CLI](/cli/). Create new postings in terminal easily.
- [Costflow Playground](https://playground.costflow.io/), a place you can try Costflow Syntax in your browser.
- [Costflow Parser](/parser/), official JavaScript parser for Costflow Syntax, you can build your own product with it.

|                     | Hub (Self-Hosted)         | CLI                                    | Playground          |
| ------------------- | ----------------------------------------------- | -------------------------------------- | ------------------- |
| Syntax              | ✅                                              | ✅                                      | ✅                   |
| Environment         | Messaging apps.Telegram for now.                | Terminal                               | Browser             |
| Save to ledger file | ✅             | ✅                                      | ❌                   |
| Through our server  | ❌                                               | ❌<br />Maybe an option in the future.  | ❌                   |
| Working on mobile   | ✅<br />Every platform has Telegram app.    | ❓<br />Depends on your system.         | ✅                   |
| Open-source         | ❌                                               | ✅                                      | ✅                   |
| Price               | One-Time.           | Free                                   | Free                |
| Use case            | Bookkeeping on any device, at any time. | Create new postings on desktop easily. | Try Costflow Syntax |

Check out [Costflow Syntax](/syntax/).
