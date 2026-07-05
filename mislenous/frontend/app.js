//1 object prototype
arr1=[1,2,3];
arr2=[1,2,3];

arr1.sayhello=()=>{
    console.log("hiii");
};
arr2.sayhello=()=>{
    console.log("hiii");
};
//2facatory function=a function that create object 

// function personmaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`&{this.name}`);
//         };
//   };
//     return person;
// };
// let p1=personmaker("raj",24);
// let p1=personmaker("eve",25);//problem is is person has a copy of talk function so there isanother logic new operatio 

//3==new operator use constructor
// function Person(name,age){//S-3
//         this.name=name;
//         this.age=age;
// };
//         Person.prototype.talk=Function(){//s_2
//             console.log(`&{this.name}`);
//         };

// let p1=new Person("raj",24);//s-1
//4____>classes
// class Person{
//     constructor(name,age){
//         this.name;
//         this.age;
//     }
//     task(){
//         console.log(`&{this.name}`);
//     }
// }
//  let p1=new Person("raj",343);

 //5===>inheritance best way to stop rescudin?? we cna do reption thing in one object and inherite from there useing extend and super calss 
  class Person{//parents 
     constructor(name,age){
        this.name=name;
        this.age=age;
     }
     talk(){
        console.log(this.name);
     }
  }

class student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
        console.log(this.name,this.age,this.marks);
}
}
class Teacher extends Person{
    constructor(name,age,subject){
    super(name,age);
    this.subject=subject;
}
}
let raj=new student("sam",23,65)