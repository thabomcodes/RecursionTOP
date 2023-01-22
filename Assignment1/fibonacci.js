/**
 * 
 * @param {number} n 
 * @returns 
 */
function fibs(n) {
    const array = [];
    for (let i = 0; i < n; i++)
        array.push((i == 0 || i == 1) ? i : array[i - 1] + array[i - 2]);
    return array;
}

/**
 * 
 * @param {number} n
 * @returns 
 */
function fibsRec(n) {
    return n < 1 ? [] :
        (a => a.concat(n === 1 ? [0] : n === 2 ? [1] : [a[a.length - 1] + a[a.length - 2]])
        )(fibsRec(n - 1));
}