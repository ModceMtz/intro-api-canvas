/*
=========================================================
Programa: Dibujo de un rectángulo en Canvas con JavaScript
Autor: Agustin Modce Granados Martinez
Fecha: 16/02/2026
Descripción:
Este programa obtiene un elemento <canvas> del documento HTML
mediante su identificador "Lienzo". Luego ajusta su tamaño
al 50% del ancho y 50% del alto de la pantalla.
Después obtiene el contexto de dibujo en 2 dimensiones (2D)
y dibuja un rectángulo.

Requisitos:
- Debe existir en el archivo HTML un elemento:
  <canvas id="Lienzo"></canvas>
=========================================================
*/


// --------------------------------------------------------
// 1. Obtener el elemento canvas del documento HTML
// --------------------------------------------------------

var canvas = document.getElementById("Lienzo");


// --------------------------------------------------------
// 2. Ajustar el tamaño del canvas al 50% de la pantalla
// --------------------------------------------------------

// window.innerWidth  → ancho visible del navegador
// window.innerHeight → alto visible del navegador
// Multiplicamos por 0.5 para obtener el 50%

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;


// --------------------------------------------------------
// 3. Obtener el contexto de dibujo en 2D
// --------------------------------------------------------

var ctx = canvas.getContext("2d");


// --------------------------------------------------------
// 4. Definir el color de relleno
// --------------------------------------------------------

ctx.fillStyle = "rgb(0, 255, 255)";


// --------------------------------------------------------
// 5. Dibujar un rectángulo relleno
// --------------------------------------------------------

// Ahora usaremos todo el tamaño del canvas dinámicamente
ctx.fillRect(10, 10, canvas.width - 550, canvas.height - 200);
