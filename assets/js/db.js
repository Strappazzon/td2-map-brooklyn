const DB_NAME = 'TD2MapBrooklyn';
const DB_STORE = 'markerNotes';
const DB_VERSION = 1;

let db = null;

function initDatabase() {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const REQUEST = indexedDB.open(DB_NAME, DB_VERSION);

    REQUEST.onerror = () => reject(REQUEST.error);
    REQUEST.onsuccess = () => {
      db = REQUEST.result;
      resolve(db);
    };

    REQUEST.onupgradeneeded = (e) => {
      const NEW_DB = e.target.result;

      if (!NEW_DB.objectStoreNames.contains(DB_STORE)) {
        NEW_DB.createObjectStore(DB_STORE, { keyPath: 'markerId' });
      }
    };
  });
}

async function getNote(markerId) {
  const DATABASE = await initDatabase();

  return new Promise((resolve, reject) => {
    const TRANSACTION = DATABASE.transaction(DB_STORE, 'readonly');
    const STORE = TRANSACTION.objectStore(DB_STORE);
    const REQUEST = STORE.get(markerId);

    REQUEST.onerror = () => reject(REQUEST.error);
    REQUEST.onsuccess = () => resolve(REQUEST.result?.noteText || '');
  });
}

async function saveNote(markerId, noteText) {
  const DATABASE = await initDatabase();

  return new Promise((resolve, reject) => {
    const TRANSACTION = DATABASE.transaction(DB_STORE, 'readwrite');
    const STORE = TRANSACTION.objectStore(DB_STORE);
    const REQUEST = STORE.put({ markerId, noteText });

    REQUEST.onerror = () => reject(REQUEST.error);
    REQUEST.onsuccess = () => resolve(true);
  });
}

async function deleteNote(markerId) {
  const DATABASE = await initDatabase();

  return new Promise((resolve, reject) => {
    const TRANSACTION = DATABASE.transaction(DB_STORE, 'readwrite');
    const STORE = TRANSACTION.objectStore(DB_STORE);
    const REQUEST = STORE.delete(markerId);

    REQUEST.onerror = () => reject(REQUEST.error);
    REQUEST.onsuccess = () => resolve(true);
  });
}

window.markerNotesDatabase = { getNote, saveNote, deleteNote, initDatabase };
