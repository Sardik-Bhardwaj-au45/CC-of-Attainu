//Q1.)
//Answer 1.)
var longestValidParentheses = function(s) {
    stack=[-1];max=0
    for(i=0;i<s.length;i++){
        if(s[i]=="("){stack.push(i)}
        else if(stack.length==1){stack[0]=i}
        else{stack.pop();max=Math.max(max,i-stack[stack.length-1])}
    }
    return max
};