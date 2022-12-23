const array = [1, -2, 3, 4, 5];

function positiveSum(arr) {
    let total = 0;
    for (const entry of arr) {
        if (entry > 0) {
            total += entry;
        }
    }
    return total;
}
console.log(positiveSum(array));
