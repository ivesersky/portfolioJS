
class Producto{
 constructor(servicio,descripcionServicio,precio){
     this.servicio = servicio;
     this.descripcionServicio = descripcionServicio;
     this.precio = precio;
 }

}

let listaServicios = [];
console.log("Listado de servicios disponibles:")
listaServicios.push(new Producto("produccion", "Produccion de pieza audiovisual", 15450))
listaServicios.push(new Producto("montaje", "Montaje y Posproduccion", 8500))
listaServicios.push(new Producto("flyers", "Flyers promocionales", 3750))
listaServicios.push(new Producto("foto producto", "Foto Producto + Retoque digital", 9890))
listaServicios.push(new Producto("analogico", "Sesion 35mm (sin revelado)", 4085))
listaServicios.push(new Producto("combo analogico", "Sesion 35mm (incluye revelado x1)", 5985))


listaServicios.sort((a,b) =>{
    if(a.servicio > b.servicio){
        return 1
    }
    if(a.servicio < b.servicio){
        return -1
    }return 0
})
 
listaServicios.forEach(serv => {
    console.log(serv.servicio);
}) 

let search = prompt("¿Que servicio desea buscar?")
let buscadorMultiple = listaServicios.filter(serv => serv.servicio === search)
console.log(buscadorMultiple);

