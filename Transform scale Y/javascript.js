document.querySelector("#show").addEventListener("click", function() {
    document.querySelector("#demo").setAttribute("style", "opacity:1; transform:scaleY(1);")
});

document.querySelector("#hide").addEventListener("click", function() {
    document.querySelector("#demo").setAttribute("style", "opacity:0; transform:scaleY(0);")
});