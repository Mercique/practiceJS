// Поиск в ширину в графе

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

const breadthSearch = (graph, start, end) => {
  let queue = []; // создлаем граф
  queue.push(start);

  while (queue.length > 0) { // до тех пор, пока есть 1 эл
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }
    
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
};

console.log(breadthSearch(graph, "a", "e"));
