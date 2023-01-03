var a = ['elephant', "cat", 'dog', 'owl', 'unicorn', 'alligator']

let rex = /^[aeiou]/i
var c = a.filter((ele)=>rex.test(ele)).map((ele)=>{
    return ele.charAt(0).toUpperCase()+ ele.substring(1);
});
console.log(c);
