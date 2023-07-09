/*

mergesort pseudocode:
- recursively sort first half of input array
- recursively sort second half of input array
- merge two sorted sublists into one

*/

/* first need a base case of the array being divided until it reaches a length of 1

*/


function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
        }
    const mid = Math.floor(arr.length /2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid) 
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


function merge(leftArr, rightArr) {
    let sortedArr = []
    while(leftArr.length > 0 && rightArr.length > 0)
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }

    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))