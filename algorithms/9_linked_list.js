// Список

class LinkedList {
  constructor() {
    this.size = 0; // размер списка
    this.root = null; // корневой элемент
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;

      return true;
    }

    let node = this.root; // для корневого эл

    while (node.next) {
      node = node.next;
    }

    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = []; // массив узлов
    let node = this.root; // поместим текущий узел

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    console.log(result);
  }
}

class Node { // узел
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();
