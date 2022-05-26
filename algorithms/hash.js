// Хэш-функция для исключения дубликатов, на примере голосования - O(1) 
let voted = new Set(); // new Map, {} можно использовать

const checkVoter = (name) => {
  if (voted.has(name)) {
    console.log("Kick them out!");
  } else {
    voted.add(name);
    console.log("Let them vote!");
  }
}

checkVoter("Mike");
checkVoter("John");
checkVoter("John"); // исключение