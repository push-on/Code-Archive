'use strict';

let a = [17, 28, 30];
let b = [99, 16, 8];

function compareTriplets(a, b) {
    let point = [0,0];
    let i = 0;
    while (i < 3) {
        if (a[i] < b[i]) {
            point[0]++;
        } else if (a[i] > b[i]) {
            point[1]++;
        }
        i++;
    }
    return point;
}
console.log(compareTriplets(a, b));
