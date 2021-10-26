const listadoProductos = document.querySelector("#listadoProductos")
const carritoPrint = document.querySelector("#carrito")
let i;

class Producto{
    constructor(servicio,descripcionServicio,precio){
        this.servicio = servicio;
        this.descripcionServicio = descripcionServicio;
        this.precio = precio;
    }
   
   }
   //creo la lista y el carrito
   let listaServicios = [];
   
   
   listaServicios.push(new Producto("Produccion de pieza audiovisual","Produccion", 15450))
   listaServicios.push(new Producto( "Montaje y Posproduccion","Montaje", 8500))
   listaServicios.push(new Producto( "Flyers promocionales","Flyers", 3750))
   listaServicios.push(new Producto( "Foto Producto + Retoque digital","Foto producto", 9890))
   listaServicios.push(new Producto( "Sesion 35mm (sin revelado)","Analogico I",  4085))
   listaServicios.push(new Producto( "Sesion 35mm (incluye revelado x1)","Combo analogico", 5985))
   

for( i=0; i < listaServicios.length; i++){

listadoProductos.innerHTML += `
    
<div class="card carritoCard" >
<div class="card-body">
<h5 class="card-text card-title">${listaServicios[i].descripcionServicio}</h5>
<h7 class="card-subtitle mb-2 text-muted">${listaServicios[i].servicio}</h7>
<h6 class="card-subtitle mb-2 text-precio">$ ${listaServicios[i].precio}</h6>
<button id="${i}" class="btnComprar addToCart" onclick="guardarId(${i})"><i class="fas fa-cart-plus"></i> AGREGAR </button>
</div>
</div>
`
}

// //Inicio Carrito
var b;
let carritoDeCompra = [];
function guardarId(ide){
    let ides = ide;
    let carrito = document.getElementById(ides).id
    carritoDeCompra.push(listaServicios[ides])
console.log(carritoDeCompra);
carritoPrint.innerHTML += `
 
<div class="card carritoCard itemAgregado">
<p class="card-text">${carritoDeCompra[carritoDeCompra.length-1].descripcionServicio}</p>
<h6 class="card-subtitle mb-2 text-muted">$  ${carritoDeCompra[carritoDeCompra.length-1].precio}</h6>
<button id="${i}" class="btnComprar btn-delete" ><i class="fas fa-trash-alt"></i> QUITAR</button>
</div>
`;

carritoIndex.querySelector('.btn-delete').addEventListener('click', removeItemCarrito);
}

function removeItemCarrito(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.itemAgregado').remove();
    console.log(buttonClicked);
}

/*
// no funciona  >:( 
function eliminar(){
    let list = document.getElementById('${i}');
    b.removeChild(list.item(0));
}
*/