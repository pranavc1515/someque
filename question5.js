const arr = [1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]];

function flatDeep(arr,d =1){
    if(!Array.isArray(arr,d =1)){
        return arr;
    }
    return d>0
    ?arr.reduce((acc,val)=>
    acc.concat(flatDeep(val,d-1)),[])
    :arr.slice();
}
console.log(flatDeep(arr,Infinity))
