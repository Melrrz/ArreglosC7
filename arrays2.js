const Asistencia = [false, false, true, false, true]
let sumaAsistencia = 0
for (let contador = 0; contador < Asistencia.length; contador++){
if (Asistencia[contador] == true) {
sumaAsistencia = sumaAsistencia + 1    
 }
}
const porcentaje = (sumaAsistencia * 100)/Asistencia.length
console.log(porcentaje)

