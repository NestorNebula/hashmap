import { LinkedList } from './linkedlist.js';
import { Node } from './node.js';

export function HashMap() {
  const buckets = [];

  let capacity = 16;

  const changeCapacity = (len) => (capacity = len);

  const loadFactor = 0.75;

  let keysLength = 0;

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

  return {
    buckets,
    changeCapacity,
    updateKeysLength,
    populateBuckets,
    displayBuckets,
    checkIndex,
    hash,
  };
}
