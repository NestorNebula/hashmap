export function LinkedList() {
  let list = null;

  const append = (node) => {
    const listHead = head();
    if (!listHead) {
      list = node;
    } else {
      let previous = listHead;
      while (previous.next !== null) {
        previous = previous.next;
      }
      previous.next = node;
    }
  };

  const prepend = (node) => {
    const listHead = head();
    if (listHead) {
      node.next = listHead;
    }
    list = node;
  };

  const size = () => {
    const listHead = head();
    if (!listHead) return 0;
    let counter = 1;
    let actual = listHead;
    while (actual.next !== null) {
      counter += 1;
      actual = actual.next;
    }
    return counter;
  };

  const head = () => list;

  const tail = () => {
    const listHead = head();
    if (!listHead) return list;
    let actual = listHead;
    while (actual.next !== null) {
      actual = actual.next;
    }
    return actual;
  };

  const at = (index) => {
    const listHead = head();
    if (!listHead) return list;
    let counter = 0;
    let actual = listHead;
    while (counter !== index) {
      if (actual.next === null) {
        throw Error('Incorrect Index');
      }
      actual = actual.next;
      counter += 1;
    }
    return actual;
  };

  const pop = () => {
    const listHead = head();
    if (!listHead) return list;
    const listSize = size();
    const prevNode = at(listSize - 2);
    prevNode.next = null;
  };

  const contains = (value) => {
    const listHead = head();
    if (!listHead) return false;
    let actual = listHead;
    while (actual.next !== null) {
      if (actual.value === value) {
        return true;
      }
      actual = actual.next;
    }
    return false;
  };

  const find = (value) => {
    const listHead = head();
    if (!listHead) return false;
    let counter = 0;
    let actual = listHead;
    while (actual.next !== null) {
      if (actual.value === value) {
        return counter;
      }
      actual = actual.next;
      counter += 1;
    }
    if (actual.value === value) {
      return counter;
    } else {
      return null;
    }
  };

  const toString = () => {
    const listHead = head();
    let actual = listHead;
    let string = '';
    while (actual !== null) {
      string += `( ${actual.value} ) -> `;
      actual = actual.next;
    }
    string += 'null';
    return string;
  };

  const insertAt = (node, index) => {
    const listHead = head();
    if ((!listHead && index !== 0) || size() < index) {
      throw Error('Incorrect Index');
    }
    if (index === 0) prepend(node);
    else if (index === size) append(node);
    else {
      const previousNode = at(index - 1);
      const nextNode = at(index);
      previousNode.next = node;
      node.next = nextNode;
    }
  };

  const removeAt = (index) => {
    const listHead = head();
    if (!listHead || size() <= index) throw Error('Incorect Index');
    if (index === size() - 1) pop();
    else if (index === 0) {
      list = at(1);
    } else {
      const previousNode = at(index - 1);
      const nextNode = at(index + 1);
      previousNode.next = nextNode;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
