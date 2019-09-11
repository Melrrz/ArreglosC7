const examen = [80, 75, 90, 55, 40] 
var repetir = 0

for (let contador = 0; contador < examen.length; contador++){
    if (examen[contador] < 60) {
        repetir = repetir + 1   
    }
}
console.log(repetir)