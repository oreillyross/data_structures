/*
In order to write a Singly Linked List in Javascript one needs two classes.

1. Node class, with two properties data and pointer (nextElement)
2. LinkedList class

Primary operations of a LinkedList include the following 6 operations:

* insert at Tail, passing the data
* insert at head, passing the data
* delete(data)
* deleteAtHead()
* search(data)
* isEmpty() A helper function useful for other   operations

*/

/* */
class Node {
  /* pass in the value to be stored and set the next pointer to null*/
  constructor(data) {
    this.data = data;
    this.nextElement = null;

  }
}

/* The key property on this class is the head because that is our entry opint into the LinkedList*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return (this.head === null)
  }
}

module.exports = {Node, LinkedList}