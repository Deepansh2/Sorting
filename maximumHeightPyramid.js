/**
 * Q-3 = > Given an array of n numbers where each element represent a
 * width.We need to arrange them in a pyramid.We need to follow below 2 rules while
 * creating that pyramid 
 * total width of a ith row in pyramid must be less then (i+1)th row.
 * total elements in a ith row in pyramid must be less then (i+1)th row
 * your task is to find the maximum height which can be achieved by arranging the array
 * while following above given rules.
 * i/p = [1,2,3,5,6,7];
 * o/p = 3;
 */

function maxHeight(arr){

    let n = arr.length;
    arr.sort((a,b) =>a-b)
    let maxLength = 1;
    let prevWidth = arr[0];
    let prevBlockCount = 1;

    let currWidth = 0;
    let currBlockCount = 0;

    for(let i = 1; i< n; i++){
        currWidth += arr[i];
        currBlockCount++;
        
        if(currWidth > prevWidth && currBlockCount > prevBlockCount){
            maxLength++;
            prevBlockCount = currBlockCount;
            prevWidth = currWidth;

            currBlockCount = 0;
            currWidth = 0;

        }
    }
    return maxLength;
}
let arr = [5,6,2,1,3,7];
console.log(maxHeight(arr))