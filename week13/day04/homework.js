//Q1.)
//Answer 1.
/* 
There are 4 principles of OOPs-:
1.)Encapsulation => It actually means to accommodate all the action in a single thing
class is an example of encapsulation
*/
class vehicle{
    constructor(tires,size,type){
        this.tires=tires
        this.size=size
        this.type=type
    }
    move(){
        console.log(`this is ${this.type}`)
    }
}
let truck1=new vehicle(16,"huge","commercial")
//this class is an example of encapsulation it contains many actions in a single capsule.

/*
2.) Inheritance =>It means inheriting action from the super class.super class is the parent
class from which actions will be inherited,base class is the child class in which actions
got inherited.
*/
//Suppose above class is parent class now inheriting the properties from parent class into 
//base class
class car extends vehicle{
   constructor(brand,tires,size,type){
      super(tires,size,type)
      this.brand=brand
   }
   move(){
     console.log("here polymorphism occurs")
   } 
}
let car1=new car("maruti",4,"hatch","car")
console.log(car1.size)
/*
3.) Abstraction=>It actually means hiding the internal detail from outer world.
for eaxample
*/
function greet(){
 console.log("hello sardik")
}
greet()//now during calling the function no matter what is code written in function user just 
//called it ,all  the details of function is hidden from the user that is called abstraction.

/*
4.) polymorphism => It means the acting of same function differently,when we override the same 
function,for example.*/
// if we do
car1.move()//it will run only 2nd move function which print "here polymorphism occurs",
//because we have written the move function in base class again
//now when we call truck object made from vehicle class ,then it will run first move function,
//of class vehicle
truck1.move()