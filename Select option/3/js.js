document.querySelector("#option").addEventListener("change", function() {
    var selected = this.value;

    if(selected==1){
        document.querySelector("p").innerHTML='<select><option value="">Dhaka</value><option value="">Chattogram</value><option value="">Sylet</value></select>';
    }else if(selected==2){
        document.querySelector("p").innerHTML='<select><option value="">Dilli</value><option value="">Kalkata</value><option value="">Mumbai</value></select>'
    }else if(selected==3){
        document.querySelector("p").innerHTML='<select><option value="">Islamabad</value></select>'
    
    }else{

    }





})