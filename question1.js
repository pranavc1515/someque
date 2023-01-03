function Question1(str){
    var reverseString1 = str.split("");
    var reverseArray = reverseString1.reverse();
    var joinArray = reverseArray.join("");
    var reverseString1 = joinArray.split(" ");
    var reverseArray2 = reverseString1.reverse();
    var joinArray2 =reverseArray2.join(' ')
    console.log(joinArray2);
}
Question1("Welcome to this Javascript!")