class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
    this.arraySum = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.includes(pos)) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items.sort((a, b) => b - a)[0];
    } else {
      throw new Error("Empty SortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items.sort()[0];
    } else {
      throw new Error("Empty SortedList");
    }
  }

  sum() {
    for (let i = 0; i < this.items.length; i++) this.arraySum += this.items[i];
    return this.arraySum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
