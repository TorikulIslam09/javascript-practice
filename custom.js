let user_name = document.getElementById("user_name");
let pasward = document.getElementById("pasward");
let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", function(){
    let x = user_name.value;
    let y = pasward.value;
  if(x == "torik" && y == "12345"){
    window.location.href = "bank.html";
  }
  else{
    alert("sabdan user & email tik dew")
  }
  user_name.value = " ";
})











// for(var i = 10; i >= 1; i=i-1){
//     console.log(i)
// }






// var x = 1;
// for(var i = 1; i <5; i++){
//     x = x*i;
// }
// console.log(x)

// function oddnumber(oddnumber){
//     if(oddnumber % 2 == 0){
//         return true;
//     }else{
//         return false
//     }
// }
// var x = parseFloat(prompt("enter your number"));
// var c = oddnumber(x);
// console.log(c)













// var torikul = {
//     name:"torikul islam",
//     id:221015042,
//     phone: 01798087,
// }
// var x = torikul.name = "robiul"
// console.log(x)
































// let factorial = 1;
// for(var i = 1; i<=5; i++){
//     factorial = factorial * i;
//     console.log(factorial)
// // }
// let factorial = 1;
// function factorialFunction(Numberfactoria){ 
// for(var i = 1; i <= Numberfactoria; i++){
//     factorial = factorial * i;
    // console.log(factorial)
    // return factorial;
//    }
//    return factorial;
// }
// var x = 3;          
// var x = factorialFunction(6)
// console.log(x)
// var y = [12,46,7]
// var x = Math.max(y);
// console.log(x);
// var sum = 0;
// for(var i = 0; i < arraYnumber.length; i++){
//     // console.log(i)
//     var elemwe = arraYnumber[i];
//     // console.log(elemwe);
//     sum = sum + elemwe;
//     console.log(sum)
// }

// var x =[5,6,7,62];
// var y = Math.max(...x);
// console.log(y)

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (var i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest)


// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest);