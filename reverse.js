class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp != null) {
      result += temp.value + " ";
      temp = temp.next;
    }

    return result;
  }
}

const reverse = function(head) {
  let current = head;
  let previous = null;
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
