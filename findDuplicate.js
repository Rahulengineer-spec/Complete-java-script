function findDuplicates(arr) {
  let duplicates = [];
  let sortedArr = arr.sort();

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1] && !duplicates.includes(sortedArr[i])) {
      duplicates.push(sortedArr[i]);
    }
  }

  return duplicates.sort((a, b) => a - b);
}
