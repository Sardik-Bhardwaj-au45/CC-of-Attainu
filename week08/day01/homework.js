//Q1.
console.log("Answer 1.")
function createBase(a){
    function inside(b){
        return a+b
    }return inside
}
var addsix = createBase(6)
console.log(addsix(10))
console.log(addsix(21))