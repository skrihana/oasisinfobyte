function convert(){
    var num = Number(document.getElementById("inp1").value);
    var type = document.getElementById("type").value;
    var result = (type==="celsius")? `${((num-32)*(5/9)).toFixed(2)}°C`:`${((num*(9/5))+32).toFixed(2)}F`
    document.getElementById("result").value = result
    console.log(num, type, result)      
}