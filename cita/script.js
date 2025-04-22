var nombre = document.querySelector('.agenda-nombre')
var hora = document.querySelector('.agenda-fecha')
var lista1 = document.getElementById('lista-citas')
var botonAgregar = document.getElementById('agendar-btn')
var botonModificar = document.getElementById('modificar-btn')

var citas = []
var citaIndex = -1

function mostrarCitas() {
  lista1.innerHTML = ''
  for (let i = 0; i < citas.length; i++) {
    let item = document.createElement('li')
    item.innerHTML = '<span>' + citas[i].nombre + ' - ' + citas[i].hora + '</span>' +
      '<div>' +
      '<button class="editar" onclick="editarCita(' + i + ')">Editar</button>' +
      '<button class="eliminar" onclick="eliminarCita(' + i + ')">Eliminar</button>' +
      '</div>'
    lista1.appendChild(item)
  }
}

function editarCita(i) {
  citaIndex = i
  nombre.value = citas[i].nombre
  hora.value = citas[i].hora
}

function eliminarCita(i) {
  citas.splice(i, 1)
  mostrarCitas()
}

botonAgregar.onclick = function() {
  if (nombre.value == '' || hora.value == '') {
    return
  }
  var cita = {
    nombre: nombre.value,
    hora: hora.value
  }
  citas.push(cita)
  mostrarCitas()
  nombre.value = ''
  hora.value = ''
}

botonModificar.onclick = function() {
  if (citaIndex >= 0) {
    citas[citaIndex].nombre = nombre.value
    citas[citaIndex].hora = hora.value
    mostrarCitas()
    nombre.value = ''
    hora.value = ''
    citaIndex = -1
  }
}