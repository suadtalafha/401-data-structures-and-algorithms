'use strict'
let LinkedList = require('../linked-list-kth');

describe('LinkedList Module()', ()=> {
    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
    });

    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });


    it("returns the value ", () => {
        const list = new LinkedList();
        list.append("1");
        list.append("3");
        list.append("8");
        list.append("2");
    
        expect(list.kthFromEnd(0)).toEqual("2");
        expect(list.kthFromEnd(2)).toEqual("3");
        expect(list.kthFromEnd(10)).toEqual(
          "the index requir is not exist"
        );
        expect(list.kthFromEnd(-5)).toEqual("there is no linke list");
      });'use strict'
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
    
      it("k > length ", () => {
        const list = new LinkedList();
        list.append("1");
        list.append("3");
        list.append("8");
        list.append("2");
    
        expect(list.kthFromEnd(0)).toEqual("2");
        expect(list.kthFromEnd(2)).toEqual("3");
        expect(list.kthFromEnd(10)).toEqual(
          "the index requir is not exist"
        );
        expect(list.kthFromEnd(-5)).toEqual("there is no linke list");
        
      });
});