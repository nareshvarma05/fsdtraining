// const fs=require("fs");
// fs.writeFileSync("abc.txt","Good afternoon");
// let data=fs.readFileSync("abc.txt","utf-8");
// console.log(data);


// console.log("start");
// fs.writeFile("abc2.txt","data",()=>{
//     console.log("Hello");
// });
// console.log("end")



// fs.readFile("abc.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log("error");
//     }


//     console.log(data);
// });
// console.log("hello")

// fs.writeFileSync("abc.txt","Updated text");

// let data1=fs.readFileSync("abc.txt","utf-8")

// console.log(data1);


// let data2=fs.writeFile('abc.txt','utf-8',()=>{
//     console.log(data2);
// });

// const fs1 = require('fs').promises;
// fs1.writeFile('abc.txt','welcome to node.js');
// fs1.readFile('abc.txt', 'utf8')
//     .then(data3 => {
//         console.log(data3);
//     })
//     .catch(err => {
//         console.log("Error:", err.message);
//     });

// console.log("Hello");


// fs1.readFile('abc.txt','utf-8')
//     .then(data=>{
//         return fs1.writeFile('copy.txt','utf-8')
//     }
//     )
//     .then(()=>{
//         console.log("File copied successfully");
//     })
//     .catch(err=>{
//             console.log(err);
//     }
//     )

// const readStream=fs.createReadStream('abc.txt');
// readStream.on('data',(chunk)=>{
//     console.log(chunk);

// })


// const rs1 = fs.createReadStream('abc.txt');
// const ws1= fs.createWriteStream('destination.txt');

// rs1.pipe(ws1);

// const fs1 = require('fs1').promises;

// async function readFileData() {
//     try {
//         const data = await fs.readFile('abc.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.log("Error:", err.message);
//     }
// }

// readFileData();


const fs2=require("fs");

const ws2=fs2.createWriteStream('xyz.txt');
ws2.write("Write Stream Demo")
console.log('Successfully written');

ws2.end()



