# Costflow Parser

Costflow Parser is a library for parsing plain text to Beancount/Ledger/hledger formats. Made by [Costflow](https://www.costflow.io/).


## Install

```sh
npm install costflow
```


## Example

```javascript
const costflow = require('costflow')

const config = {
    "mode": "beancount",
    "currency": "USD",
    "timezone": "America/Whitehorse",
    "tag": "#costflow",
    "replacement": {
        "eob": "Equity:Opening-Balances",
        "bofa": "Assets:US:BofA:Checking",
        "rx": "Assets:Receivables:X",
        "ry": "Assets:Receivables:Y",
        "boc": "Assets:CN:BOC",
        "cloud": "Expenses:Cloud",
        "cmb": "Liabilities:CreditCard:CMB",
        "food": "Expenses:Food",
        "phone": "Expenses:Home:Phone",
        "rent": "Expenses:Home:Rent",
        "subscription": "Expenses:Subscriptions",
        "visa": "Liabilities:CreditCard:Visa"
    },
    "formula": {
        "☕️": "@Leplays ☕️ {{ amount }} Liabilities:CreditCard:Visa > Expenses:Coffee",
        "c2f": "{{ pre }} cmb > food",
        "gcp": "@Google {{ amount }} USD visa > cloud",
        "spotify": "@Spotify 15.98 USD visa > subscription"
    },
    "alphavantage": null,
    "indent": 2,
    "lineLength": 50
}

costflow.parse('@Verizon 59.61 bofa > phone', config).then(function (response) {
  console.log(response)
})

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function test() {
  try {
    const response = await costflow.parse('@Verizon 59.61 bofa > phone', config)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```



## Config

Check [Costflow Syntax](https://docs.costflow.io/costflow-syntax/en#general-rules) docs for more information.



```json
{
  // "mode" is the format that parser will output. Only "beancount" is available in current syntax version.
  "mode": "beancount",

  // "currency" will be applied when currency/commodity not found.
  "currency": "USD",

  // "timezone" should be one of IANA-specified zones.
  // You can get your timezone by running
  // Intl.DateTimeFormat().resolvedOptions().timeZone
  // in your browser console.
  "timezone": "America/Whitehorse",

  // "tag" will be applied to every transaction.
  "tag": "#costflow",
  
  // "link" will be applied to every transaction.
  "link": "^trip",

  // The keys in "replacement" will be replaced with values in transactions.
  "replacement": {
    "aapl": "Assets:ETrade:AAPL",
    "bofa": "Assets:US:BofA:Checking",
    "phone": "Expenses:Home:Phone",
  },

  // Formula, added on Syntax v0.3. Get more info on https://docs.costflow.io/syntax/
  "formula": {
    "☕️": "@Leplays ☕️ {{ amount }} Liabilities:CreditCard:Visa > Expenses:Coffee",
    "c2f": "{{ pre }} cmb > food",
    "gcp": "@Google {{ amount }} USD visa > cloud",
    "spotify": "@Spotify 15.98 USD visa > subscription"
  },

  // Insert time to every transaction, the value is the position to insert.
  "insertTime": "metadata",

  // "alphavantage" is for getting the exchange rates or stock price. Get your key here https://www.alphavantage.co/support/
  "alphavantage": "YOUR_KEY_HERE",

  // "indent" is the length before account name in transactions.
  "indent": 2,

  // "lineLength" is the length before the commodity (include) in transactions.
  "lineLength": 60
}
```

## Open Source

[https://github.com/costflow/parser](https://github.com/costflow/parser)