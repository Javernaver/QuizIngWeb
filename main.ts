

class Quiz{

    constructor(){

        let menu = document.getElementById("menu"); // leer el menu con todas las categorias
        
        menu.addEventListener("click", (e:Event) => { // listerner para cuando se hace click en algun elemento del menu
            let esCat = e.target.nodeName === 'A'; // comprobar si el elemento es del tipo "A" para las categorias del menu
              if (!esCat) {
                return;
              }

              document.getElementById("ubicacion").innerHTML = (<HTMLInputElement>e.target).getAttribute('value'); // escribir el valor de value del elemento seleccionado en el elemento ubicacion
              console.log((<HTMLInputElement>e.target).getAttribute('value')); // escribir en consola el value del elemento seleccionado

        });
        
    }
    

}

new Quiz();