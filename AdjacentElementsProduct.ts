/*
Given an Array of elements find the product of adjacent elements that has largest product.
Example: [3,6,-1,-2,3,7] = 21
*/

function adjacentElementProduct(inputArray: number[]): number{
let largestProduct = inputArray[0] * inputArray[1];
for (let i = 1; i <  inputArray.length - 1; i++){
    const product = inputArray[i] * inputArray[i + 1];
    largestProduct = largestProduct < product ? product : largestProduct;
}
return largestProduct;
}
console.log(adjacentElementProduct([3,6,-1,-2,3,7]))