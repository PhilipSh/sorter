class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var newArr = [];
    for (var i = 0; i < indices.length; i++) {
      newArr[i] = this.arr[indices[i]];
    }
    newArr.sort(function(a,b){
      return a - b ;
    });
    indices.sort();
    for (var j = 0; j < indices.length; j++) {
      this.arr[indices[j]] = newArr[j];
    }
   
  }

  setComparator(compareFunction) {
    
  }
}

module.exports = Sorter;