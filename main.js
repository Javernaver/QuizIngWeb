"use strict";
var Quiz = /** @class */ (function () {
    function Quiz() {
        var menu = document.getElementById("menu"); // obtener el menu con todas las categorias en un get
        menu.addEventListener("click", function (e) {
            var esCat = e.target.nodeName === 'A'; // comprobar si el elemento es del tipo "A" para las categorias del menu
            if (!esCat) {
                return;
            }
            document.getElementById("ubicacion").innerHTML = e.target.getAttribute('value'); // escribir el valor de value del elemento seleccionado en el elemento ubicacion
            console.log(e.target.getAttribute('value')); // escribir en consola el value del elemento seleccionado
        });
    }
    return Quiz;
}());
new Quiz();
