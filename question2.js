let array = [1,4,4,2,5,1,2,4,1]
var sum =0;
var count =0;

for(var i=0;i<array.length;i++){
    count =0;
    index =0;

    var result_array=[]

    for(let j =i+1;j<array.length;j++){
        if(array[j]==array[i] && array[j]!=-1){
            count = count+array[j]
            result_array.push(array[j])
            array[j]=-1;
            index++;
        }
    }
    count = count+array[i]
    if(array[i]!=-1){
        result_array.push(array[i])
        console.log("[" + result_array + "]" +"=" +count);
        sum=sum+count;
    }
}console.log(sum);