// =====================================bubble SORT
// function bubbleSort(arr){
//     for(let i =0;i<arr.length-1;i++){
//              let flag = false;
//         for(let j = 0;j<arr.length-1-i;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j]  = arr[j+1];
//                 arr[j+1] = temp;
//                  flag = true
//             }
//         }
//          if(flag == false){
//              break;
//          }
//     }
// }
// let arr = [4,3,1,7,8];
// bubbleSort(arr);
// console.log(arr)
// ================================================INSERTION SORT

// function insertionSort(arr){
//     for(let i = 1;i<arr.length;i++){
//         let currEle = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j]>currEle){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = currEle;
//     }
// }
// // let arr = [5,3,1,4,2];
// let arr = [4,3,2,1]
// insertionSort(arr);
// console.log(arr)
// ====================================SELECTION SORT by visha sir

// function selectionSort(arr){

//     for(let i= 0;i<arr.length;i++){
//         let min = i;

//         for(let j = i+1;j<arr.length;j++){
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
// }
// let arr = [6,3,7,2,9,11];
// selectionSort(arr)
// console.log(arr)
// ----------------------------DONE BY SNJEET BOORA MAM
// function findMinIdxEle(arr,start){
//     let minIdx = start;
//     for(let j = start;j<arr.length;j++){
//         if(arr[minIdx]>arr[j]){
//             minIdx = j
//         }
//     }
//     return minIdx;
// }

// function selectionSort(arr){
//     for(let i = 0;i<arr.length;i++){
//         let min = findMinIdxEle(arr,i)
//         if(i != min){
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
// }
// let arr = [5,6,8,2,1,9,11];
// selectionSort(arr);
// console.log(arr)
// ==================================================== factorial
// function factorial(n){
//     if(n == 1){
//         return 1
//     }
//     let ans = n*factorial(n-1)
//     return ans
// }
// let n = 4;
// console.log(factorial(n))
// =======================================MERGE SORT by vishwa sir
// function mergeSort(arr,start,end){
//     if(start >=end){ // 1 element there is one element only otherwise passing value is wrong
//         return;
//     }
//     let mid = Math.floor(start + (end-start)/2);
//     mergeSort(arr,start,mid); //first sorted part;
//     mergeSort(arr,mid+1,end); // second sorted part;
//     merge(arr,start,mid,end); // merge both of them;
// }
// function merge(arr,start,mid,end){
//     let tempArr = new Array(arr.length);
//     let tempIdx = start;
//     let lStart = start;
//     let rStart = mid+1;

//     while(lStart<=mid && rStart <=end){
//         if(arr[lStart]<=arr[rStart]){
//             tempArr[tempIdx] = arr[lStart];
//             tempIdx++;
//             lStart++;
//         }else{
//             tempArr[tempIdx] = arr[rStart];
//             tempIdx++;
//             rStart++;
//         }

//     }
//     while(lStart <=mid){
//         tempArr[tempIdx++] = arr[lStart++];
//     }
//     while(rStart <=end){
//         tempArr[tempIdx++] = arr[rStart++]
//     }
//     for(let i = start;i<=end;i++){
//         arr[i] = tempArr[i]
//     }

// }
// let arr = [2,5,6,7,8,11,15,1];
// console.log(arr)
// mergeSort(arr,0,7);
// console.log(arr)
// ================================ QUICK SORT by vishwa sir
/** 
 * left side of pivot index everything will be small and everything after pivot index 
 * everything will be bigger , we select pivot index randomly 
 * 
 */

// function quickSort(arr,start,end){
//     if(start>=end){
//         return ;
//     } 
//     let pi = randomizedfindPivot(arr,start,end);
//     quickSort(arr,start,pi-1);
//     quickSort(arr,pi+1,end);
// }

// function randomizedfindPivot(arr,start,end){
//     let randomIdx = Math.floor(Math.random()*(end-start + 1) + start);
    
//     swap(arr,randomIdx ,end)

//     let pivot = arr[end];
//     let pI = start-1;
//     for(let i= start;i<=end-1;i++){
//         if(arr[i]<pivot){
//             pI++
//             swap(arr,pI,i);
//         }
//     }
//     swap(arr,pI+1,end);
//     return pI+1;
// }

// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// let arr = [3,2,5,7,1,9];
// quickSort(arr,0,5);
// console.log(arr);





