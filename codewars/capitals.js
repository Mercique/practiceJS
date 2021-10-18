// Find the capitals
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};

console.log(capitals('CodEWaRs')); // [0,3,4,6]