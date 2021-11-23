const listadoContainer = document.querySelector("#listadoContainer")//container(padre) para cada itemServicio(hijo)
const carritoPrint = document.querySelector("#carrito")
let i;

class Producto{
    constructor(id,servicio,descripcionServicio,precio, img){
        this.id = id;
        this.servicio = servicio;
        this.descripcionServicio = descripcionServicio;
        this.precio = precio;
        this.img = img;
    }
   
   }
 
   let itemServicio = [];
   
   
   itemServicio.push(new Producto( 1,"Produccion de pieza audiovisual","Produccion", 15450,  "./img/produccion.gif"))
   itemServicio.push(new Producto( 2, "Montaje y Posproduccion","Montaje", 8500))
   itemServicio.push(new Producto( 3, "Flyers promocionales","Flyers", 3750))
   itemServicio.push(new Producto( 4, "Foto Producto + Retoque digital","Foto producto", 9890))
   itemServicio.push(new Producto( 5, "Sesion 35mm (sin revelado)","Analogico I",  4085))
   itemServicio.push(new Producto( 6, "Sesion 35mm (incluye revelado x1)","Analogico II", 5985))
   

//SERVICIOS---------
for( i=0; i < itemServicio.length; i++){

listadoContainer.innerHTML += `
    
<div class="carritoCard" >
<div class="card-body">
<div  class="imgProd" ><img src="./img/${i}transp.png" alt=""></div>
<h5 class="card-text card-title">${itemServicio[i].descripcionServicio}</h5>
<h7 class="card-subtitle mb-2 ">${itemServicio[i].servicio}</h7>
<h6 class="card-subtitle mb-2 text-precio">$ ${itemServicio[i].precio}</h6>
<button id="${i}" class="btnComprar addToCart" onclick="guardarId(${i})"><i class="fas fa-cart-plus"></i> AGREGAR </button>
<button id="${i}" class="btn-ocultar btnComprar">VER +/-</button>
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
 
<div class="carritoCard agregado">
<div class="card-body "  id="${carritoDeCompra[carritoDeCompra.length-1].id}">
<h6 class="card-text card-title">${carritoDeCompra[carritoDeCompra.length-1].descripcionServicio}</h6>
<h7 class="card-subtitle mb-2 text-precio">$  ${carritoDeCompra[carritoDeCompra.length-1].precio}</h7>
<button id="${i}" class="btnComprar btn-delete" name="remove" ><i class="fas fa-trash-alt"></i> QUITAR</button>
</div>
</div>
`;

 guardar_localstorage();

}

//AGREGAR ITEM AL STORAGE
function guardar_localstorage(){
    localStorage.setItem('id',JSON.stringify(carritoDeCompra));
    
}

//QUITAR ITEM DEL DOM Y DEL STORAGE

document.addEventListener('click', (e)=>{
 if(e.target.name === 'remove'){
  e.target.parentElement.parentElement.remove();
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



