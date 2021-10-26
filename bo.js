class Producto{
    constructor({categoria,servicio,precio}){
        this.categoria = categoria;
        this.servicio = servicio;
        this.precio = precio;
    }
   
   }

let listaBack = []

const imprimirDatos = () => {
    const producto = new Producto(
        {
            categoria : document.getElementById("categoria").value,
            servicio : document.getElementById("servicio").value,
            precio : document.getElementById("precio").value
        }
    )
    document.getElementById("nueva-lista").innerHTML += `
    
    <div class="card" >
    <div class="card-body">
    <p class="card-text">${producto.categoria}</p>
    <h6 class="card-subtitle mb-2 text-muted">${producto.servicio}</h6>
    <h6 class="card-subtitle mb-2 text-muted">$ ${producto.precio}</h6>
    <button id="ide">Comprar</button>
    </div>
    </div>
   `
   return producto
 }
       
    
    
document.getElementById("btn-enviar").addEventListener("click", (e) => {
    e.preventDefault()
    
    imprimirDatos()
    
    
})


