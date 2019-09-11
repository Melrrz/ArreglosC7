const calificaciones = [8, 9, 10, 7]
let sumaCalificaciones = 0

for (let contador = 0; contador < calificaciones.lenght; contador++){
    sumaCalificaciones += calificaciones[contador]
}
const promedio = sumaCalificaciones/calificaciones.lenght

if (promedio >= 8) {
    console.log("Puedes tener una beca")
} else {
    console.log("Olvidalo")
}
