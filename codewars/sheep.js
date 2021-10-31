function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((sum,sheep) => sheep == true ? sum += 1 : sum, 0);
}