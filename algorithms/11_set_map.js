// Map

const map = new Map();
const objKey = {
  id: 1,
};

map.set(objKey, "Ilya");
map.set("name", "Ilya");

console.log(map.get(objKey));
console.log(map.get("name"));

// Set

const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);
console.log(set);
