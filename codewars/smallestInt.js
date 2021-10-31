class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

let smallest = new SmallestIntegerFinder();

console.log(smallest.findSmallestInt([78,56,232,12,8]));