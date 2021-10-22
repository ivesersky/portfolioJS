//LOG IN Y ACCESO A CREAR MAS PRODUCTOS

class User {
    constructor(nombre,pass){
        this.nombre =nombre;
        this.pass =pass
    }
}


class Producto{
    constructor({categoria,servicio,precio, img}){
        this.categoria = categoria;
        this.servicio = servicio;
        this.precio = precio;
        this.img = "../img/flotante_1.jpg"//ojooo
    }
   
}
   
const user = new User ("user","1234") 

let listaProductos;
 //verificacion para ver si esta nulo o no
if(localStorage.getItem("lista") == null){
    listaProductos = []
} else {
    listaProductos =JSON.parse(localStorage.getItem("lista"))
}

const crearProducto = (servicio,categoria,precio,img) => {
    const producto = new Producto(servicio,categoria,precio,img)
    return producto
}

const confirmacionAcceso = () =>{
    let bucle =true

    while(bucle){
        const nombre =prompt("Ingresa tu nombre de usuario");
        const pass = prompt("Ingresa tu contraseña")

      if(nombre === user.nombre && pass === user.pass){
          bucle =false

          let ciclo =true;

          while(ciclo){
            const servicio = prompt("ingrese nombre del producto");
            const categoria = prompt("ingrese categoria del producto");
            const precio = Number(prompt("ingrese precio del producto")); 

            listaProductos.push(crearProducto(servicio,categoria,precio,img))
            localStorage.setItem("lista", JSON.stringify(listaProductos))

            ciclo = confirm("Deseas agregar otro mas?")
          }
          break;
      }else {
          alert("USUARIO INCORRECTO");
      }
    
    }
}

confirmacionAcceso()
