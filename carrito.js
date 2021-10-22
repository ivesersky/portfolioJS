//Mostrar lista
//Preguntar cual lleva
//calcular total del carrito

//array de objetos Producto
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
let carritoDeCompra = [];
let carrito = 0;
let verificar = false;

console.log("Listado de servicios disponibles:")
listaServicios.push(new Producto("produccion", "Produccion de pieza audiovisual", 15450))
listaServicios.push(new Producto("montaje", "Montaje y Posproduccion", 8500))
listaServicios.push(new Producto("flyers", "Flyers promocionales", 3750))
listaServicios.push(new Producto("foto producto", "Foto Producto + Retoque digital", 9890))
listaServicios.push(new Producto("analogico", "Sesion 35mm (sin revelado)", 4085))
listaServicios.push(new Producto("combo analogico", "Sesion 35mm (incluye revelado x1)", 5985))

//la ordeno alfabeticamente
listaServicios.sort((a,b) =>{
    if(a.servicio > b.servicio){
        return 1
    }
    if(a.servicio < b.servicio){
        return -1
    }return 0
})
 //muestro los elementos de la lista por su nombre
listaServicios.forEach(serv => {
    console.log(serv.servicio);
}) 

//elegir producto y comprar
let search = prompt("¿Que servicio desea buscar? produccion/montaje/flyers/foto producto/analogico/combo analogico")
let buscadorMultiple = listaServicios.filter(serv => serv.servicio === search)
console.log(buscadorMultiple);

function elegirProducto(){
    let producto = prompt("¿Cual quieres comprar?produccion/montaje/flyers/foto producto/analogico/combo analogico");
    carritoFinal(producto);
}

function carritoFinal(producto){
    let productoLleva = producto

    for(let i = 0; i <listaServicios.length; i++){
       if(productoLleva == listaServicios[i].servicio){
           listaServicios[i].comprarProducto();
           carritoDeCompra.push(listaServicios[i].servicio);
           verificar =true;
       }
       else if(i == listaServicios.length -1 && verificar == false){
           alert("El servicio que busca no es valido.")
           break;
       }
        
    }
    verificar = false;
    agregarAlCarrito();
}

function agregarAlCarrito(){
    let otroProducto = prompt("Desea contratar otro servicio mas?(si/no)");

    if(otroProducto == "si"){
        elegirProducto();
    }else if(otroProducto == "no"){
        console.log(`Compraste ${carritoDeCompra.length} servicios. Total a abonar: $ ${carrito}`);
        console.log(`Elementos en tu carrito de compras: ${carritoDeCompra}`);
    }else{
        alert("Escribelo de nuevo");
        agregarAlCarrito();
    }
}
elegirProducto();


