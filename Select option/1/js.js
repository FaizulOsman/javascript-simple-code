document.querySelector("#option").addEventListener("change",function() {
    document.querySelector("#selected h1").innerHTML="You have selected: " +this.value;
})