/*Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/

function highestRank(arr){

  arr = arr.slice().sort((x, y) => x - y);

  let bestStreak = 1;
  let bestElem = arr[0];
  let currentStreak = 1;
  let currentElem = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] !== arr[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = arr[i];
    }

    currentStreak++;
  }

  return currentStreak >= bestStreak ? currentElem : bestElem;
}
