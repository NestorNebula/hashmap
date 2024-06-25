# hashmap

## Description

This package contains:

### HashMap

A factory that when invoked returns an HashMap with 16 buckets, each being a linked list.
The factory comes with some functions :

- length : Return the number of keys in the HashMap
- set(_key_, _value_) : If the _key_ isn't stored in the Map, hash it and store it, else update the old value with _value_
- get(_key_) : Return the value of the given _key_ if it is stored, else return null
- has(_key_) : Return true if the key is stored, else false
- remove(_key_) : If the _key_ is stored, remove it and return true, else return false
- clear : Remove everything from the HashMap and set back the capacity (number of buckets) to 16
- keys : Return an array with all keys stored in the Hashmap
- values : Return an array with all values stored in the Hashmap
- entries : Return an array containing arrays with each key/value pair

#### Note

The HashMap has a loadFactor of 0.75. Each time this load factor is reached. The HashMap value is multiplied by 2.

This package is extending another package : [linkedlists-and-nodes](https://www.npmjs.com/package/linkedlists-and-nodes).

Some functions of the LinkedList factory and the Node class were modified to work with the HashMap. They should still work independently from the HashMap but I recommend downloading the basis [Package](https://www.npmjs.com/package/linkedlists-and-nodes) for other uses.
