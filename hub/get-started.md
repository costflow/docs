---
title: Get Started
lang: en-US
---

# Get Started with Costflow Hub

### 1. Sign up if you don't have an account

👉 [https://hub.costflow.io/signup](https://hub.costflow.io/signup)

### 2. Say hello

Once you signed up, you can input `Hello World` to the box and click the **POST** button. The result will display in a few seconds.

Besides that, **sending messages to our bot** on Telegram is the most common way to create entries. You can find the bot address on Dashboard.

All the messages should follow the [Costflow Syntax](/syntax/).

### 3. Update your settings

👉 [https://hub.costflow.io/settings](https://hub.costflow.io/settings)

### 4. Connect Dropbox

![Costflow Hub screenshot](/img/costflow-hub-screenshot-2.png)

You can connect your Dropbox by clicking the Cloud Storage on the Settings page, and then you will be redirected to Dropbox website to finish the authorization.

Costflow Hub will generate a folder named Costflow under the Dropbox Apps folder, the ledger file is generated every month. The file structure:



```
.
└── Dropbox
    └── Apps
        └── Costflow
            └── 2019
                ├── 07.bean
                └── 08.bean
```

You should use [Beancount include command](https://docs.google.com/document/d/1wAMVrKIA2qtRGmoVDSUBJGmYZSygUaR0uOMW1GV3YE0/edit#heading=h.86lelow4097r) to link these files to your main ledger file. For example:



```
include "/System/Volumes/Data/Users/leplay/Dropbox/Apps/Costflow/index.bean"
```

You can do it later if you want to know more about this product. If no Cloud Service is connected, the output entries will not be synced to your ledger file, but they can be found on Costflow Hub Dashboard,  you can copy them to your ledger file manually.

### 5. Update Replacements

The Replacements can boost your productivity, a lot. With Replacements, you don't need to type `Assets:US:BofA:Checking` every time, you can type `bofa` instead. Here is an example Replacements:



```
{
    "boc": "Assets:CN:BOC",
    "bofa": "Assets:US:BofA:Checking",
    "cmb": "Liabilities:CreditCard:CMB",
    "eob": "Equity:Opening-Balances",
    "food": "Expenses:Food",
    "phone": "Expenses:Home:Phone",
    "rent": "Expenses:Home:Rent",
    "rx": "Assets:Receivables:X",
    "ry": "Assets:Receivables:Y"
}
```

Maintaining the Replacements is a long process. You'll get more ideas in your daily use.

### 6. Master the Syntax

The rules of parsing your messages into accounting entries are [Costflow Syntax](/syntax/). Make sure you master it.

---

That's all. After finish these steps, you can enjoy the whole new experience of plain text accounting. If you have any questions, feel free to [contact us](https://www.costflow.io/contact/).

 

