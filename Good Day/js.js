var a = new Date().getHours();

if(a < 12){
    document.getElementById("demo").innerHTML="Good Morning"
}
else if(a < 16){
    document.getElementById("demo").innerHTML="Good Noon"
}
else if(a < 18){
    document.getElementById("demo").innerHTML="Good Afternoon"
}
else if(a < 24){
    document.getElementById("demo").innerHTML="Good Evening"
}
else{
    document.getElementById("demo").innerHTML="Good Night"
}