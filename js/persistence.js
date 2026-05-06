var Persistence = {
    ADMIRAL_KEY: 'sto-aso-admirals',

    saveAdmirals: function(admirals) {
        try {
            var data = admirals.serialize();
            localStorage.setItem(Persistence.ADMIRAL_KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Error saving admirals:', e);
            return false;
        }
    },

    loadAdmirals: function() {
        try {
            var data = localStorage.getItem(Persistence.ADMIRAL_KEY);
            if (data) {
                return JSON.parse(data);
            }
        } catch (e) {
            console.error('Error loading admirals:', e);
        }
        return null;
    },

    saveIcon: function(shipId, imageDataUrl) {
        return new Promise(function(resolve, reject) {
            try {
                var request = indexedDB.open('sto-aso-icons', 1);
                request.onupgradeneeded = function(event) {
                    var db = event.target.result;
                    if (!db.objectStoreNames.contains('icons')) {
                        db.createObjectStore('icons', { keyPath: 'id' });
                    }
                };
                request.onsuccess = function(event) {
                    var db = event.target.result;
                    var transaction = db.transaction(['icons'], 'readwrite');
                    var store = transaction.objectStore('icons');
                    store.put({ id: shipId, data: imageDataUrl });
                    transaction.oncomplete = function() { resolve(true); };
                    transaction.onerror = function() { reject(false); };
                };
                request.onerror = function() { reject(false); };
            } catch (e) {
                reject(false);
            }
        });
    },

    getIcon: function(shipId) {
        return new Promise(function(resolve, reject) {
            try {
                var request = indexedDB.open('sto-aso-icons', 1);
                request.onsuccess = function(event) {
                    var db = event.target.result;
                    if (!db.objectStoreNames.contains('icons')) {
                        resolve(null);
                        return;
                    }
                    var transaction = db.transaction(['icons'], 'readonly');
                    var store = transaction.objectStore('icons');
                    var getRequest = store.get(shipId);
                    getRequest.onsuccess = function() {
                        resolve(getRequest.result ? getRequest.result.data : null);
                    };
                    getRequest.onerror = function() { resolve(null); };
                };
                request.onerror = function() { resolve(null); };
            } catch (e) {
                resolve(null);
            }
        });
    }
};
