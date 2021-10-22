let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")



if(localStorage.getItem("lista")== null){
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}


//array
listaObjetos.forEach(element => {
   imprimirDatos.innerHTML +=`
   <div class="card col-4" style="width: 18rem;">
   <div class="card-body">
       <h5 class="card-title">${element.servicio}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
       <p class="card-text">${element.precio}</p>
       
   </div>
   </div>
   `
}); //toma los elementos del storage y los imprime en esa carta



const comprar = (dato) =>{
    let carrito;
    if (localStorage.getItem("carrito") == null){
        carrito = []
    } else{
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}

carrito.push(dato)
localStorage.setItem("carrito", JSON.stringify(carrito))