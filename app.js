//TOGGLE. MUESTRA-OCULTA DESLIZANDO PARA ARRIBA-ABAJO

 $(".btn-ocultar").on("click", ()=>{
     $(".imgProd").slideToggle(1500);
     $(".card-subtitle.text-muted").slideToggle(1500);

 })



//Focus- blur effect en contacto.html
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    parent.classList.remove("focus");
}

inputs.forEach((input)=>{
 input.addEventListener("focus",focusFunc);
 input.addEventListener("blur",blurFunc)
});

