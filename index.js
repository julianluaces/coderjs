
nombre = prompt("Por favor, ingresa tu nombre:")

alert("Bienvenido a nuestro ecommerce, " + nombre + ".")

var categoria = prompt("¿Qué desea comprar?\nElija la opción 1 para remeras o la opción 2 para pantalones.")

switch (categoria) {
    case "1":
        var precioRemera = 20;
        var confirmacion = confirm("Usted eligió remera. Su precio es de $" + precioRemera + ".\n¿Desea comprar este artículo?")

        if (confirmacion) {
            var direccion = prompt("Ingrese su dirección para poder realizar el envío del pedido:")
            alert("Su artículo será enviado a: " + direccion)
            alert("Muchas gracias por su compra.")
        } else {
            alert("Muchas gracias por su visita.")
        }
        break;

    case "2":
        var precioPantalones = 30;
        var confirmacion = confirm("Usted eligió pantalones. Su precio es de $" + precioPantalones + ".\n¿Desea comprar este artículo?")

        if (confirmacion) {
            var direccion = prompt("Ingrese su dirección para poder realizar el envío del pedido:")
            alert("Su artículo será enviado a: " + direccion)
            alert("Muchas gracias por su compra.")
        } else {
            alert("Muchas gracias por su visita.")
        }
        break;

    default:
        alert("Opción no válida. Muchas gracias por su visita.")
}




