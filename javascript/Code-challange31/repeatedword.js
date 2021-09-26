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
  function repeatedWord(str) {
    let story = str.toLowerCase().split(" ");
    let hashMap = new Hashmap(story.length);
    for (let i = 0; i < story.length; i++) {
      if (!hashMap.contain(story[i])) {
        hashMap.add(story[i], story[i]);
      } else {
        return story[i];
      }
    }
    return null;
  }
  
  let para ="Once upon a time, there was a brave princess who...";
  let para2="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
  
  console.log("paragraph 1: ",repeatedWord(para));
  console.log("paragraph 2: ",repeatedWord(para2));
  

  