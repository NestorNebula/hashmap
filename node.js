export class Node {
  constructor(key, value) {
    this[key] = value;
    this.next = null;
  }
}
