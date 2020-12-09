document.querySelector("#demo").addEventListener("click", function() {
    var a = window.open(null,"PRINT WINDOW","width=500px,height=400px,left=350px,top=100px")
    a.document.write("<h1 style='text-align:center;line-height:100px;'>Hello</h1>")
})