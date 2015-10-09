Package.describe({
    name: 'jalik:mangopay',
    version: '0.1.0',
    author: 'karl.stein.pro@gmail.com',
    summary: 'MangoPay REST SDK',
    homepage: 'https://github.com/jalik/jalik-mangopay',
    git: 'https://github.com/jalik/jalik-mangopay.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use(['base64', 'check', 'http', 'underscore']);
    api.addFiles(['mangopay.js', 'mangopay-http.js'], 'server');
    api.addFiles(['api/bank.js'], 'server');
    api.addFiles(['api/card.js'], 'server');
    api.addFiles(['api/event.js'], 'server');
    api.addFiles(['api/hook.js'], 'server');
    api.addFiles(['api/payin.js'], 'server');
    api.addFiles(['api/payout.js'], 'server');
    api.addFiles(['api/refund.js'], 'server');
    api.addFiles(['api/transfer.js'], 'server');
    api.addFiles(['api/user.js'], 'server');
    api.addFiles(['api/wallet.js'], 'server');
    api.export('MangoPaySDK');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('jalik-mangopay');
    api.addFiles('jalik-mangopay-tests.js');
});
