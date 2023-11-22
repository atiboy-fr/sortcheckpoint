// Function to perform selection sort on an array
function insertionSort(arr) {
    // Iterate through each element in the array
    for(let i = 0; i < arr.length; i++) {
        // Assume the current index is the index of the minimum element
        let lowestIndex = i
        // Find the index of the minimum element in the unsorted part of the array
        for(let j = i + 1; j < arr.length; j++) {
            // If the element at index j is less than the element at the assumed minimum index
            if(arr[j] < arr[lowestIndex]) {
                // Update the index of the minimum element
                lowestIndex = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        if(lowestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
    }
    return arr;
}


console.log(insertionSort([4,2,9,5,7,8,1,3]))