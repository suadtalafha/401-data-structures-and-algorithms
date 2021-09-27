"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }}
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    // root left right 
    preOrder() {
      let result = [];
      let travers = (node) => {
        result.push(node.value);
        if (node.left) {
          travers(node.left);
        }
        if (node.right) {
          travers(node.right);
        }
      };
      travers(this.root);
      return result;
    }

  // left root right 
    inOrder() {
      let result = [];
      let travers = (node) => {
        if (node.left) {
          travers(node.left);
        }
        result.push(node.value);
        if (node.right) {
          travers(node.right);
        }
      };
      travers(this.root);
      return result;
    }
  // left right root 
    postOrder() {
      let result = [];
      let travers = (node) => {
        if (node.left) {
          travers(node.left);
        }
        if (node.right) {
          travers(node.right);
        }
        result.push(node.value);
      };
      travers(this.root);
      return result;
    }
  // find maximum value in tree
    findMaximumValue() {
      if (!this.root) {
        return "tree is empty";
      }
      let maxNumber = this.root.value;
      let travers = (node) => {
        if (node.left) travers(node.left);
        if (node.right) travers(node.right);
        if (node.value > maxNumber) maxNumber = node.value;
      };
  
      travers(this.root);
      return maxNumber;
    }
  
    breadthFirstSearch(tree) {
      if (!this.root) {
        return "empty";
      }
      let queue = [tree];
      let result = [];
      while (queue.length > 0) {
        let item = queue.shift();
        let value = item.value;
        console.log(value);
        result.push(value);
        if (item.left == null && item.right == null) {
          continue;
        }
        if (item.left != null) {
          queue.push(item.left);
        }
  
        if (item.right != null) {
          queue.push(item.right);
        }
      }
      return result;
    }
  
    sameStructure(tree1,tree2) {
      let count1=0;
      let count2=0;
      let flag=false;
      if (!tree1 || !tree2) {
          return flag;
      }
      let treverse=(tree1)=>{
        if(tree1.left==null && tree1.right==null){
          count1++;
        }
        if(tree1.left != null){
          treverse(tree1.left);
        }
        if(tree1.right != null){
          treverse(tree1.right);
        }
      }
  
      let treverse2=(tree1)=>{
        if(tree1.left==null && tree1.right==null){
          count2++;
        }
        if(tree1.left != null){
          treverse2(tree1.left);
        }
        if(tree1.right != null){
          treverse2(tree1.right);
        }
      }
      treverse(tree1)
      treverse2(tree2)
  
      if (count1 == count2) {
        flag =true;
      }
      return flag;
    }
  // insert common in two trees 
    treeIntersection(firstTree, secondTree) {
      if (!firstTree || !secondTree) throw new Error('there is no root ');
      let array = [];
      const traverse = (node1, node2) => {
        if (node1 && node2) {
          if (node1.value === node2.value) {
            array.push(node1.value);
          }
          if (node1.left, node2.left) traverse(node1.left, node2.left);
          if (node1.right, node2.right) traverse(node1.right, node2.right);
        }
        return array;
      }
      traverse(firstTree, secondTree);
      return array;
    }
  }
  





