// Small enough
function smallEnough(a, limit){
    for (var nums of a) {
        if (nums > limit) return false;
    }
    return true;
}

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
// }