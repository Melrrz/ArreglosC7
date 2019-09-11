const alumnos = [{nombre:"Daniel",calificaciones:[8, 5, 9, 10, 7]}, 
{nombre:"Rodrigo", calificaciones:[4, 9, 3, 4, 6]}, 
{nombre:"Lucia", calificaciones:[9, 8, 10, 10, 8]}]

let sumacal = 0
let promedio = 0
let contador = 0
let conta = 0

for (let contador = 0; contador < alumnos.length; contador++){
    for (let conta = 0; conta < alumnos[contador].calificaciones.length; conta++){
        sumacal = sumacal + alumnos[contador].calificaciones[conta]
    }
   promedio = sumacal/alumnos[contador].calificaciones.length
    if (promedio > 6){
        sumacal = 0
    }   else {
            console.log(alumnos[contador].nombre)
        }
    
}

