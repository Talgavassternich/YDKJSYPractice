function range(start, end) {
    let r = (end) => {
        let arr = [];
        let st = start;
        while (end >= st) {
            arr.push(st++);
        }
        return arr;
    }
    if (end === undefined) {
        return r;
    } else {
        return r(end);
    }

}
console.log(range(3,3));
console.log(range(3,8));
console.log(range(3,0));
    // [3]
    // [3,4,5,6,7,8]
    // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));
console.log(start4(6))
     // [3]
     // [3,4,5,6,7,8]
     // []

     // [4,5,6]