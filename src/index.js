class Sorter {
  constructor() {
    this.arr = [];
    // your implementation
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
    return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
    // your implementation
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    // your implementation
    var subArr = [];
for (var i = 0; i < indices.length; i++) {
var idx = indices[i];
var element = this.arr[idx]
subArr.push(element);
}
if (this.comparator) {
subArr.sort(this.comparator);
} else {
subArr.sort((a, b) => a - b);
}

for (var i = 0; i < subArr.length; i++) {
var idx = indices[i];
this.arr[idx] = subArr[i];

}
  }

  setComparator(compareFunction) {
    // your implementation
  this.comparator = compareFunction;
  }
}

module.exports = Sorter;