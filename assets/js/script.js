//Ingreso de datos
var alumno = prompt("Ingrese nombre del alumno:", "Damian Cortes");

var carrera = prompt("Ingrese Carrera", "Full Stack");

var r1 = prompt("Ingrese ramo 1:", "HTML");
var r1Nota1 = prompt("Ingrese nota 1 : " + r1 + " :", 4);
var r1Nota2 = prompt("Ingrese nota 2 : " + r1 + " :", 5);
var r1Nota3 = prompt("Ingrese nota 3 : " + r1 + " :", 4);

var r2 = prompt("Ingrese ramo 2:", "CSS");
var r2Nota1 = prompt("Ingrese nota 1 : " + r2 + " :", 3);
var r2Nota2 = prompt("Ingrese nota 2 : " + r2 + " :", 4);
var r2Nota3 = prompt("Ingrese nota 3 : " + r2 + " :", 5);

var r3 = prompt("Ingrese ramo 3:", "JavaScript");
var r3Nota1 = prompt("Ingrese nota 1 : " + r3 + " :", 2);
var r3Nota2 = prompt("Ingrese nota 2 : " + r3 + " :", 5);

var aprobacion = prompt("Ingrese Nota de Aprobación: ", 4);

//Calculo de Promedio ramo 1
var promedioR1 =
  (parseFloat(r1Nota1) + parseFloat(r1Nota2) + parseFloat(r1Nota3)) / 3;

//Calculo de Promedio ramo 2
var promedioR2 =
  (parseFloat(r2Nota1) + parseFloat(r2Nota2) + parseFloat(r2Nota3)) / 3;

//Calculo de Promedio ramo 3
var promedioR3 = (parseFloat(r3Nota1) + parseFloat(r3Nota2)) / 2;

//calculo del promedio final de aprobación
var notaFinal = (promedioR1 + promedioR2 + promedioR3) / 3;

//Calculo Nota para aprobar javaScript

var notaminimaX =
  3 * parseFloat(aprobacion) - (parseFloat(r3Nota1) + parseFloat(r3Nota2));

//Datos Alumno + tabla

document.write(`
<div class='container'>
<h1 class='my-5'>Notas Finales</h1>
<h4>Nombre: ${alumno}</h4>
<h4>Carrera: ${carrera}</h4>
<table class='table my-4'>
<thead class='thead-dark'>
<tr>
<th scope='col'>Ramo</th>
<th scope='col'>Nota 1</th>
<th scope='col'>Nota 2</th>
<th scope='col'>Nota 3</th>
<th scope='col'>Promedio</th>
</tr>
</thead>
<tbody>
<tr>
<td>${r1}</td>
<td>${r1Nota1}</td>
<td>${r1Nota2}</td>
<td>${r1Nota3}</td>
<td>${promedioR1.toFixed(2)}</td>
</tr>
<tr>
<td>${r2}</td>
<td>${r2Nota1}</td>
<td>${r2Nota2}</td>
<td>${r2Nota3}</td>
<td>${promedioR2.toFixed(2)}</td>
</tr>
 <tr>
 <td>${r3}</td>
 <td>${r3Nota1}</td>
 <td>${r3Nota2}</td>
<td> - </td>
<td>${promedioR3.toFixed(2)}</td>
</tr>
</tbody>
 </table>
 <h6 class='mt-5'>Para aprobar el ramo Javascript con nota ${aprobacion}, necesitas obtener un ${notaminimaX.toFixed(2)} en la nota 3.</h6>
`);