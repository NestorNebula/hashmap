import { LinkedList } from './linkedlist.js';
import { Node } from './node.js';

export function HashMap() {
  const buckets = [];

  let capacity = 16;

  const changeCapacity = (len) => (capacity = len);

  const loadFactor = 0.75;

  let keysLength = 0;

  const length = () => keysLength;

  const updateKeysLength = (method) => {
    if (method === 'add') {
      keysLength += 1;
    } else if (method === 'remove') {
      keysLength -= 1;
    } else if (method === 'clear') {
      keysLength = 0;
    } else {
      throw Error('Wrong Method');
    }
  };

  const populateBuckets = () => {
    for (let i = 0; i < capacity; i++) {
      buckets[i] = LinkedList();
    }
  };

  const displayBuckets = () => {
    buckets.forEach((bucket) => {
      console.log(bucket.head());
    });
  };

  const checkIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  };

  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % capacity;
    }
    return hashCode;
  };

  const set = (key, value) => {
    const hashCode = hash(key);
    const node = new Node(key, value);
    if (buckets[hashCode].append(node) === true) {
      updateKeysLength('add');
    }
  };

  const get = (key) => {
    const hashCode = hash(key);
    return buckets[hashCode].find(key);
  };

  const has = (key) => {
    const hashCode = hash(key);
    return buckets[hashCode].contains(key);
  };

  const remove = (key) => {
    if (has(key) === false) {
      return false;
    }
    const hashCode = hash(key);
    const index = buckets[hashCode].findIndex(key);
    buckets[hashCode].removeAt(index);
    updateKeysLength('remove');
    return true;
  };

  const clear = () => populateBuckets();

  const keys = () => {
    const keysArray = [];
    buckets.forEach((bucket) => {
      let actual = bucket.head();
      while (actual !== null) {
        keysArray.push(Object.keys(actual)[0]);
        actual = actual.next;
      }
    });
    return keysArray;
  };

  const values = () => {
    const valuesArray = [];
    buckets.forEach((bucket) => {
      let actual = bucket.head();
      while (actual != null) {
        valuesArray.push(Object.values(actual)[0]);
        actual = actual.next;
      }
    });
    return valuesArray;
  };

  const entries = () => {
    const entriesArray = [];
    buckets.forEach((bucket) => {
      let actual = bucket.head();
      while (actual != null) {
        const keyvalueArray = [];
        keyvalueArray.push(Object.keys(actual)[0]);
        keyvalueArray.push(Object.values(actual)[0]);
        entriesArray.push(keyvalueArray);
        actual = actual.next;
      }
    });
    return entriesArray;
  };

  return {
    buckets,
    changeCapacity,
    length,
    updateKeysLength,
    populateBuckets,
    displayBuckets,
    checkIndex,
    hash,
    set,
    get,
    has,
    remove,
    clear,
    keys,
    values,
    entries,
  };
}
