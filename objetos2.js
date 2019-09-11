const alumnos = [{nombre:"Daniel",materias:[{materia:"quimica", calificacion: 30}, {materia:"español",calificacion: 80}]}, 
{nombre:"Rodrigo", materias:[{materia:"calculo", calificacion: 70}, {materia:"biologia",calificacion: 40}]}, 
{nombre:"Lucia", materias:[{materia:"geografia",calificacion: 50}, {materia:"cirujia", calificacion: 80}]}]

for(let indice = 0; indice < alumnos.length; indice++){
    for(let index = 0; index < alumnos[indice].materias.length; index++){
        if(alumnos[indice].materias[index].calificacion < 60){
            console.log(alumnos[indice].nombre + " reprobado en " + alumnos[indice].materias[index].materia + " final: " + alumnos[indice].materias[index].calificacion);
        }
    }
}


