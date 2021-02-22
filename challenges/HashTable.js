/**
 * 
 * Hash table uses a array as the storage asoppose to a LinkedList which uses an object.
 * 
 * The key to a Hashtable is that is that it allows for all three operations, namely insert, delte and retrieve to be done in constant time.
 * 
 * 
 * 
 */

class HashTable {
  constructor(val) {
    this._storage = [];
    this._tableSize = val
  }

  insert(key, value) {
    const index = this._hash(key, this._tableSize);
    if (!this._storage[index]) this._storage[index] = [];
    this._storage[index].push([key, value])
  }

  remove() {

  }

  retrieve() {

  }

  _hash(str, n) {
    let sum = 0;
    for (let i =0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3
    }

    return sum % n
  }

}

console.log('Here we go!')

const hash = new HashTable(25) 
hash.insert('a', 1);
hash.insert('b', 1);
console.log(hash)

