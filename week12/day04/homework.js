//Q1.)
//Answer 1.)
var isValid = function(s) {
    stack=[]
    for(i=0;i<s.length;i++){
        if(s[i]=="("){stack.push(s[i])}
        else if(s[i]=="{"){stack.push(s[i])}
        else if(s[i]=="["){stack.push(s[i])}
        else if((s[i]==")"&&stack[stack.length-1]=="(")||(s[i]=="}"&&stack[stack.length-1]=="{")||(s[i]=="]"&&stack[stack.length-1]=="["))
        {stack.pop()}
        else{return false}
    }if(stack.length==0){return true}
    else{return false}
};

//Q2.)
//Answer 2.)
var calPoints = function(ops) {
    stack=[]
    for(i=0;i<ops.length;i++){
        if(ops[i]=="+"){stack.push(String(Number(stack[stack.length-1])+Number(stack[stack.length-2])))}
        else if(ops[i]=="C"){stack.pop()}
        else if(ops[i]=="D"){stack.push(String(2*Number(stack[stack.length-1])))}
        else{stack.push(ops[i])}
    }if(stack.length==0){return 0}
    sum=stack.map(Number).reduce((a,b)=>a+b)
    return sum
};