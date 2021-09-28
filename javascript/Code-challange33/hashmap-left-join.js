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
    }}


    function leftJoin(leftHashMap,rightHashMap){
        // itrate over the hash table to check the value
        rightHashMap.map.forEach(bucket=>{
            if (leftHashMap.contain(bucket.head.val[key])) {
                let current=bucket.head;
                // set this condition to check to reach the last value and add the left side 
                while (current.next) {
                   leftHashMap.add(current.val[key],current.val[key]); 
                }
                leftHashMap.add(current.val[key],current.val[key]);
            }
        });
        return leftHashMap;
    }
    
    let left = new HashTable(3);
    let right = new HashTable(3);
    
    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');
    
    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');
    
 