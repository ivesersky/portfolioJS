const listadoContainer = document.querySelector("#listadoContainer")//container(padre) para cada itemServicio(hijo)
const carritoPrint = document.querySelector("#carrito")
let i;

class Producto{
    constructor(servicio,descripcionServicio,precio){
        this.servicio = servicio;
        this.descripcionServicio = descripcionServicio;
        this.precio = precio;
    }
   
   }
   //creo la lista
   let itemServicio = [];
   
   
   itemServicio.push(new Producto("Produccion de pieza audiovisual","Produccion", 15450))
   itemServicio.push(new Producto( "Montaje y Posproduccion","Montaje", 8500))
   itemServicio.push(new Producto( "Flyers promocionales","Flyers", 3750))
   itemServicio.push(new Producto( "Foto Producto + Retoque digital","Foto producto", 9890))
   itemServicio.push(new Producto( "Sesion 35mm (sin revelado)","Analogico I",  4085))
   itemServicio.push(new Producto( "Sesion 35mm (incluye revelado x1)","Combo analogico", 5985))
   


for( i=0; i < itemServicio.length; i++){

listadoContainer.innerHTML += `
    
<div class="card carritoCard" >
<div class="card-body">
<h5 class="card-text card-title">${itemServicio[i].descripcionServicio}</h5>
<h7 class="card-subtitle mb-2 text-muted">${itemServicio[i].servicio}</h7>
<h6 class="card-subtitle mb-2 text-precio">$ ${itemServicio[i].precio}</h6>
<button id="${i}" class="btnComprar addToCart" onclick="guardarId(${i})"><i class="fas fa-cart-plus"></i> AGREGAR </button>
</div>
</div>
`
}

// //Inicio Carrito

let carritoDeCompra = [];
function guardarId(ide){
    let ides = ide;
    let carrito = document.getElementById(ides).id
    carritoDeCompra.push(itemServicio[ides])
console.log(carritoDeCompra);

carritoPrint.innerHTML += `
 
<div class="card carritoCard itemAgregado">
<p class="card-text">${carritoDeCompra[carritoDeCompra.length-1].descripcionServicio}</p>
<h6 class="card-subtitle mb-2 text-muted">$  ${carritoDeCompra[carritoDeCompra.length-1].precio}</h6>
<button id="${i}" class="btnComprar btn-delete" ><i class="fas fa-trash-alt"></i> QUITAR</button>
</div>
`;

}


guardar_localstorage();
//AGREGAR ITEM AL STORAGE
function guardar_localstorage(){
    localStorage.setItem('servicio',itemServicio);
    
}








// function removeItemCarrito(event){
//     const buttonClicked = event.target;
//     buttonClicked.closest('.itemAgregado').remove();
//     console.log(buttonClicked);
// }
// const d= document;

// const removeCard = (element) => {

//     if(element.className === "itemAgregado"){
//         element.parentElement.parentElement.remove();

//     }
// }

// d.addEventListener('click', (e)=>{
//     removeCard(e.target);
// })