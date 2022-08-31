/*Q1.
Answer 1.*/
function addition(a,b){
    sum=a+b
    return sum
}
let s = addition(2,4)
console.log(s)
/*here above we have a declared a function by statement,this function will 
add two numbers
In function declaration by statement we have to write the name of function
and then we can only call the function by that name*/

var f = function(c,d){
    sum =c+d
    return sum
}
let v = f(5,6)
console.log(v)
/*here above we have a declared a function by expression,this function will 
add two numbers
In function declaration by expression we store a function in a variable 
and now it is optional to provide name to the function because the function
will only be called by using variable in which function is stored.
*/ 

/*Q1.
Answer 2.*/
var x = function(y,z){
    avg = (y+z)/2
    return avg
}
console.log(x(3,9))
//now for converting same funtion into arrow function we write
var x1 = (y1,z1) =>(y1+z1)/2
avg=x(5,15)
console.log(avg)


