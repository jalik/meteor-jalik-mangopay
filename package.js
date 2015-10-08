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
    api.use(['check', 'http', 'underscore', 'base64']);
    api.addFiles(['mangopay.js'], 'server');
    api.addFiles(['mangopay-card.js'], 'server');
    api.addFiles(['mangopay-event.js'], 'server');
    api.addFiles(['mangopay-http.js'], 'server');
    api.addFiles(['mangopay-payin.js'], 'server');
    api.addFiles(['mangopay-transfer.js'], 'server');
    api.addFiles(['mangopay-user.js'], 'server');
    api.addFiles(['mangopay-wallet.js'], 'server');
    api.export('MangoPaySDK');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('jalik-mangopay');
    api.addFiles('jalik-mangopay-tests.js');
});
