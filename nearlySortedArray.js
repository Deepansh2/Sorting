/**
 * Q-2 Given an array of n numbers. Each element in the array is at 
 * maximum k distance from its actual position. Your task is to sort this
 * kind of array with minimum time,
 * where 
 * n = number of elements and k = distance from its actual position
 * k=3
 *  i/p = [19,18,17,14,70,60,50];
 *  o/p = [14,17,18,19,50,60,70];
 */

function nearlySortedArray(arr){

    for(let i = 1;i<arr.length;i++){
        let currEle = arr[i];
        let j = i-1;
        while(j >=0 && arr[j] > currEle){
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = currEle
    }
}
let arr = [19,18,17,14,70,60,50];
console.log(arr)
nearlySortedArray(arr);
console.log(arr)
// nearlySortedArray