import { LinkedList } from './linkedlist.js';

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

  return {
    buckets,
    changeCapacity,
    updateKeysLength,
    populateBuckets,
    displayBuckets,
    checkIndex,
  };
}
