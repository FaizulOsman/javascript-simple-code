document.getElementById("show").addEventListener("dblclick",function() {
    document.getElementById("demo").setAttribute("style", "opacity:1; transform:scaleY(1);")
});


document.getElementById("hide").addEventListener("dblclick", function() {
    document.getElementById("demo").setAttribute("style", "opacity:0; transform:scaleY(0);")
});