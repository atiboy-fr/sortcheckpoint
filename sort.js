function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowestIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if(lowestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
    }
    return arr;
}


console.log(insertionSort([4,2,9,5,7,8,1,3]))