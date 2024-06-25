import { LinkedList } from './linkedlist.js';

export function HashMap() {
  const buckets = [];

  let capacity = 16;

  const changeCapacity = (len) => (capacity = len);

  const checkIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  };

  const populateBuckets = () => {
    for (let i = 0; i < capacity; i++) {
      buckets[i] = LinkedList();
    }
  };

  return { buckets, changeCapacity, checkIndex, populateBuckets };
}
