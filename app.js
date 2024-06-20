// app.ts
// Definición de la función para calcular la edad
function calcularEdad(fechaNacimiento) {
    // Validar que la fecha de nacimiento tenga el formato YYYY-MM-DD
    var regexp = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexp.test(fechaNacimiento)) {
        console.error("Formato de fecha de nacimiento inválido. Debe ser YYYY-MM-DD.");
        return null;
    }
    // Obtener la fecha actual
    var fechaActual = new Date();
    // Obtener la fecha de nacimiento del string proporcionado
    var partesFecha = fechaNacimiento.split("-");
    var diaNacimiento = parseInt(partesFecha[2], 10);
    var mesNacimiento = parseInt(partesFecha[1], 10) - 1; // Meses en JavaScript son 0-indexados
    var anioNacimiento = parseInt(partesFecha[0], 10);
    // Crear un objeto de fecha de nacimiento
    var fechaNac = new Date(anioNacimiento, mesNacimiento, diaNacimiento);
    // Calcular la diferencia de años
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    // Ajustar la edad si aún no se ha cumplido el aniversario este año
    if (fechaNac.getMonth() > fechaActual.getMonth() ||
        (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())) {
        edad--;
    }
    return edad;
}
// Ejemplos de uso de la función calcularEdad
// Prueba 1: Fecha actual
var edad1 = calcularEdad("2000-06-19");
console.log("Edad para fecha de nacimiento \"2000-06-19\": ".concat(edad1));
// Prueba 2: Otra fecha en el pasado
var edad2 = calcularEdad("1995-10-30");
console.log("Edad para fecha de nacimiento \"1995-10-30\": ".concat(edad2));
// Prueba 3: Otra fecha en el futuro (la edad debería ser 0)
var edad3 = calcularEdad("2025-01-15");
console.log("Edad para fecha de nacimiento \"2025-01-15\": ".concat(edad3));
// Prueba 4: Fecha de nacimiento inválida (debería mostrar un error)
var edad4 = calcularEdad("15-05-1990");
if (edad4 === null) {
    console.error("Fecha de nacimiento inválida: 15-05-1990");
}
// Prueba 5: Fecha de nacimiento vacía (debería mostrar un error)
var edad5 = calcularEdad("");
if (edad5 === null) {
    console.error("Fecha de nacimiento vacía.");
}
