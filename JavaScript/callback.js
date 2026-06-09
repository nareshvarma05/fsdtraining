function placeOrder(callback){
    setTimeout(()=>{
        console.log("The order is placed");
        callback();
    },1000)
}
function prepareFood(callback){
    setTimeout(()=>{
        console.log("The food is prepared");
        callback();
    },1000)
}
function packfood(callback){
    setTimeout(()=>{
    console.log("The food is packed")
    callback();
},500)
}
function deliverFood(callback){
    setTimeout(()=>{
        console.log("The food is deliverd");
    },1500);
}

placeOrder(()=>{
    prepareFood(()=>{
        packfood(()=>{
            deliverFood()
        })
    })
})