# MangoPay REST SDK

This package is not official, it's a personal work but you can use it freely.

**This is currently a WORK IN PROGRESS, so expect it to contain bugs and lack features**. 

### Installation

To install the package, execute this command in the root of your project :
```
meteor add jalik:mangopay
```

If later you want to remove the package :
```
meteor remove jalik:mangopay
```

### Authentication

#### Basic authentication

Execute once the code below using your own credentials and before any call to the API.

```js
MangoPaySDK.authenticate(clientId, clientPass);
```

### Users

#### Create a natural user

```js
MangoPaySDK.user.create(new MangoPaySDK.user.NaturalUser({
    Birthday: timestamp,
    Nationality: 'FR',
    CountryOfResidence: 'FR',
    Email: 'buyer@gmail.com',
    FirstName: 'Big',
    LastName: 'Buyer'
}), function (err, user) {
    if (err || !user) {
        console.error(err);
    } else {
        console.log(user);
    }
});
```

#### Create a legal user

```js
MangoPaySDK.user.create(new MangoPaySDK.user.LegalUser({
    Email: 'seller@gmail.com',
    Name: 'Seller',
    LegalPersonType: MangoPaySDK.user.personTypes.BUSINESS,
    LegalRepresentativeFirstName: 'Big',
    LegalRepresentativeLastName: 'Seller',
    LegalRepresentativeBirthday: timestamp,
    LegalRepresentativeNationality: 'FR',
    LegalRepresentativeCountryOfResidence: 'FR'
}), function (err, user) {
    if (err || !user) {
        console.error(err);
    } else {
        console.log(user);
    }
});
```

#### Update a user

```js
MangoPaySDK.user.update(userId, {
    Email: 'newmail@gmail.com'
}, function (err, user) {
    if (err || !user) {
      console.error(err);
    } else {
      console.log(user);
    }
});
```

#### Fetch a user

```js
MangoPaySDK.user.fetch(userId, function (err, user) {
    if (err || !user) {
        console.error(err);
    } else {
        console.log(user);
    }
});
```

#### List all users

```js
MangoPaySDK.user.list(function (err, list) {
    if (err || !list) {
        console.error(err);
    } else {
        console.log(list);
    }
});
```

#### List bank accounts of a user

```js
MangoPaySDK.user.bankAccounts(userId, function (err, list) {
    if (err || !list) {
      console.error(err);
    } else {
      console.log(list);
    }
});
```

#### List cards of a user

```js
MangoPaySDK.user.cards(userId, function (err, list) {
    if (err || !list) {
      console.error(err);
    } else {
      console.log(list);
    }
});
```

#### List KYC documents of a user

```js
MangoPaySDK.user.documents(userId, function (err, list) {
    if (err || !list) {
      console.error(err);
    } else {
      console.log(list);
    }
});
```

#### List transactions of a user

```js
MangoPaySDK.user.transactions(userId, function (err, list) {
    if (err || !list) {
      console.error(err);
    } else {
      console.log(list);
    }
});
```

#### List wallets of a user

```js
MangoPaySDK.user.wallets(userId, function (err, list) {
    if (err || !list) {
      console.error(err);
    } else {
      console.log(list);
    }
});
```

### Wallets

#### Create a wallet

```js
MangoPaySDK.wallet.create(new MangoPaySDK.wallet.Wallet({
    Owners: [userId],
    Currency: 'EUR',
    Description: 'Buyer\'s wallet'
}), function (err, wallet) {
    if (err || !wallet) {
       console.error(err);
    } else {
       console.log(wallet);
    }
});
```

#### Update a wallet

```js
MangoPaySDK.wallet.update(walletId, {
    Description: 'Seller\'s wallet'
}, function (err, wallet) {
    if (err || !wallet) {
       console.error(err);
    } else {
       console.log(wallet);
    }
});
```

#### Fetch a wallet

```js
MangoPaySDK.wallet.fetch(walletId, function (err, wallet) {
    if (err || !wallet) {
       console.error(err);
    } else {
       console.log(wallet);
    }
});
```

#### List transactions of a wallet

```js
MangoPaySDK.wallet.transactions(function (err, list) {
    if (err || !list) {
        console.error(err);
    } else {
        console.log(list);
    }
});
```

### Transfers

#### Create a transfer

```js
MangoPaySDK.transfer.create(new MangoPaySDK.transfer.Transfer({
    AuthorId: authorId,
    DebitedWalletID: fromWalletId,
    CreditedWalletID: toWalletId,
    DebitedFunds: {Currency: "EUR", Amount: 50},
    Fees: {Currency: "EUR", Amount: 10}
}), function (err, transfer) {
    if (err || !transfer) {
       console.error(err);
    } else {
       console.log(transfer);
    }
});
```

### Cards

#### Create a card

```js
MangoPaySDK.card.create(new MangoPaySDK.card.Card({
    Currency: 'EUR',
    CardType: MangoPaySDK.card.type.VISA_MASTERCARD,
    UserId: userId,
    CardNumber: 3569990000000140,
    CardExpirationDate: 1016,
    CardCvx: 123
}), function (err, cardRegistration) {
    if (err || !cardRegistration || cardRegistration.Status !== MangoPaySDK.cardRegistraton.status.VALIDATED) {
        console.error(err);
    } else {
        console.log(cardRegistration.CardId);
    }
});
```

