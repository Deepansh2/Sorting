/**
 * Q-1 Maximum weight difference 
 *     given an array of n numbers and a number k. your task is to select
 *  k numbers from an array such that the absolute difference b/w the sum
 * of k selected numbers and the sum of the remaining numbers would be maximum.
 *  print the maximum absolute difference as output.
 * let's k = 2;
 * arr = [18,4,15,12,10]
 */

function absoluteDiff(arr,k){

    arr.sort((a,b) =>a-b)
    let i = 0;
    let smallestSum = 0,largestSum = 0;

    while(i < k){
        smallestSum += arr[i]
        i++;
    }
    while(i < arr.length){
        largestSum += arr[i] 
        i++
    }
    let absoluteDifference = largestSum-smallestSum
    return Math.abs(absoluteDifference)
}
// let arr = [18,4,15,12,10];
let arr = [-18,-4,-15,-12,-10]
let k = 2;
console.log(absoluteDiff(arr,k))