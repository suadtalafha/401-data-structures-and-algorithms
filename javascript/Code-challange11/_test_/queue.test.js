"use strict";

let PesudoQueues = require("../pseudoQueue");


describe("Queue", () => {
   
      it("Can successfully enqueue multiple values into a queue", () => {
        let newQueue = new PesudoQueues();
        newQueue.enqueue(5);
        newQueue.enqueue(6);
        expect(newQueue.stack1.isEmpty()).toEqual(false);
        expect(newQueue.stack2.isEmpty()).toEqual(true);
      });
      it("Can successfully dequeue out of a queue the expected value", () => {
        let newQueue = new PesudoQueues();
        newQueue.enqueue(2);
        newQueue.enqueue(3);
        newQueue.enqueue(4);
       
        expect(newQueue.dequeue()).toEqual(2);
      });
    
      it("Can successfully empty a queue after multiple dequeues", () => {
        let newQueue = new PesudoQueues();
        newQueue.enqueue(5);
        newQueue.enqueue(6);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.stack1.top).toBeNull();
        expect(newQueue.stack2.top).toBeNull();
      });
      it("Can successfully instantiate an empty queue", () => {
        let newQueue = new PesudoQueues();
        expect(newQueue instanceof PesudoQueues).toBeTruthy();
      });
      it("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue = new PesudoQueues();
        expect((newQueue.dequeue())).toEqual('stack is empty');
      });

     

});