#### Update a card

```js
MangoPaySDK.card.update(cardId, {
    Active: false
}, function (err, card) {
    if (err || !card) {
        console.error(err);
    } else {
        console.log(card);
    }
});
```

#### Fetch a card

```js
MangoPaySDK.card.fetch(cardId, function (err, card) {
    if (err || !card) {
        console.error(err);
    } else {
        console.log(card);
    }
});
```

### Events

#### List all events

```js
MangoPaySDK.event.list(function (err, list) {
    if (err || !list) {
        console.error(err);
    } else {
        console.log(list);
    }
});
```

### Payins

#### Create a bank wire payin

```js
MangoPaySDK.payin.create(new MangoPaySDK.payin.BankWire({
    AuthorId: authorId,
    CreditedWalletId: walletId,
    DeclaredDebitedFunds: {
        Currency: 'EUR',
        Amount: 5000
    },
    DeclaredFees: {
        Currency: 'EUR',
        Amount: 0
    }
}), function (err, payin) {
    if (err || !payin) {
        console.error(err);
    } else {
        console.log(payin);
    }
});
```

#### Create a direct debit payin

```js
MangoPaySDK.payin.create(new MangoPaySDK.payin.DirectDebit({
    AuthorId: 8837505,
    CreditedWalletId: 8837797,
    ReturnUrl:'https://www.domain.com/return',
    Culture:'FR',
    DebitedFunds: {
        Currency: 'EUR',
        Amount: 5000
    },
    DeclaredFees: {
        Currency: 'EUR',
        Amount: 0
    }
}), function (err, payin) {
    if (err || !payin) {
        console.error(err);
    } else {
        console.log(payin);
    }
});
```

#### Create a pre-authorized payin

```js
MangoPaySDK.payin.create(new MangoPaySDK.payin.PreAuthorizedAmount({
    AuthorId: authorId,
    PreauthorizationId: preAuthId,
    CreditedWalletId: walletId,
    DebitedFunds: {
        Currency: 'EUR',
        Amount: 5000
    },
    Fees: {
        Currency: 'EUR',
        Amount: 0
    }
}), function (err, payin) {
    if (err || !payin) {
        console.error(err);
    } else {
        console.log(payin);
    }
});
```

#### Create a tokenized card payin

```js
MangoPaySDK.payin.create(new MangoPaySDK.payin.TokenizedCard({
    AuthorId: authorId,
    CardId: cardId,
    CreditedWalletId: walletId,
    SecureModeReturnURL: 'https://www.domain.com/return',
    DebitedFunds: {
        Currency: 'EUR',
        Amount: 5000
    },
    Fees: {
        Currency: 'EUR',
        Amount: 0
    }
}), function (err, payin) {
    if (err || !payin) {
        console.error(err);
    } else {
        console.log(payin);
    }
});
```

#### Create a web form payin

```js
MangoPaySDK.payin.create(new MangoPaySDK.payin.WebForm({
    AuthorId: authorId,
    CreditedWalletId: walletId,
    ReturnUrl: 'https://www.domain.com/return',
    Culture: 'FR',
    CardType: MangoPaySDK.card.type.VISA_MASTERCARD,
    DebitedFunds: {
        Currency: 'EUR',
        Amount: 5000
    },
    Fees: {
        Currency: 'EUR',
        Amount: 1000
    }
}), function (err, payin) {
    if (err || !payin) {
        console.error(err);
    } else {
        console.log(payin);
    }
});
```


### Payouts

#### Create a bank wire payout

```js
MangoPaySDK.payout.create(new MangoPaySDK.payout.BankWire({
    AuthorId: authorId,
    BankWireRef: 'Reward',
    BankAccountId: bankAccountId,
    DebitedWalletId: walletId,
    DebitedFunds: {
        Currency: 'EUR',
        Amount: 6000
    },
    Fees: {
        Currency: 'EUR',
        Amount: 1000
    }
}), function (err, payout) {
    if (err || !payout) {
        console.error(err);
    } else {
        console.log(payout);
    }
});
```

#### Fetch a payout

```js
MangoPaySDK.payout.fetch(payoutId, function (err, payout) {
    if (err || !payout) {
        console.error(err);
    } else {
        console.log(payout);
    }
});
```

### Hooks

#### Create a hook

```js
MangoPaySDK.hook.create(new MangoPaySDK.hook.Hook({
    Url: 'http://www.domain.com/myhook',
    EventType: MangoPaySDK.hook.eventType.PAYIN_NORMAL_CREATED
}), function (err, hook) {
    if (err || !hook) {
        console.error(err);
    } else {
        console.log(hook);
    }
});
```

#### Update a hook

```js
MangoPaySDK.hook.update(hookId, {
    Tag: 'edited'
}, function (err, hook) {
    if (err || !hook) {
        console.error(err);
    } else {
        console.log(hook);
    }
});
```

#### Fetch a hook

```js
MangoPaySDK.hook.fetch(hookId, function (err, hook) {
    if (err || !hook) {
        console.error(err);
    } else {
        console.log(hook);
    }
});
```

#### List all hooks

```js
MangoPaySDK.hook.list(function (err, list) {
    if (err || !list) {
        console.error(err);
    } else {
        console.log(list);
    }
});
```
