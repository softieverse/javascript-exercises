const sumAll = function(max, min) {
    if(!Number.isInteger(max)|| !Number.isInteger(min))
        return "ERROR!"
    if(min<0 || max <0)
         return "ERROR"
    if min > max {
        const temp =min;
        min=max;
        max=temp;
    }
let sum =0;
for(int i =min;i<=max;i++){
    sum += i;
}
return sum 
};

// Do not edit below this line
module.exports = sumAll;
