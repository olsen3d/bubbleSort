/* eslint-disable no-use-before-define */
//bubble sort

function bubbleSort(array) {
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j +1]) {
     [array[j], array[j + 1]] = swap(array[j], array[j + 1])
    }
  }
}
  return array
}

const swap = (left, right) => {
  let temp = left
  left = right
  right = temp
  return [left, right]
}

module.exports = {
  bubbleSort,
  swap
}
