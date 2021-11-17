//TOGGLE. MUESTRA-OCULTA DESLIZANDO PARA ARRIBA-ABAJO

 $(".btn-ocultar").on("click", ()=>{
     $(".imgProd").slideToggle(1500);
     $(".card-subtitle.text-muted").slideToggle(1500);

 })



//AJAX. METODO POST
//ej. yo quiero mostrar el dolar actualizado. PETICION SIMPLE
//  setInterval( ()=>{
//      const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"  
//      $.get(url,(data,est) =>{
//          document.getElementById("dolar").innerHTML ="" //para que se superpongan y no se repitan
//          if(est== "success"){
//              //console.log(data)
//              console.log("DOLAR ACTUALIZADO")
//              data.forEach(element => {
//                  //.casa porque es la propiedad del objeto que en este caso es el url
//                  document.getElementById("dolar").innerHTML += `
//                      <div class="col-3 carritoCard">
//                          <p>${element.casa.nombre}</p>
//                          <p class="text-danger">${element.casa.compra}</p>
//                          <p class="text-success">${element.casa.venta}</p>
//                      </div>
//                      `                  
//                  ;
//              });    
//          }
//      })
// }, 5000)

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