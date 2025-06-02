import { openDB } from 'idb';

// Initialize the Database

const dbName = "MyDB";
const storeName = 'wishlist'

// Open a Database and creat Object Store(if doesn't exist)

// async function openDB(dbName, storeName) {
//   return new Promise((resolve, reject)=>{
//     const request = indexedDB.open(dbName);

//     request.onupgradeneeded = (event)=>{
//       const db = event.target.result;
//       db.createObjectStore(storeName, {keyPath: 'id'})
//     }

//     request.onsuccess = (event)=>{
//       resolve(event.target.result)
//     }

//     request.onerror = (event)=>{
//       reject(event.target.result)
//     }

//   })
// }

const DB_NAME = 'anime-wishlist';
const STORE_NAME = 'wishlist';

// Open or create the database
export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'mal_id' }); // unique id
      }
    },
  });
};

// Add anime to wishlist
export const addToWishlist = async (anime) => {
  const db = await initDB();
  await db.put(STORE_NAME, anime);
};

// Get all wishlist items
export const getWishlist = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};

// Remove anime by ID
export const removeFromWishlist = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};

// Check if anime is already in wishlist
export const isInWishlist = async (id) => {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
};
