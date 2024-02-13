// Import the openDB function from the idb library
import { openDB } from 'idb';

// Initialize the IndexedDB database
const initializeDatabase = async () =>
  openDB('jate', 1, {
    // Upgrade logic for the database schema
    upgrade(db) {
      // Check if the 'jate' object store already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create the 'jate' object store with a keyPath of 'id' and auto-incrementing IDs
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Accepts content and adds it to the database
export const putDb = async (content) => {
  // Open the 'jate' database with version 1
  const db = await openDB('jate', 1);
  // Start a read-write transaction on the 'jate' object store
  const transaction = db.transaction('jate', 'readwrite');
  // Access the 'jate' object store
  const store = transaction.objectStore('jate');
  // Put the content into the 'jate' object store with an auto-incrementing ID
  const request = store.put({ id: 1, value: content });
  // Wait for the put operation to complete and log the result
  const result = await request;
  console.log('🚀 - Data saved to the database.', result);
};

// Retrieve all content from the database
export const getDb = async () => {
  // Open the 'jate' database with version 1
  const db = await openDB('jate', 1);
  // Start a read-only transaction on the 'jate' object store
  const transaction = db.transaction('jate', 'readonly');
  // Access the 'jate' object store
  const store = transaction.objectStore('jate');
  // Get all records from the 'jate' object store
  const request = store.getAll();
  // Wait for the getAll operation to complete and log the result
  const result = await request;
  console.log('Data retrieved from the database.', result);
  return result.value;
};

// Initialize the 'jate' database when the module is imported
initializeDatabase();