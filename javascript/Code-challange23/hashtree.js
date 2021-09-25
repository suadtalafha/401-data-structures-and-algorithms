class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// we use linked list to store value
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
    
}

class HashTable {
    constructor(size) {
      this.size = size;
      this.map = new Array(size);
    }
  
    hash(key) {
      return (
        (key.split("").reduce((acc, cur) => {
            // we split the hash to convert it to array and accumlate value using reduce methode 
          return acc + cur.charCodeAt(0);
        }, 0) *
          19) %
        this.size
      );
    }
  
    add(key, val) {
      let hash = this.hash(key);
      console.log(hash);
      if (!this.map[hash]) {
        this.map[hash] = new LinkedList();
        //  add new value to hash table
      }
      let entry = { [key]: val };
      this.map[hash].append(entry);
    }
  
    get(key) {
      let hash = this.hash(key);
  
      if (!this.map[hash]) return "no values in the table";
  
      let index = this.map[hash];
      let current = index.head;
      if (current.val[key]) return current.val[key];
  
      while (current.next) {
        current = current.next;
        if (current.val[key]) return current.val[key];
      }
    }
  
    contain(key) {
      let hash = this.hash(key);
      if (!this.map[hash]) return false;
  
      let index = this.map[hash];
  
      if (!index.head) {
        return false;
      } else {
        let current = index.head;
        if (current.val[key]) return true;
  
        while (current.next) {
          current = current.next;
          if (current.val[key]) return true;
        }
      }
    }
  }
  