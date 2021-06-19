class Queue {
  // implement the Queue using a hash table
  constructor() {
    this._hash = {};
    this._firstIndex = 0;
    this._lastIndex = 0;
  }
  enqueue(item) {
    this._hash[this._lastIndex] = item;
    this._lastIndex++;
  }

  dequeue() {
    if (this.size() === 0) {
      console.warn("Queue is empty");
      return undefined;
    }
    const itemToReturn = this._hash[this._firstIndex];
    delete this._hash[this._firstIndex];
    this._firstIndex++;
    return itemToReturn;
  }

  size() {
    return this._lastIndex - this._firstIndex;
  }
}

module.exports = { Queue };
