function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function cambiarFondo() {
  const colores = ['#f0f2f5', '#e0f2fe', '#fef3c7', '#dcfce7', '#fce7f3'];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  
  while (nuevoColor === colorActual) {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  }

  document.body.style.backgroundColor = nuevoColor;
} 
