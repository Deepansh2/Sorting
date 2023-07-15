/**
 * Q-4 Given a sorted array of n numbers. Your task is to 
 * apply an equation on each element and after applying,you need
 * to sort it again Equation is A*x*x + B*x + c
 * i/p = [1,2,3,5,6,7] , A = -1, B = -2, C = 3;
 * o/p = [-60,-45,-32,-12,-5,0]
 */

/**
 *  done by sanjeet boora ma'am
 * according to parabola equation watch recoding;
 *  02;49;00 advance problem on sorting.
 */

function sortedArray(arr,n,A,B,C){

    let maxNo = -1000000007;
    let maxIdx = -1;
    let minNo = 1000000007;
    let minIdx = -1;
    for(var i = 0;i<n;i++){
        arr[i] = A*arr[i]*arr[i] + B*arr[i] + C;
    }
    if(arr[i] > maxNo){
        maxNo = arr[i];
        maxIdx = i;

    }
    if(arr[i] < minNo){
        minNo = arr[i];
        minIdx = i
    }
    console.log(arr)
    let output = new Array(n)
    let k = 0;
    if(A > 0){ //consider minimum occ. in between
        let x = minIdx; //it will go to the left
        let y = minIdx + 1; //it will go to the right
        while(x >= 0 && y < n){
            if(arr[x] < arr[y]){
                output[k] = arr[x];
                x--;
            }else{
                output[k] = arr[y];
                y++;
            }
            k++;
        }
        while(x >= 0){
            output[k] = arr[x];
            x--;
            k++;
        }
        while(y < n){
            output[k] = arr[y];
            y++;
            k++;
        }
    }
    else { //if(A < 0)//consider maximum occ. in between
        let x = 0;
        let y = n-1;
        while(x <= maxIdx && y > maxIdx){
            if(arr[x] < arr[y]){
                output[k] = arr[x];
                x++;
            }else{
                output[k] = arr[y];
                y--;
            }
            k++;
        }
        while(x <= maxIdx){
            output[k] = arr[x];
            x++
            k++;
        }
        while(y > maxIdx){
            output[k] = arr[y];
            y--;
            k++;
        }

    }
    return output;
}

let arr = [10,20,30,40,50];
let n = 5;
let A = -1,B = -2,C = 3;
console.log(sortedArray(arr,n,A,B,C));


// -------------------------------------------- done by Dee
// function equation(arr){

//     let A = -1;
//     let B = -2;
//     let c = 3;

//     let tempArr = new Array(arr.length);
//     let tempIndex = 0;
//     let currEquation = 0
//     for(let i = 0;i < arr.length;i++){
//         let x = arr[i]
//         currEquation = A*x*x + B*x + c
//         tempArr[tempIndex++] = currEquation
//     }
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = tempArr[i]
//     }
//     arr.sort((a,b) => a-b)
//     console.log(arr)
// }
// let arr =  [1,2,3,5,6,7];
// equation(arr)

// function equation(arr){

//     let A = -1;
//     let B = -2;
//     let c = 3;

//     for(let i = 0;i < arr.length;i++){
//         let x = arr[i]
//         arr[i] = A*x*x + B*x + c
        
//     }
//     arr.sort((a,b) => a-b)
//     console.log(arr)
// }
// let arr =  [1,2,3,5,6,7];
// equation(arr)
