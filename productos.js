const listadoContainer = document.querySelector("#listadoContainer")//container(padre) para cada itemServicio(hijo)
const carritoPrint = document.querySelector("#carrito")
let i;

class Producto{
    constructor(id,servicio,descripcionServicio,precio){
        this.id = id;
        this.servicio = servicio;
        this.descripcionServicio = descripcionServicio;
        this.precio = precio;
    }
   
   }
   //creo la lista
   let itemServicio = [];
   
   
   itemServicio.push(new Producto( 1,"Produccion de pieza audiovisual","Produccion", 15450))
   itemServicio.push(new Producto( 2, "Montaje y Posproduccion","Montaje", 8500))
   itemServicio.push(new Producto( 3, "Flyers promocionales","Flyers", 3750))
   itemServicio.push(new Producto( 4, "Foto Producto + Retoque digital","Foto producto", 9890))
   itemServicio.push(new Producto( 5, "Sesion 35mm (sin revelado)","Analogico I",  4085))
   itemServicio.push(new Producto( 6, "Sesion 35mm (incluye revelado x1)","Combo analogico", 5985))
   

//SERVICIOS---------
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

//CARRITO--------
let ides;
let carritoDeCompra = [];
function guardarId(ide){
     ides = ide;
    let carrito = document.getElementById(ides).id
    carritoDeCompra.push(itemServicio[ides])
console.log(carritoDeCompra);

carritoPrint.innerHTML += `
 
<div class="card carritoCard" id="${carritoDeCompra[carritoDeCompra.length-1].id}">
<p class="card-text">${carritoDeCompra[carritoDeCompra.length-1].descripcionServicio}</p>
<h6 class="card-subtitle mb-2 text-muted">$  ${carritoDeCompra[carritoDeCompra.length-1].precio}</h6>
<button id="${i}" class="btnComprar btn-delete" name="remove" ><i class="fas fa-trash-alt"></i> QUITAR</button>
</div>
`;

 guardar_localstorage();

}


// //GET ID para el backoffice
// function getIdItem(){
//     let lista = JSON.parse(localStorage.getItem('servicios'));

//     let nuevoId;

//     if(lista == null || lista.length == 0){
//         let idItem = 0;

//         nuevoId = idItem + 1;
//         return nuevoId;
        
//     } else {
//         let nuevoId = lista[lista.length - 1].idItem + 1;
//         return nuevoId;
//     }
// }


//AGREGAR ITEM AL STORAGE
function guardar_localstorage(){
    localStorage.setItem('id',JSON.stringify(carritoDeCompra));
    
}

//QUITAR ITEM DEL DOM Y DEL STORAGE

document.addEventListener('click', (e)=>{
 if(e.target.name === 'remove'){
  e.target.parentElement.remove();
  remove_localstorage(e.target);
 }

})

//remover elementos del array
//setear en local storage

const remove_localstorage = (element) =>{
 //traer lista y comparo
 let item = element;

 carritoDeCompra = JSON.parse(localStorage.getItem('id'));

 carritoDeCompra = carritoDeCompra.filter((e) => {
     if('id' in e && e.id != element.parentElement.id){
         return true;
     }else{
         console.log("Se ha quitado con exito el servicio");
         return false;
     }

 });
 
 localStorage.setItem('id', JSON.stringify(carritoDeCompra))
}









