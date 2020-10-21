"use strict";
var Quiz = /** @class */ (function () {
    function Quiz() {
        var men = document.getElementById("menu");
        men.addEventListener("click", function (e) {
            var esCat = e.target.nodeName === 'A';
            if (!esCat) {
                return;
            }
            document.getElementById("ubicacion").innerHTML = e.target.getAttribute('value');
            console.log(e.target.getAttribute('value'));
        });
    }
    return Quiz;
}());
new Quiz();
