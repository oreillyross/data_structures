// const linkedList = require('../structures/singlyLinkedList');

// const list = new linkedList.LinkedList();
// console.log(list.isEmpty())

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  addToTail(item) {
    const newNode = {
      value: item,
      next: null,
    };

    if (this._length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this._length++;
  }

  removeFromHead() {
    if (this._length === 0) {
      return undefined;
    }

    const itemToReturn = this.head.value;
    this.head = this.head.next;
    this._length--;
    return itemToReturn;
  }

  get size() {
    return this._length;
  }
}
