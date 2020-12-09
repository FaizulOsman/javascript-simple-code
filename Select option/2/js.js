document.querySelector("#option").addEventListener("change", function() {
    var selected = this.value;

    if(selected==1){
        document.querySelector("h1").innerHTML="You have selected: Bangladesh";
    }else if(selected==2){
        alert("You have selected: India")
    }else if(selected==3){
        console.log("You have selected: Pakistan")
    }else{

    }





})