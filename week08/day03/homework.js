//Q1.
console.log("Answer 1.")
function fun(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(fun(1)(2)(3))

//Q2.
console.log("Answer 2.")
function myfunc(a){
    return function(b){
        return function(c){
            return (a+b)/c
        }
    }
}
console.log(myfunc(2)(8)(2))