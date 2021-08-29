"use strict";


let Stack = require("../stack");

describe("Stack", () => {
  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
  });
  it("Can successfully push onto a stack", () => {
    let newStack = new Stack();
    newStack.push(5);
    expect(newStack.top.value).toEqual(5);
    expect(newStack.top.next).toBeNull();
  });
  it("Can successfully push multiple values onto a stack", () => {
    let newStack = new Stack();
    newStack.push(5);
    newStack.push(6);
    expect(newStack.top.value).toEqual(6);
    expect(newStack.top.next.value).toEqual(5);
  });
  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(3);
    expect(newStack.pop()).toEqual(3);
    expect(newStack.top.value).toEqual(1);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });
  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.peek();
    expect(newStack.top.value).toEqual(2);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    let newStack = new Stack();
    
    expect((newStack.pop())).toEqual('stack is empty')
  });
  it("isEmpty ", () => {
    let newStack = new Stack();
    
    expect((newStack.isEmpty())).toEqual(true)
    newStack.push(1)
    expect((newStack.isEmpty())).toEqual(false)
  });


});