let taka_addbtn = document.getElementById("taka_addbtn");
let taka_deposit = document.getElementById("taka_deposit")
let deposit = document.getElementById("deposit");
let total = document.getElementById("total");
taka_addbtn.addEventListener("click", function(){
    var amountTaka = parseFloat(taka_deposit.value);
    var x = parseFloat(deposit.innerText);
    var muttaka = x + amountTaka;
    deposit.innerText = muttaka;
    
    var newTotal = parseFloat(total.innerText);
    var main = newTotal + amountTaka;
    total.innerText = main;
    taka_deposit.value = " ";
})

var taka_widtrow = document.getElementById("taka_widtrow");
var widthrow = document.getElementById("widthrow");
var width_rowbtn = document.getElementById("width_rowbtn");
width_rowbtn.addEventListener("click", function(){
    var takatulbo = parseFloat(taka_widtrow.value);
    let z = parseFloat(widthrow.innerText);
    var tr = z + parseFloat(taka_widtrow.value);
    var minus = parseFloat(total.innerText) - parseFloat(taka_widtrow.value);
    total.innerText = minus;
    console.log(minus)
    widthrow.innerText = tr;
    taka_widtrow.value =" ";
})
