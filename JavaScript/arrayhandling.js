let arr=[1,2,3,4,5];
console.log(arr);
arr.push(6,7);
console.log(arr);
arr.pop();
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(5));

let arr2=arr.reverse();

console.log(`Reverse array: ${arr2}`);

let arr3=arr.slice(1,3);
console.log(arr3);;


let res=arr.splice(1,2);
console.log(arr);
console.log(res);
