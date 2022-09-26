// const linkedList = require('../structures/singlyLinkedList');


// const list = new linkedList.LinkedList();
// console.log(list.isEmpty())


class LinkedList {
  constructor(value) {
    this.head = {value, next: null};
    this.tail = this.head;
  }

  isHead(node) {
    return node === this.head;
  }

  isTail(node) {
    return node === this.tail;
  }

  insert(value) {
    const node = {value, next: null}
    this.tail.next = node;
    this.tail = node;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
   
    return currentNode.value === value
  }



  removeTail() {
    // loop and find the node before the tail!
    // node.next === this.tail
    let currentNode = this.head
    while(currentNode.next  !== this.tail) {
       currentNode = currentNode.next;
    }
    // when it breaks out of the while loop the  currentNode.next is the tail.
    currentNode.next = null;
    this.tail = currentNode;
  }

}

function removeNext(list, prevNode) {

}

const myList = new LinkedList(1);

// console.log(myList)

myList.insert(2)
 console.log(myList)

myList.insert(3)

myList.removeTail();
console.log(myList)

console.log(myList.contains(4))
