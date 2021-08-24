'use strict'
const Node=require('./node');
class LinkedList{
    constructor(){
        this.head = null;
    this.tail = null;
    this.length = 0;
        
    }
  
      append(value) {
        let newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
        } else {
          let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
          this.length++;
        }
      }

    toString(){
        let current=this.head;
        if(!current){
            throw new Error('there is an error linked list not exisit')
        }

        let form="";
        while(current){
            form+=`{${current.value}}-->`;
            current=current.next;
        }
        return (form +='null')
    }

    zipLists(list1, list2){

        let newlist= new LinkedList();
        if (!list1.head) {
          return list2
        }
    
        if (!list2.head) {
          return list1
        }
    
        if (!list1.head && !list2.head) {
          return console.log('List is empty, please check your input');
        }
    
        newlist.append(list1.head.value);
        newlist.append(list2.head.value);
        let currentL1 = list1.head;
        let currentL2 = list2.head;
        let x;
    
        if (list1.length>=list2.length) {
          x = list1.length
        }else{
           x = list2.length
        }
        for (let i = 0; i <x; i++) {
    
          if (currentL1.next) {
            newlist.append(currentL1.next.value)
            currentL1=currentL1.next
          }
    
          if (currentL2.next) {
            newlist.append(currentL2.next.value)
            currentL2=currentL2.next
          }
        }
    
    
        return newlist
      }

    
    

}


module.exports = LinkedList;