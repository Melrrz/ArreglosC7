const alumnos = [{nombre:"Daniel",calificaciones:[8, 5, 9, 10, 7]}, 
{nombre:"Rodrigo", calificaciones:[4, 9, 3, 4, 6]}, 
{nombre:"Lucia", calificaciones:[9, 8, 10, 10, 8]}]

let sumacal = 0
let promedio = 0

for (let indice = 0; indice < alumnos.length; indice++){
    for (let index = 0; index < alumnos[indice].calificaciones.length; conta++){
        sumacal = sumacal + alumnos[indice].calificaciones[conta]
    }
   promedio = sumacal/alumnos[indice].calificaciones.length
    if (promedio > 6){
        sumacal = 0
    }   else {
            console.log(alumnos[indice].nombre)
        }
    
}

