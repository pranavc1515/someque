const s = "0009200.000016800.000001000.0/24";

const props =s.split("/");

let ip = "";
let isValid = false;

const values = props[0].split(".");

const trimmer = (value) =>{
    if(value>0){
        return value.replace(/^0+/,'');
    }else{
        return value;
    }
};


for (const value in values) {
    if(value <values .length -1){
      ip += trimmer(values[value]) + '.';
    }
}
ip +=trimmer(values[values.length -1]);

console.log(`IP :${ip} \nMASK: ${props[1]}`);