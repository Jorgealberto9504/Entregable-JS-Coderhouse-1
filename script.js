//variables
let productos = [
    { id: 0, nombre: "Paracetamol", precio: 10 },
    { id: 1, nombre: "Omeprazol", precio: 20 },
    { id: 2, nombre: "Amantadina", precio: 50 },
    { id: 3, nombre: "Metformina", precio: 30 },
    { id: 4, nombre: "Losartan", precio: 30 },
    { id: 5, nombre: "Amlodipino", precio: 35 },
    { id: 6, nombre: "Loperamida", precio: 15 },
    { id: 7, nombre: "Clorfenamina", precio: 20 },
    { id: 8, nombre: "Captopril", precio: 25 },
    { id: 9, nombre: "Nifedipino", precio: 60 },
];
let usarElSistema = ""; //esta variable nos servira para saber si el usuario quiere usar el sistema o no
let carrito = []; // esta variable almacenara los productos que seleccionemos
let seguirComprando = ""; //esta variable almacenara si queremos o no seguir agregando productos
let total = 0; // esta variable nos dara el total a pagar de los productos


//Funciones

//Esta funcion nos mostrara los productos que tenemos en existencia
function mostrarProductos() {
    console.log("Productos disponibles:");
    for(let i = 0 ; i <= 10 ; i++){
        console.log(productos[i]);
    }
}

//Esta funcion nos permite agregar productos al carrito
function agregar() {
    let idProducto = prompt("Ingresa el Id del productos que deseas agregar");
    idProducto = parseInt(idProducto)
    let productoSeleccionado = productos[idProducto];
        carrito.push(productoSeleccionado);
}

//Esta funcion nos suma los precios de los productos que agregamos al carrito
 function sumar(){
    for(let i = 0 ; i < carrito.length ; i++)
    total += carrito[i].precio;
    console.log("El total a pagar por tus productos es: " + total);

} 


// Esta parte nos hara la pregunta de si deseamos usar el sistema y si queremos seguir agregando productos por medio de bucles, condicionales y haciendo uso de las funciones anteriormente creadas
usarElSistema = prompt("Bienvenido a el simulador de Farmacia Telmar, Desea realizar alguna compra?");
if(usarElSistema == "si"){
    alert("Contamos con los siguientes productos, los cuales podra visualizar en nuestra consola")
    mostrarProductos(); //uso de funcion mostrarProductos
    agregar(); //uso defuncion agregar


    seguirComprando = prompt("Deseas agregar otro producto?");
    while(seguirComprando == "si"){
        agregar(); // uso de funcion agregar
        seguirComprando = prompt("Deseas agregar otro producto?");
    }
    
    
    console.log("Tu Carrito de compras tiene los siguientes productos:")
    for(let i = 0 ; i <= carrito.length ; i++){
        console.log (carrito[i])}

         sumar(); // uso de funcion sumar
        
    
    }else{
        alert("Fue un gusto atenderle");
    }
