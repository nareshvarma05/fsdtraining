function sample() {
  document.getElementById("msg").innerHTML="Welcome to Java Script";

}

//Arrow function with two parameters
let data=(a,b)=>{
    return a+b;
}
let res=data(2,8);
console.log(res);

//Arrow function with 1 parameter
let data1=(x)=>{
    return x*x;
}
let pro=data1(9);
console.log(pro);

// creation of object using object literal
let myObj={
    name:"Naresh",
    age:20,
    display:function(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.age)
        },10000);
    }
}
myObj.display();

//creation of object using new keyword
let student=new Object();
student.name="Naresh",
student.age=20,
student.city="hyderabad",
console.log(student);

//Creation of object using constructor function
function Student3(name,age,city){
    this.name=name,
    this.age=age,
    this.city=city;

}
let s1=new Student3("Naresh",20,"Hyderabad");
let s2=new Student3("Lokesh",28,"Nalgonda");

console.log(s1);
console.log(s2);

//Objects with properties
let student1={
    name:"Naresh",

 display:function(){
    console.log("Welcome "+student1.name);
 }
};

//objects with adding properties
let student2={
    name:"Naresh"
};
student2.age=21;
console.log(student2);


//nested objects
let student4= {
    name: "Naresh",

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(student4.address.city);