/**
 * 
 * @param {number[]} left 
 * @param {number[]} right 
 */
function merge(left, right) {
    // length of left and right arrays
    let n1 = left.length, n2 = right.length;

    const arr = new Array(n1 + n2);

    for (let i = 0, j = 0, k = 0; i < n1 || j < n2; k++) {
        if ((i < n1 && j < n2 && left[i] <= right[j]))
            arr[k] = left[i++];
        else if ((i < n1 && j < n2 && left[i] > right[j]))
            arr[k] = right[j++];
        else if (i < n1)
            arr[k] = left[i++];
        else // j < n2
            arr[k] = right[j++];
    }
    return arr;
}

/**
 * 
 * @param {number[]} arr 
 */
function mergeSort(arr, start = 0, end = arr.length) {
    if (arr.length <= 1) return arr;

    // calculate midpoint
    const mid = Math.floor((start + end) / 2);
    // left array
    const leftSorted = mergeSort(arr.slice(start, mid));
    //  right array
    const rightSorted = mergeSort(arr.slice(mid, end));
    // Merge the two arrays
    const merged = merge(leftSorted, rightSorted);
    return merged;
}