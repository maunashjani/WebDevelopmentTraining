if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available
                            if (confirm("New update available. Reload to update?")) {
                                window.location.reload();
                            }
                        }
                    }
                };
            };
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
