"use strict";

const HashTable = require("../hashTable");

describe("hash table", () => {
  it("Adding key and value to hashtable", () => {
    let hashtable = new HashTable(5);
    let expected = "suad";
    hashtable.add("name", "suad");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
  });

  it("Retern based on key stored", () => {
    let hashtable = new HashTable(5);
    let expected = "suad";
    hashtable.add("name", "suad");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
    expect(hashtable.get("helo")).toEqual("no values in the table");
  });

  it("deal with collision", () => {
    let hashtable = new HashTable(5);
    hashtable.add("name", "suad");
    hashtable.add("mean", "husam");

    let operation = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.contain("mean")).toBe(true);
    expect(operation).toEqual("husam");
  });

  it('return the info from bucket of hash table',()=>{
    let hashtable = new HashTable(5);
    hashtable.add("name", "suad");
    hashtable.add("mean", "husam");

    let vala = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.get("mean")).toBe('husam');
    expect(vala).toEqual("husam");
  });

  it(' hash a key to an in-range value',()=>{
    let hashtable = new HashTable(5);
    let min=0;
    let max=4;
    let key='suad';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  })
});