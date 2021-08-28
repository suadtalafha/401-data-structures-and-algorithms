"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
    } else {
      let temp = this.front;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  dequeue() {
    try {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    } catch {
      return "queue is empty";
    }
  }

  peek() {
    try {
      return this.front.value;
    } catch {
      return "queue is empty";
    }
  }
  isEmpty() {
    if (this.front) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Queue;