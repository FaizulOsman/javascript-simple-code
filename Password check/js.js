document.querySelector("#myinput").addEventListener("keyup", function() {
    var inputpass = this.value;
    var pass = "faizulosman";

    if(inputpass==pass){
        document.querySelector("#demo h2").innerHTML= "<font color='green'>Correct Password</font>";
    }else{
        document.querySelector("#demo h2").innerHTML= "<font color='red'>Incorrect Password</font>";

    }
})