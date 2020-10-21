

class Quiz{

    constructor(){

        let men = document.getElementById("menu");
        
        men.addEventListener("click", (e:Event) => {
            let esCat = e.target.nodeName === 'A';
              if (!esCat) {
                return;
              }

              document.getElementById("ubicacion").innerHTML = (<HTMLInputElement>e.target).getAttribute('value');
              console.log((<HTMLInputElement>e.target).getAttribute('value'));

        });
        
    }
    

}

new Quiz();