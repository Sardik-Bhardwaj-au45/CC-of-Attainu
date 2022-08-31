//Q1.)
//Answer 1.)
class student{
    constructor(name,roll_no){
        this.name=name
        this.roll_no=roll_no
    }
    display(){
        console.log(this)
    }
    setage(age){
        this.age=age
    }
    setmarks(marks){
        this.marks=marks
    }
}
let student1= new student("sardik",12)
student1.display()
student1.setage(22)
student1.setmarks(100)
student1.display()

//Q2.)
//Answer2.)
class circle{
    constructor(radius){
        this.radius=radius
    }
    getarea(radius){
        return 3.14*(this.radius**2)
    }
    getcircumference(){
        return 2*3.14*this.radius
    }
}
let circle1=new circle(100)
console.log(circle1)
console.log(circle1.getarea())
console.log(circle1.getcircumference())

//Q3.)
//Answer 3.)
class temprature{
    constructor(temp){
        this.temp=temp
    }
    convertFahrenheit(){
        if(this.temp[this.temp.length-1]=="C"){
            return (Number(this.temp.slice(0,this.temp.length-1))*1.8)+32+"F"
        }
        else {return this.temp}
    }
    convertCelsius(){
        if(this.temp[this.temp.length-1]=="F"){
            return (Number(this.temp.slice(0,this.temp.length-1))-32)/1.8+"C"
        }
        else {return this.temp}
    }
}
let temp1=new temprature("113F")
let temp2=new temprature("45C")
console.log(temp1.convertCelsius())
console.log(temp2.convertFahrenheit())