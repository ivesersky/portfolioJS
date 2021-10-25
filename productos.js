const listadoProductos = document.querySelector("#listadoProductos")
const carritoPrint = document.querySelector("#carrito")
let i;

class Producto{
    constructor(servicio,descripcionServicio,precio){
        this.servicio = servicio;
        this.descripcionServicio = descripcionServicio;
        this.precio = precio;
    }
   
    comprarProducto(){
        carrito = carrito + this.precio;
        alert("Compraste 1 "+ this.servicio + " por $" + this.precio);
    }
   
   }
   //creo la lista y el carrito
   let listaServicios = [];
   

   let verificar = false;
   
   console.log("Listado de servicios disponibles:")
   listaServicios.push(new Producto("produccion", "Produccion de pieza audiovisual", 15450))
   listaServicios.push(new Producto("montaje", "Montaje y Posproduccion", 8500))
   listaServicios.push(new Producto("flyers", "Flyers promocionales", 3750))
   listaServicios.push(new Producto("foto producto", "Foto Producto + Retoque digital", 9890))
   listaServicios.push(new Producto("analogico", "Sesion 35mm (sin revelado)", 4085))
   listaServicios.push(new Producto("combo analogico", "Sesion 35mm (incluye revelado x1)", 5985))
   
   //la ordeno alfabeticamente
   
    //muestro los elementos de la lista por su nombre
   listaServicios.forEach(serv => {
       console.log(serv.servicio);
   }) 



   for( i=0; i < listaServicios.length; i++){

listadoProductos.innerHTML += `
    
<div class="card" >
<div class="card-body">
<p class="card-text">${listaServicios[i].descripcionServicio}</p>
<h6 class="card-subtitle mb-2 text-muted">${listaServicios[i].servicio}</h6>
<h6 class="card-subtitle mb-2 text-muted">$ ${listaServicios[i].precio}</h6>
<button id="${i}" class="btnComprar" onclick="guardarId(${i})">Comprar</button>
</div>
</div>
`
}


