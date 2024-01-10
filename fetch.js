const getBtn = document.getElementById('get-btn');
const tabla = document.querySelector('table tbody');

const getData = () => {
    fetch('https://dolarapi.com/v1/dolares/blue')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        tablaDolarBlue(data);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
}

function tablaDolarBlue(responseData) {
    // Limpiar la tabla antes de agregar nuevos datos
    tabla.innerHTML = '';

    // Iterar sobre el objeto respuesta y agregar filas a la tabla
    for (const clave in responseData) {
        if (responseData.hasOwnProperty(clave)) {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${clave}</td><td>${responseData[clave]}</td>`;
            tabla.appendChild(fila);
        }
    }
}







getBtn.addEventListener('click', getData);
