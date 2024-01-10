//boton para el get
const getBtn = document.getElementById('get-btn');
const tabla = document.querySelector('table tbody');

const getData = () => {
    axios.get('https://dolarapi.com/v1/dolares/blue')
        .then(response => {
            console.log(response.data);
            //agregarla dentro del getData para que funcione
            tablaDolarBlue(response.data);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
};

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

