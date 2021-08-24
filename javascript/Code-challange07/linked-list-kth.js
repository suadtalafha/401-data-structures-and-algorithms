'use strict'
const Node=require('./node');
class LinkedList{
    constructor(){
        this.head=null
    }

    append(value) {
        // create a node for this value
        let newNode = new Node(value);
       
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // reached the end of the linkedlist
            currentNode.next = newNode;
        }
    }


    kthFromEnd(k) {
        if(!this.head){
            return 'there is no linke list'
        }
        
          let length = 0;
          
          
          let current = this.head;

          while (current.next) {
            length++;
            current = current.next;
          }
          if (k > length) {
            return 'the index requir is not exisst';
          }
    
          if (k < 0) {
            return "there is no linke list";
          }
    
          let require = length - k;
          let incremnt = 0;
         current=this.head
          while (current.next) {
            incremnt++;
            current = current.next;
            if (incremnt == require) {
              return current.value;
            }
          
        }
      }

}


module.exports = LinkedList;