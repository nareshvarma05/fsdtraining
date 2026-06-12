let promise1=new Promise((resolve,reject)=>
{
    let success=true;
    if(success){
        resolve("Operation successfull");
    }
    else{
        reject("Operation Rejected");
    }
});
console.log(promise1)
promise1
.then(result=>console.log(result))
.catch(error=>console.log(error));

//Promise with setTimeout
let promise2= new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received after 3 seconds");
    }, 3000);

});

promise2.then(data => {
    console.log(data);
});


/// Promise chaining
let promise3 = new Promise((resolve) => {
    resolve(10);
});

promise3
.then(num => num * 2)
.then(num => num + 5)
.then(num => num * 3)
.then(result => console.log(result));


//Using finally
let promise4=new Promise((resolve,reject)=>{
    resolve("Login Successfull")

});
promise4
.then(data=>console.log(data))
.catch(error=>console.log(error))
.finally(()=>console.log("Promise resolved completely"))


//Promises with aync/await
function getData() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);

    });
}

async function display() {

    let result = await getData();

    console.log(result);
}

display();