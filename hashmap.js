import { LinkedList } from './linkedlist.js';

export function HashMap() {
  const buckets = [];

  const checkIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  };

  const populateBuckets = (len) => {
    for (let i = 0; i < len; i++) {
      buckets[i] = LinkedList();
    }
  };

  return { buckets, checkIndex, populateBuckets };
}
