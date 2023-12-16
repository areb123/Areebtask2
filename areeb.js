// var a = ["A","B","C","D","E"];
// var b = [1,2,3,4,5,6,7,8,9];

//  areeb task 2

var a = ["A", "B", "C", "D", "E"];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var mergedArray = [];

for (var i = 0; i < b.length; i++)
 {
    for (var j = 0; j < a.length; j++)
     {
        mergedArray.push(b[i] + a[j]);
    }
}

console.log(mergedArray);

