var num = 0;
var scores = 0;
var arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
document.addEventListener("keypress",keyboard);

var count  = 0;
function changeNumber(){
    sec=30;
    count  = 1;
}
let sec = 30;
 document.getElementById("time").innerText = "Time :"+sec;
let time = setInterval(function(){
    document.getElementById("time").innerText = "Time :"+sec;
     if(num == 26|| sec == 0){
        clearInterval(time);
        count = 0;
    }
    else if(count == 1){
        sec--;
    }
},1000)
  document.getElementById("score").innerText = "Score :"+scores;
function keyboard(event){
    if(count == 1){
    if(arr[0] === (event.key.toUpperCase())){
        document.getElementById(arr[0]).style.backgroundColor ="green";
        arr.splice(0,1);
        num++
        scores+=2;
        document.getElementById("score").innerText = "Score :"+scores;
    }
    }
}
