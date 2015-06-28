if ('function' === typeof importScripts) {
    importScripts('serviceworker.js');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Scripts/Service/sw.js').then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}