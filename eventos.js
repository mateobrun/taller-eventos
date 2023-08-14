var ClickDiv = document.getElementById("divs");

ClickDiv.addEventListener("click", function(){
    alert("Hola, Soy el Div");
})

boton.addEventListener("click", function(sacarclick) {
    sacarclick.stopPropagation();

})